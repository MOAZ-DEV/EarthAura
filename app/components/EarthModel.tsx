"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { getFresnelMat } from '@/lib/getFresnelMat';
import getStarfield from '@/lib/getStarfield';

import earthMap from '@/assets/8081_earthmap10k.jpg';
import earthSpecMap from '@/assets/02_earthspec1k.jpg';
import earthBumpMap from '@/assets/01_earthbump1k.jpg';
import earthLightsMap from '@/assets/8081_earthmap10k.jpg';
import cloudMap from '@/assets/earthcloudmap.jpg';
import cloudTransMap from '@/assets/earthcloudmaptrans.jpg';

function createTexturedMesh<T extends THREE.Material>(
    geometry: THREE.BufferGeometry, 
    material: T,
    options: {
        texturePath?: string;
        anisotropy?: number;
        scale?: THREE.Vector3;
    } = {}
): THREE.Mesh {
    const mesh = new THREE.Mesh(geometry, material);
    if (options.scale) {
        mesh.scale.copy(options.scale);
    }
    if (options.texturePath) {
        const loader = new THREE.TextureLoader();
        const texture = loader.load(options.texturePath);
        texture.anisotropy = options.anisotropy || 16; // Apply anisotropic filtering
        (material as unknown as THREE.MeshPhongMaterial).map = texture;
    }
    return mesh;
}

export const EarthVisualization = (
    {className}:{className?: string}
) => {
    const mountRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;

        // Scene, Camera, and Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, w / h, 0.1, 500);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.outputColorSpace = THREE.SRGBColorSpace; // Updated property for color space
        renderer.toneMappingExposure = .5; // Brightness

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Earth group to hold all earth-related meshes
        const earthGroup = new THREE.Group();
        earthGroup.rotation.z = -23.4 * Math.PI / 180; // Earth's axial tilt
        scene.add(earthGroup);


        // Textures and materials
        const textureLoader = new THREE.TextureLoader();
        const anisotropy = renderer.capabilities.getMaxAnisotropy();

        const geometry = new THREE.SphereGeometry(1, 64, 64); // Higher detail with more segments

        const earthMaterial = new THREE.MeshPhongMaterial({
            map: textureLoader.load((earthMap.src)),
            specularMap: textureLoader.load(earthSpecMap.src),
            bumpMap: textureLoader.load(earthBumpMap.src),
            bumpScale: 0.05,
        });

        const earthMesh = createTexturedMesh(geometry, earthMaterial, { anisotropy });
        earthGroup.add(earthMesh);

        // Earth lights (night map)
        const lightsMaterial = new THREE.MeshBasicMaterial({
            map: textureLoader.load(earthLightsMap.src),
            blending: THREE.AdditiveBlending,
        });
        const lightsMesh = createTexturedMesh(geometry, lightsMaterial);
        earthGroup.add(lightsMesh);

        // Cloud layer
        const cloudsMaterial = new THREE.MeshStandardMaterial({
            map: textureLoader.load(cloudMap.src),
            transparent: true,
            opacity: 0.75,
            blending: THREE.AdditiveBlending,
            alphaMap: textureLoader.load(cloudTransMap.src),
        });
        const cloudsMesh = createTexturedMesh(
            geometry,
            cloudsMaterial,
            { scale: new THREE.Vector3(1.005, 1.005, 1.005), anisotropy }
        );
        earthGroup.add(cloudsMesh);

        // Fresnel glow effect
        const fresnelMaterial = getFresnelMat();
        const glowMesh = new THREE.Mesh(geometry, fresnelMaterial);
        glowMesh.scale.setScalar(1.01);
        earthGroup.add(glowMesh);

        // Starfield
        const stars = getStarfield({ numStars: 2000 });
        scene.add(stars);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            earthMesh.rotation.y += 0.0015;
            lightsMesh.rotation.y += 0.0015;
            cloudsMesh.rotation.y += 0.0023;
            glowMesh.rotation.y += 0.0015;
            stars.rotation.y -= 0.0001;

            renderer.render(scene, camera);
        };

        animate();

        // Resize handler
        const handleWindowResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleWindowResize, false);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleWindowResize);
            if (mountRef.current) { 
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} className={" "+className} />;
};
// background-blend-mode: multiply, screen;
// mix-blend-mode: normal;

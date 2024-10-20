"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import EarthPng from "@/assets/EarthPng.png";

const
    animateUp = (Num?: number, delay: number = 0) => {

        return {
            initial: {
                translateY: 300,
                opacity: 0
            },
            whileInView: {
                translateY: 0,
                opacity: 1,
                transition: { duration: Num || 0.75, delay: delay / 4 }
            },
            viewport: {
                once: true
            }
        }
    }, rotateIn = (Num?: number) => {

        return {
            initial: {
                scale: .25,
                rotate: 90,
                borderRadius: 1000,
                opacity: 0
            },
            whileInView: {
                scale: 1,
                rotate: 0,
                borderRadius: 24,
                opacity: 1,
                transition: { duration: Num || 0.5 }
            },
            viewport: {
                once: true
            }
        }
    };


export const CtaClimateChange = ({ className }: { className: string }) => {

    return <section className={"flex flex-row items-center justify-center gap-40 py-32 px-48 relative overflow-hidden bg-white text-white " + className}>
        <div className="flex flex-col items-start gap-10 justify-center h-full max-w-[500px] !aspect-square ">
            <motion.div {...(animateUp(.7, .7))}>
                <h1 className="text-4xl font-normal uppercase text-start text-black">
                    INTERACTIONS BETWEEN EARTH&apos;S SYSTEMS
                </h1>
            </motion.div>
            <motion.div {...(animateUp(.7, 1.25))}>
                <p className="text-base font-normal opacity-75 text-black">
                    Our Earth systems are intricately interconnected on a global scale, and understanding these connections is vital for addressing pressing environmental challenges. For instance, climate change can extend the duration and intensity of droughts, leading to an increase in the frequency of wildfires. These wildfires not only degrade air quality due to smoke but also significantly impact ecological succession and forest regeneration. By exploring these complex interactions, we aim to foster innovative solutions and inspire collaboration through the NASA Space Apps Challenge. Join us in unraveling the intricate relationships within Earth&apos;s systems and contributing to a sustainable future!
                </p>
            </motion.div>
        </div>
        <motion.div {...(rotateIn(1.7))} className="relative flex items-center justify-center overflow-hidden h-full  max-w-[500px] !aspect-square bg-black rounded-[24px] max-md:!rounded-2xl">
            <Image src={EarthPng} alt="" className="!m-3" />
        </motion.div>
    </section>;
};
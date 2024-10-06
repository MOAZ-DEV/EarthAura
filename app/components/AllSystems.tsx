"use client"
import { motion } from "framer-motion";
import Link from "next/link";

interface AllSystemsProps {
    className: string;
    Systems: {
        label: string;
        href: string;
    }[]
}

const
    animateUp = (Num?: number, delay: number = 0) => {

        return {
            initial: {
                translateY: 100,
                opacity: 0
            },
            whileInView: {
                translateY: 0,
                opacity: 1,
                transition: { duration: Num || 0.5, delay: delay / 4 }
            },
            viewport: {
                once: true
            }
        }
    }, slideDown = (Num?: number) => {

        return {
            initial: {
                height: 0,
                width: 0,
                borderRadius: 1000,
            },
            whileInView: {
                height: 'unset',
                width: '100%',
                borderRadius: 0,
                transition: { duration: Num || 0.5 }
            },
            viewport: {
                once: true
            }
        }
    };

export const AllSystems = ({ Systems, className }: AllSystemsProps) => {

    const Visualization = () => {
        return (
            <motion.div {...(slideDown(1.25))} className="absolute z-0 h-full w-full overflow-hidden">
                <video
                    className="h-screen w-full object-cover"
                    autoPlay
                    muted
                    loop
                    controlsList="nodownload nofullscreen noremoteplayback">
                    <source
                        src="/assets/galaxy magic Animated background Free to use.mp4"
                        type="video/mp4" />
                    <track
                        src="/path/to/captions.vtt"
                        kind="subtitles"
                        srcLang="en"
                        label="English" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
        );
    };

    const Item = ({ label, href, index }: { label: string; href: string; index: number; }) => {
        return <motion.div {...(animateUp(.7, index))}>
            <Link href={href} className="text-[#00000025] line-clamp-1 p-2 bg-white text-5xl max-lg:text-3xl uppercase hover:text-black transition-colors duration-200">
                {label}<span className="text-base font-bold align-top">({index})</span> {(index === (Systems.length - 1)) ? "" : ",  "}
            </Link>
        </motion.div>
    }
    return <div id="systems" className={"relative flex items-center justify-center bg-white h-screen py-40 overflow-hidden " + className}>
        <Visualization />
        <div className="flex flex-wrap justify-center items-center w-fit text-center max-w-[1575px]">
            {Systems.map((item, index) => <Item key={index} {...item}{...{ index }} />)}
        </div>
    </div>
}
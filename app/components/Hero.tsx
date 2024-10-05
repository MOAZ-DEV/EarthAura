'use client'
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
    className?: string;
    children?: ReactNode;
}


export const Hero = ({ className, ...props }: SectionProps) => {

    const
        animateUp = (Num?: number) => {

            return {
                initial: {
                    translateY: 100,
                    opacity: 0
                },
                whileInView: {
                    translateY: 0,
                    opacity: 1,
                    transition: { duration: Num || 0.5, delay: 1.25 }
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

    const EarthVisualization = () => {
        return (
            <motion.div {...(slideDown(1.25))} className="absolute z-0 h-full w-full overflow-hidden">
                <video
                    className="h-screen w-full object-cover"
                    autoPlay
                    muted
                    loop
                    controlsList="nodownload nofullscreen noremoteplayback">
                    <source
                        src="/assets/EarthRotation-DayNightCycle.mp4"
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

    return <section className={`flex flex-col items-center justify-center gap-9 h-lvh px-20 relative overflow-hidden ${className}`} {...props}>
        <EarthVisualization />
        <motion.div {...(animateUp(1.25))}>
            <h1 className="text-8xl text-center kode-mono z-10 max-w-[1100px] max-xl:!max-w-full max-md:!text-4xl">
                Harmonizing Our Systems
            </h1>
        </motion.div>

        {/* <button className="flex flex-row gap-4 py-3 px-5 bg-white text-black rounded-full group hover:bg-[#ffffff25] hover:!text-white backdrop-blur-md transition-all">
            Learn How You Can Help
            <Image className="group-hover:invert transition-all" src={LinkSvg} alt={""} />
        </button> */}
    </section>
        ;
}
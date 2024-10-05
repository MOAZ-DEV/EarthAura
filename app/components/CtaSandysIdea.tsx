"use client"
import { motion } from "framer-motion";

export const CtaSandysIdea = () => {
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
                    transition: { duration: Num || 0.5, delay: (delay / 4) }
                },
                viewport: {
                    once: true
                }
            }
        }, slideDown = (Num?: number) => {

            return {
                initial: {
                    width: 0,
                },
                whileInView: {
                    width: '100%',
                    transition: { duration: Num || 0.5 }
                },
                viewport: {
                    once: true
                }
            }
        };
    const Video = () => {
        return (
            <motion.div {...(slideDown(1.25))} className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
                <video
                    className="w-full"
                    width="320"
                    height="240"
                    autoPlay
                    muted
                    loop
                    controlsList="nodownload nofullscreen noremoteplayback">
                    <source
                        src="/assets/GalaxyStockVideo.mp4"
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

    return <div className="relative flex items-center justify-start py-20 px-40 w-full">
        <Video />
        <div className="flex flex-col items-start gap-10 justify-center w-full py-20 max-w-[875px]">
            <motion.div {...(animateUp(.7, .7))}>
                <h1 className="text-6xl font-normal uppercase text-start text-white mt-40">
                    INTERACTIONS BETWEEN EARTH&apos;S SYSTEMS
                </h1>
            </motion.div>
            <motion.div {...(animateUp(.7, 1.25))}>
                <p className="text-base font-normal opacity-75 text-white">
                    Our Earth systems are intricately interconnected on a global scale, and understanding these connections is vital for addressing pressing environmental challenges. For instance, climate change can extend the duration and intensity of droughts, leading to an increase in the frequency of wildfires. These wildfires not only degrade air quality due to smoke but also significantly impact ecological succession and forest regeneration. By exploring these complex interactions, we aim to foster innovative solutions and inspire collaboration through the NASA Space Apps Challenge. Join us in unraveling the intricate relationships within Earth&apos;s systems and contributing to a sustainable future!
                </p>
            </motion.div>
        </div>
    </div>
}
"use client"
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface InterconnectionsItem {
    index?: number;
    label: string;
    image: StaticImageData;
    href: string;
};
interface InterconnectionsProps {
    InterconnectionsList: InterconnectionsItem[];
};

const
    animateUp = (Num?: number, delay:number = 0) => {

        return {
            initial: {
                translateY: 400,
                opacity: 0
            },
            whileInView: {
                translateY: 0,
                opacity: 1,
                transition: { duration: Num || 0.5, delay: (delay/4)}
            },
            viewport: {
                once: true
            }
        }
    }

export const Interconnections = ({ InterconnectionsList }: InterconnectionsProps) => {

    const Item = ({ label, image }: InterconnectionsItem) => {
        return <div
            className="group flex flex-col gap-8 p-12 my-[-1px] mx-[-.5px]">
            <div className="flex flex-row items-center justify-between w-full px-6">
                <p className="text-xl uppercase text-black mx-a">{label}</p>
                <Link className="text-xl underline text-black mx-a opacity-45 hover:opacity-90 transition-opacity" href={""}>Learn More</Link>
            </div>
            <div className="overflow-hidden rounded-2xl">
                <Image
                    src={image}
                    alt=""
                    className="aspect-square h-fit w-full blur-sm group-hover:blur-0 transition-[filter] group-hover:!opacity-100 transition-opacity object-cover"
                    height={400} width={400} />
            </div>
        </div>
    }

    return <section className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-4 px-40">
            {InterconnectionsList.map((interconnect, index) => <motion.div key={index} {...(animateUp(1, index))}>
                <Item {...interconnect} {...{ index }} />
            </motion.div>)}
        </div>
    </section>
}
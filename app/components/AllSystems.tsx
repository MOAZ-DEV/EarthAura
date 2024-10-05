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
    };

export const AllSystems = ({ Systems, className }: AllSystemsProps) => {
    const Item = ({ label, href, index }: { label: string; href: string; index: number; }) => {
        return <motion.div {...(animateUp(.7, index))}>
            <Link href={href} className="text-black text-5xl max-lg:text-3xl uppercase opacity-45 hover:opacity-95 transition-opacity duration-200">
                {label}<span className="text-base font-bold align-top">({index})</span> {(index === (Systems.length - 1)) ? "" : ",  "}
            </Link>
        </motion.div>
    }
    return <div id="systems" className={"flex items-center justify-center bg-white py-40 " + className}>
        <div className="flex flex-wrap justify-center items-center w-fit text-center max-w-[1575px]">
            {Systems.map((item, index) => <Item key={index} {...item}{...{ index }} />)}
        </div>
    </div>
}
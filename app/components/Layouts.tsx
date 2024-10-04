import Link from "next/link";
import { ReactNode } from "react";

import EarthPng from "@/assets/EarthPng.png";
import StatalitePng from "@/assets/istockphoto-1496122426-612x612.png";
import LinkSvg from "@/assets/Link.svg";
import Image from "next/image";
import { EarthVisualization } from "./EarthModel";

interface MainProps {
    className?: string;
    children?: ReactNode;
}

export const Main = ({ className, children, ...props }: MainProps) => {
    return <main className={className + " min-h-screen"}{...props}>
        <Nav />
        {children}
        <Footer />
    </main>;
}
export const MarkdownLayout = ({ children }: MainProps) => {
    return <main className="min-h-screen gap-40 pt-40 bg-white">
        <Nav className="invert" />
        <div className="flex flex-col gap-6 items-center h-full w-full min-h-screen text-black">
            <div className="max-w-[940px] markdown">
                {children}
            </div>
        </div>
        <Footer />
    </main>;
}

interface SectionProps {
    className?: string;
    children?: ReactNode;
}
interface AllSystemsProps {
    className: string;
    Systems: {
        label: string;
        href: string;
    }[]
}

export const Section = {
    Hero: ({ className, ...props }: SectionProps) => {

        return <section className={`flex flex-col items-center justify-center gap-9 h-lvh px-20 relative overflow-hidden bg-black ${className}`} {...props}>
            <EarthVisualization className="absolute translate-y-[75%] scale-[2.45] !h-full !w-full" />
            <h1 className="text-5xl text-center kode-mono z-10 max-w-[1100px] max-xl:!max-w-full max-md:!text-3xl">
                Explore Earth’s Interconnected Systems: See how small changes create ripples across the planet.
            </h1>
            <button className="flex flex-row gap-4 py-3 px-5 bg-white text-black rounded-full group hover:bg-[#ffffff25] hover:!text-white backdrop-blur-md transition-all">
                Learn How You Can Help
                <Image className="group-hover:invert transition-all" src={LinkSvg} alt={""} />
            </button>
        </section>;
    },
    CtaClimateChange: ({ className }: { className: string }) => {
        return <section className={"flex flex-row items-center justify-center gap-40 py-10 px-48 relative overflow-hidden bg-white text-white " + className}>
            <div className="flex flex-col items-start gap-10 justify-center w-full !aspect-square ">
                <h1 className="text-4xl font-normal uppercase text-start text-black">
                    Climate Change is Disrupting Earth’s Systems
                </h1>
                <p className="text-base font-normal opacity-75 text-black">
                    As our planet warms, its systems—air, water, ecosystems, and more—are being thrown out of balance. This creates feedback loops that worsen environmental challenges like droughts, wildfires, and poor air quality. But by understanding how these systems are interconnected, we can start to make a change.
                </p>
                <button className="flex flex-row gap-16 py-3 bg-white border-black border-b text-black transition-all">
                    Learn How You Can Help
                    <Image className="transition-all" src={LinkSvg} alt={""} />
                </button>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden w-full !aspect-square bg-black rounded-[24px] max-md:!rounded-2xl">
                <Image src={EarthPng} alt="" className="!m-3" />
            </div>
        </section>;
    },
    CtaNasaData: ({ className }: { className: string }) => {
        return <section className={"flex flex-row-reverse items-center justify-center gap-40 py-10 px-48 relative overflow-hidden bg-white text-white " + className}>
            <div className="flex flex-col items-start gap-10 justify-center w-full !aspect-square ">
                <h1 className="text-4xl font-normal uppercase text-start text-black">
                    NASA’s Data, Your Tool for Understanding
                </h1>
                <p className="text-base font-normal opacity-75 text-black">
                    For over 50 years, NASA has been collecting data on our planet’s systems through satellites and sensors. We bring this data to life with our interactive platform, showing how interconnected Earth’s systems truly are.                </p>
                <button className="flex flex-row gap-16 text-left py-3 bg-white border-black border-b text-black transition-all">
                    Satellite imagery and data visualizations
                    <Image className="transition-all" src={LinkSvg} alt={""} />
                </button>
            </div>
            <div className="relative flex items-center justify-center overflow-hidden w-full !aspect-square bg-black rounded-[24px] max-md:!rounded-2xl">
                <Image src={StatalitePng} alt="" className="h-full w-full" />
            </div>
        </section>;
    },
    AllSystems: ({ Systems, className }: AllSystemsProps) => {
        const Item = ({ label, href, index }: { label: string; href: string; index: number; }) => {
            return <Link href={href} className="text-black text-4xl max-lg:text-3xl uppercase opacity-45 hover:opacity-95 transition-opacity duration-200">
                {label}<span className="text-base font-bold align-top">({index})</span>
                {(index === (Systems.length - 1)) ? "" : ", "}
            </Link>
        }
        return <div className={"flex items-center justify-center bg-white py-10 px-40 max-w-screen " + className}>
            <div className="w-fit text-center">
                {Systems.map((item, index) => <Item key={index} {...item}{...{ index }} />)}
            </div>
        </div>
    }
}

interface NavProps {
    className?: string;
    children?: ReactNode;
}

export const Nav = ({ className, ...props }: NavProps) => {
    const
        Logo = () => {
            return <p><span>EarthMood</span> | Nasa Space Apps</p>
        },
        Menu = () => {
            return <ul className="flex flex-row gap-4 max-md:!flex-col max-md:items-end max-md:gap-1">
                {[
                    { label: "Systems", href: "/systems", },
                    { label: "Interconnections", href: "/interconnections", },
                    { label: "Info", href: "/info", },
                ].map(({ label, href }) =>
                    <li key={label} className="opacity-75 hover:opacity-95 transition-opacity relative after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:rounded-full hover:after:w-full after:transition-all">
                        <Link href={href}>{label}</Link>
                    </li>
                )}
            </ul>
        };
    return <nav
        className={`flex flex-row items-center justify-between max-2xl:max-w-[1568px] w-full py-6 px-20 absolute top-0 z-10 max-md:items-start max-md:!px-6 ${className}`} {...props}>
        <Logo />
        <Menu />
    </nav>;
}

interface FooterProps {
    className?: string;
}

export const Footer = ({}: FooterProps) => {

    return <footer>
        <p>Copyright © 2024 EarthEra Inc.</p>
        <p>All rights reserved.</p>

        <div>
            link
        </div>
    </footer>
}
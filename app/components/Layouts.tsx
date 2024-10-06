import Link from "next/link";
import { ReactNode } from "react";
import { Interconnections } from "./Interconnections";
import { InterconnectsList, Systems } from "../shared";
import { AllSystems } from "./AllSystems";
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

export const MarkdownLayout = {
    Interconnect:({ children, }: MainProps) => {
        return <main className="flex flex-col gap-40 pt-40 min-h-screen bg-white">
            <Nav className="invert" />
            <div className="flex flex-col gap-6 items-center h-full w-full min-h-screen text-black">
                <div className="flex flex-col max-w-[940px] markdown">
                    {children}
                </div>
            </div>
            <Interconnections InterconnectsList={InterconnectsList} />
            <Footer />
        </main>;
    },
    System:({ children, }: MainProps) => {
        return <main className="flex flex-col gap-40 pt-40 min-h-screen w-screen bg-white">
            <Nav className="invert" />
            <div className="flex flex-col gap-6 items-center h-full w-screen min-h-screen text-black">
                <div className="flex flex-col max-w-[940px] markdown">
                    {children}
                </div>
            </div>
            <AllSystems className="max-lg:!px-7" {...{Systems}} />
            <Footer />
        </main>;
    }
}

interface NavProps {
    className?: string;
    children?: ReactNode;
}

export const Nav = ({ className, ...props }: NavProps) => {
    const
        Logo = () => {
            return <p><Link className="font-semibold max-sm:flex flex-col" href={"/"}>EarthAura</Link> <span className="max-sm:opacity-0">| Harmonizing Earth Systems</span></p>
        },
        Menu = () => {
            return <ul className="flex flex-row gap-4 max-md:!flex-col max-md:items-end max-md:gap-1">
                {[
                    { label: "Systems", href: "/#systems", },
                    { label: "Interconnections", href: "/#Interconnections", },
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

export const Footer = ({ }: FooterProps) => {

    return <footer className="flex flex-row items-center justify-center py-6 px-20 max-md:!px-6 text-black opacity-45 w-screen">
        <p>Copyright © 2024 EarthEra Inc. All rights reserved.</p>
    </footer>
}







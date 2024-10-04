import { Main, Section } from "@/components/Layouts";

const Systems = [
    { label: "agriculture", href: "/system/agriculture" },
    { label: "biodiversity", href: "/system/biodiversity" },
    { label: "disasters", href: "/system/disasters" },
    { label: "greenhouse gases", href: "/system/greenhouse-gases" },
    { label: "health and air quality", href: "/system/health-and-air-quality" },
    { label: "sea level rise", href: "/system/sea-level-rise" },
    { label: "sustainable energy", href: "/system/sustainable-energy" },
    { label: "water resources", href: "/system/water-resources" },
    { label: "wildfires", href: "/system/wildfires" },
];

export default function Home() {
    return (
        <Main className="flex flex-col !gap-20 max-lg:!gap-6 bg-white">
            <Section.Hero className="max-xl:!px-6" />
            <Section.CtaClimateChange className="max-xl:!px-8 max-xl:!gap-10 max-md:flex-col" />
            <Section.CtaNasaData className="max-xl:!px-8 max-xl:!gap-10 max-md:flex-col" />
            <Section.AllSystems {...{ Systems }} className="max-lg:!px-7" />
        </Main>
    );
}
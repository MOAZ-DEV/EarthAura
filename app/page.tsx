import {  Main } from "@/components/Layouts";
import { InterconnectionsList, Systems } from "./shared";
import { CtaClimateChange } from "./components/CtaClimateChange";
import { Hero } from "./components/Hero";
import { AllSystems } from "./components/AllSystems";
import { Interconnections } from "./components/Interconnections";
import { CtaSandysIdea } from "./components/CtaSandysIdea";

export default function Home() {
    return (
        <Main className="flex flex-col gap-40 max-lg:!gap-10 bg-white">
            <Hero className="max-xl:!px-6" />
            <CtaClimateChange className="max-xl:!px-8 max-xl:!gap-10 max-md:flex-col" />
            <CtaSandysIdea />
            {/* <Section.CtaNasaData className="max-xl:!px-8 max-xl:!gap-10 max-md:flex-col" /> */}
            <AllSystems {...{ Systems }} className="max-lg:!px-7" />
            <Interconnections {...{ InterconnectionsList }} />
        </Main>
    );
}
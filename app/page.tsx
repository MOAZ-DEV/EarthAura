import {  Main } from "@/components/Layouts";
import { InterconnectsList, Systems } from "./shared";
import { Hero } from "./components/Hero";
import { AllSystems } from "./components/AllSystems";
import { Interconnections } from "./components/Interconnections";
// import { CtaSandysIdea } from "./components/CtaSandysIdea";
import { CtaClimateChange } from "./components/CtaClimateChange";

export default function Home() {
    return (
        <Main className="flex flex-col gap-0 bg-white overflow-hidden">
            <Hero className="max-xl:!px-6" />
            <CtaClimateChange className="max-xl:!px-8 px-6 max-xl:!gap-10 max-md:flex-col" />
            {/* <CtaSandysIdea /> */}
            <AllSystems {...{ Systems }} className="max-lg:!px-7" />
            <Interconnections {...{ InterconnectsList }} />
        </Main>
    );
}
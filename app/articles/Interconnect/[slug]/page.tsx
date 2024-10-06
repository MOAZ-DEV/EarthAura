"use client"
import { MarkdownLayout } from "@/components/Layouts";
import dynamic from "next/dynamic";

export default function Interconnection({ params }: { params: { slug: string } }) {
    const Markdown = dynamic(() => import(`@/markdowns/Interconnect/${params.slug}.mdx`));

    return (
        <MarkdownLayout.Interconnect>
            <Markdown />
        </MarkdownLayout.Interconnect>
    );
}

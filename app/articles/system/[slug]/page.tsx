"use client"
import { MarkdownLayout } from "@/components/Layouts";
import dynamic from "next/dynamic";

export default function System({ params }: { params: { slug: string } }) {
    const Markdown = dynamic(() => import(`@/markdowns/${params.slug}.mdx`),{
        ssr: false,
      });

    return (
        <MarkdownLayout.System>
            <Markdown />
        </MarkdownLayout.System>
    );
}

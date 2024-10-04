"use client"
import { MarkdownLayout } from "@/components/Layouts";
import dynamic from "next/dynamic";

export default function Page({ params }: { params: { slug: string } }) {
    const Markdown = dynamic(() => import(`@/markdowns/${params.slug}.mdx`));

    return (
        <MarkdownLayout>
            <Markdown />
        </MarkdownLayout>
    );
}

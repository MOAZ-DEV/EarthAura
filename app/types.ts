import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

export interface SectionProps {
    className?: string;
    children?: ReactNode;
}

export interface ItemProps {
    label: string;
    href: string;
    image?: StaticImageData;
    index?: number;
}

export interface AllSystemsProps {
    className: string;
    Systems: ItemProps[];
}

export interface InterconnectionsProps {
    InterconnectionsList: ItemProps[];
}

import React from 'react'
import { Hero } from '@/components/core/Hero';


export const Site: React.FC = () => {

    // setting up references for the section pages
    // const homeSection = useRef<HTMLDivElement>(null);
    // const aboutMeSection = useRef<HTMLDivElement>(null);
    // const projectsSection = useRef<HTMLDivElement>(null);
    // const experienceSection = useRef<HTMLDivElement>(null);
    // const foundedSection = useRef<HTMLDivElement>(null);
    // const contactSection = useRef<HTMLDivElement>(null);


    // // scrolling to the section
    // const scrollIntoView = (ref: React.RefObject<HTMLDivElement> | undefined) => {
    //     ref?.current?.scrollIntoView({ behavior: 'smooth' });
    // }



    return (
        <>
            <Hero />
        </>
    );
};

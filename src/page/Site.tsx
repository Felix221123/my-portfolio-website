import React, { useState } from 'react'
import {
    NavigationBar,
    MenuContainer,
    HeroContainer,
    AboutMeSection,
    WorkExperience,
    Projects,
    Contact,
    ProjectCardContainer
} from '@/styles/components/core/Hero.style'
import Logo from "@/assets/images/portfolio-site-icon.webp"
import MenuIcon from "@/assets/svg/menu.svg"
import CloseIcon from "@/assets/svg/close.svg"
import AboutMePic from '@/assets/images/profile.jpeg'
import LinkedIn from '@/assets/svg/Linkedin.svg'
import Twitter from '@/assets/svg/Twitter.svg'
import Github from '@/assets/svg/Github Logo.svg'
import ArrowLeft from '@/assets/svg/arrow_left.svg'
import TribalImg from '@/assets/images/tribal_image.png'
import CriticalImg from '@/assets/images/critical_mass.png'
import FooterImage from '@/assets/svg/contact_img.svg'
import EmailImage from '@/assets/svg/email.svg'
import PhoneImage from '@/assets/svg/phone.svg'
import UnderlineImage from '@/assets/svg/underline.svg'
import FooterTwitter from '@/assets/svg/twitter(x).svg'
import FooterLinkedIn from '@/assets/svg/linked_in.svg'
import FooterGithub from '@/assets/svg/github.svg'
import { GlobalStyle } from '@/styles/mixin'
import ArrowRight from '@/assets/svg/arrow_right.svg'


interface ProjectProps {
    title: string;
    type: string;
    description: string;
    videoUrl: string;
    link: string;
    reverse?: boolean; // Optional prop to determine the layout direction
}


const projectData: ProjectProps[] = [
    {
        title: 'Hivesteck, Digital Agency',
        type: 'Landing Page',
        description: 'Founder of Hivesteck, A digital agency specializing in custom software development. We empower businesses through expert tech consulting and growth-driven digital marketing.',
        videoUrl: 'https://video.gumlet.io/69c54211e018a8d70367feb8/6a15b4d84e6fd4b445da2957/main.mp4',
        link: 'https://hivesteck.com/',
        reverse: false
    },
    {
        title: 'Taaskify, Agile Kanban Management',
        type: 'Web App',
        description: 'A streamlined, Kanban-style project management dashboard built to boost productivity. It allows users to organize their workflow into customizable boards and track progress effortlessly.',
        videoUrl: 'https://video.gumlet.io/69c54211e018a8d70367feb8/6a15b4d84e6fd4b445da295d/main.mp4',
        link: 'https://github.com/Felix221123/Taaskify',
        reverse: true
    },
    {
        title: 'Audiophile, Premium E-Commerce Platform',
        type: 'E-Commerce',
        description: 'A sleek, responsive e-commerce storefront designed for high-end audio equipment. This application focuses on delivering a seamless shopping experience from product discovery to final checkout.',
        videoUrl: 'https://video.gumlet.io/69c54211e018a8d70367feb8/6a15b4d88810b357ebddb36f/main.mp4',
        link: 'https://github.com/Felix221123/Audiophile-E-Commerce-Website',
        reverse: false
    },
    {
        title: 'Entertainment, Media Streaming Interface',
        type: 'Web App',
        description: 'A visually immersive web application that mimics a modern streaming service. It provides a highly visual, grid-based UI for discovering and saving movies and TV shows.',
        videoUrl: 'https://video.gumlet.io/69c54211e018a8d70367feb8/6a15b4d84e6fd4b445da295a/main.mp4',
        link: 'https://github.com/Felix221123/Entertainment-Web-App',
        reverse: true
    },
];

export const Site: React.FC = () => {
    const [openMenu, setMenuOpen] = useState<boolean>(false);

    // opening menu container
    const handleOpenMenu = () => {
        setMenuOpen(true)
    }

    // closing menu container
    const handleCloseMenu = () => {
        setMenuOpen(false)
    }


    // setting the current year
    const currentYear = new Date().getFullYear();
    const copyrights = `Copyright © ${currentYear} Felix Baah. All Rights Reserved.`

    const handleScrollToSection = (sectionId: string) => {
        // Close the menu first
        setMenuOpen(false);

        // Small delay to let menu close animation finish, then scroll
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }, 350);
    };



    return (
        <>
            {/* navigation bar */}
            <NavigationBar>
                <div className="hero-content">
                    <div className="hero-content-inner-left">
                        <div className="logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="title font-bold">
                            Felix Baah
                        </div>
                    </div>
                    <div className="hero-content-inner-right cursor-pointer">
                        <div className="menu-text font-medium">Menu</div>
                        <img
                            src={MenuIcon}
                            alt="menu icon"
                            onClick={handleOpenMenu}
                        />
                    </div>
                </div>
            </NavigationBar>

            {/* hero section */}
            <HeroContainer id='home'>
                <p className="description">
                    Multidisciplinary Software Engineer & Founder building scalable digital products, launching startups, and exploring financial engineering.
                </p>
                <h1 className="name">
                    Felix Baah.
                </h1>
            </HeroContainer>

            {/* about me section */}
            <AboutMeSection id='about'>
                <div className="imageContainer">
                    <img src={AboutMePic} alt="about me pic" />
                </div>
                <div className="aboutMeText">
                    <h2>Who I am?</h2>
                    <div className="description">
                        Hi, I’m Felix Baah. I’m a technologist, a founder and an explorer who thrives on building things in the digital world and staying ahead of the curve. I don't believe in staying in a single lane. I actively build full-stack applications, explore financial engineering, and build startups that matters.Outside of the terminal, I’m an avid athlete. Whether I’m running or playing tennis, physical training keeps my mind sharp and my discipline high. Above all, I put God first, and that foundational mindset guides how I work, grow, and navigate every industry I step into.
                    </div>
                    <div className="socialsIcon">
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/felix-baah-938815258/" target='_blank'>
                                <img src={LinkedIn} alt="linkedin icon" />
                            </a>
                            <a href="https://x.com/_felix_bh" target='_blank'>
                                <img src={Twitter} alt="twitter icon" />
                            </a>
                            <a href="https://github.com/Felix221123" target='_blank'>
                                <img src={Github} alt="github icon" />
                            </a>
                        </div>
                        <img src={ArrowLeft} alt="arrow left" />
                        <div className="text">
                            I am also here
                        </div>
                    </div>
                </div>
            </AboutMeSection>

            {/* work experience */}
            <WorkExperience id='experience'>
                <h3>Work Experience</h3>
                <div className="description">
                    Amazing Companies I’ve Worked With
                </div>
                <div className="imageContainer">
                    <div className="ImgContainer">
                        <img src={TribalImg} alt="tribal world wide" />
                    </div>
                    <div className="ImgContainer">
                        <img src={CriticalImg} alt="tribal world wide" />
                    </div>
                </div>
            </WorkExperience>

            {/* project & founded */}
            <Projects id='projects'>
                <div className="projectHeaderDescription">
                    <h4>Founded & Latest Projects</h4>
                    <p>A collection of projects I've worked on for clients and myself. Each one tells a story</p>
                </div>

                <div className="projectContainer">
                    {
                        projectData.length > 0 && projectData.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                type={project.type}
                                description={project.description}
                                videoUrl={project.videoUrl}
                                link={project.link}
                                reverse={project.reverse}
                            />
                        ))
                    }
                </div>

            </Projects>


            {/* contact */}
            <Contact id='contact'>
                <div className="innerContainer">
                    <div className="headingContainer">
                        <div className="headerImageContainer">
                            <img src={FooterImage} alt="header image" />
                        </div>
                        <div className="headerText">
                            <h5>Want to work with me?</h5>
                            <p className="footerDescription">
                                Always happy to chat and hear your feedback, questions, or suggestions. Whether you want to discuss a project, collaborate on a design, or just say hi, feel free to reach out to me anytime.
                            </p>
                        </div>
                    </div>
                    <div className="contactDetails">
                        <div className="container">
                            <div className="img">
                                <div className="imgContainer">
                                    <img src={EmailImage} alt="email" />
                                </div>
                                <div className="text">Email</div>
                            </div>
                            <a className="text" href="mailto:baahfelix49@gmail.com" target='_blank'>
                                baahfelix49@gmail.com
                                <img src={UnderlineImage} alt="underline" />
                            </a>

                        </div>
                        <div className="container">
                            <div className="img">
                                <div className="imgContainer">
                                    <img src={PhoneImage} alt="phone" />
                                </div>
                                <div className="text">Phone</div>
                            </div>
                            <a className="text" href=''>
                                07931115686
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="socials">
                        <div className="leftSection">
                            <div className="content">
                                <div className="container">
                                    <a className="img" href="https://www.linkedin.com/in/felix-baah-938815258/" target='_blank'>
                                        <div className="imgContainer" >
                                            <img src={FooterLinkedIn} alt="footer linkedin" />
                                        </div>
                                    </a>
                                </div>
                                <div className="container">
                                    <a className="img" href="https://x.com/_felix_bh" target='_blank'>
                                        <div className="imgContainer">
                                            <img src={FooterTwitter} alt="footer twitter" />
                                        </div>
                                    </a>
                                </div>
                                <div className="container">
                                    <a className="img" href="https://github.com/Felix221123" target='_blank'>
                                        <div className="imgContainer">
                                            <img src={FooterGithub} alt="footer github" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <div className="copyrights">
                                {copyrights}
                            </div>
                        </div>
                        <div className="rightSection">
                            <div className="logo">
                                <img src={Logo} alt="portfolio icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </Contact>



            {
                openMenu &&
                (
                    <>
                        <MenuContainer>
                            <div className="closeBtn">
                                <img
                                    src={CloseIcon}
                                    alt="close button"
                                    onClick={handleCloseMenu}
                                    className='cursor-pointer'
                                />
                            </div>
                            <div className="textSection">
                                <div className="title font-bold">Felix Baah.</div>
                                <nav className="menu-list cursor-pointer">
                                    <div onClick={() => handleScrollToSection('home')}>Home</div>
                                    <div onClick={() => handleScrollToSection('about')}>About</div>
                                    <div onClick={() => handleScrollToSection('experience')}>Experience</div>
                                    <div onClick={() => handleScrollToSection('projects')}>Projects</div>
                                    <div onClick={() => handleScrollToSection('contact')}>Contact</div>
                                </nav>
                            </div>
                        </MenuContainer>
                    </>
                )
            }


            <GlobalStyle lockScroll={openMenu} />
        </>

    )
}




export const ProjectCard: React.FC<ProjectProps> = ({ title, description, videoUrl, link, type, reverse }) => {

    return (
        <>
            <ProjectCardContainer $reverse={reverse}>
                <div className="videoContainer">
                    <video
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
                <div className="textSection">
                    <a href={link} target='_blank' rel="noopener noreferrer" className='link_projectType'>
                        <div className="projectType">{type} </div>
                        <img src={ArrowRight} alt="arrow on the right" />
                    </a>
                    <article className="projectTitle">{title}</article>
                    <p className="projectDescription">{description}</p>
                </div>
            </ProjectCardContainer>
        </>
    )
}

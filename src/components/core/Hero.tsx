import React, { useState } from 'react'
import { HeroContainer, MenuContainer } from '@/styles/components/core/Hero.style'
import Logo from "@/assets/images/portfolio-site-icon.webp"
import MenuIcon from "@/assets/svg/menu.svg"
import CloseIcon from "@/assets/svg/close.svg"

export const Hero: React.FC = () => {
    const [openMenu, setMenuOpen] = useState<boolean>(false);

    // opening menu container
    const handleOpenMenu = () => {
        setMenuOpen(true)
    }

    // closing menu container
    const handleCloseMenu = () => {
        setMenuOpen(false)
    }



    return (
        <>
            <HeroContainer>
                <div className="hero-content">
                    <div className="hero-content-inner-left">
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="title font-bold">
                            Felix Baah
                        </div>
                    </div>
                    <div className="hero-content-inner-right cursor-pointer">
                        <div className="menu-text font-medium">Menu</div>
                        <img
                            src={MenuIcon}
                            alt="Menu Icon"
                            onClick={handleOpenMenu}
                        />
                    </div>
                </div>
            </HeroContainer>

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
                                    <div>Home</div>
                                    <div>About Me</div>
                                    <div>Experience</div>
                                    <div>Projects</div>
                                    <div>Contact</div>
                                </nav>
                            </div>
                        </MenuContainer>
                    </>
                )
            }
        </>

    )
}



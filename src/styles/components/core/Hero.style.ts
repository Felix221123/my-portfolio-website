import {
    SizeofOriginalContentsForDevicesMoreThan2000px,
    flexCenter,
    fontSize16px,
    fontSize20px,
    fontSize24px,
    OverLayEffect,
    flex,
    fontSize150px,
    fontSize32px,
    fontSize70px,
    fontSize110px,
    ParagraphStyle,
    fontSize50px
} from '@/styles/mixin';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const NavigationBar = styled.header`
    width: 100%;
    height: 100%;
    ${SizeofOriginalContentsForDevicesMoreThan2000px};
    box-shadow:none;
    background-color: ${theme.colors.greyPrimaryElevated};
    position:sticky;
    top:0;
    z-index: ${theme.zIndex.navbar};

    .hero-content {
        width: 100%;
        height: 100%;
        ${flexCenter("row", "space-between")};
        padding: 1.5rem 2rem;


        .hero-content-inner-left {
            ${flexCenter("row", "flex-start")};
            column-gap: 1rem;

            .logo {
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .title {
                ${fontSize20px};
                color: ${theme.colors.lightDarkBlue};
                font-family: ${theme.fonts.urbanist};
                font-weight: 600;

                @media(min-width:768px){ 
                    ${fontSize24px};
                }
            }
        }

        .hero-content-inner-right {
            ${flexCenter("row", "flex-end")};
            column-gap: 1rem;

            .menu-text {
                ${fontSize16px()};
                color: ${theme.colors.blackClr};
                font-family: ${theme.fonts.urbanist};
            }

            .menu-icon {
                width: 3.5rem;
                height: 3.5rem;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }
`;

export const MenuContainer = styled.div`
    width: 95%;
    height: 95%;
    background-color:${theme.colors.glassmorphism_clr};
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border-radius: 2.5rem;
    position:fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    z-index: ${theme.zIndex.menuContainer};
    padding: 2.5rem 2rem;

    @media(min-width:768px) {
        padding: 6% 10% 1% 10%;
    }

    > .closeBtn {
        position: fixed;
        top:5%;
        right: 10%;
        width: 2rem;
        height:2rem;
        
        img {
            width:100%;
            width:100%;
            object-fit:cover;
        }
    }

    > .textSection {
        ${flexCenter('column', 'center')};
        align-items:flex-start;
        justify-content: space-around;
        width: 100%;
        height:100%;

        > .title {
            ${fontSize70px};
            font-family: ${theme.fonts.raleway};
            color: ${theme.colors.lightDarkBlue};
            letter-spacing: 1.25rem;
            line-height:5rem;

            @media(min-width:1000px){
                ${fontSize150px};
            }
        }

        > .menu-list {
            ${flex('column')};
            gap:1.5rem;

            > div {
                ${fontSize32px};
                font-family: ${theme.fonts.raleway};
                color: ${theme.colors.greyPrimaryElevated};
                font-weight:600;
                letter-spacing:0.2rem;

                &:hover, :active, :focus {
                    margin-left: 1.5rem;
                    color: ${theme.colors.lightBlue};
                    transition:all 0.2s ease-in-out;
                }

            }
        }
    }

`

export const HeroContainer = styled.div`
    width:100%;
    min-height: calc(100vh - 30vh);
    ${flexCenter('column', 'flex-end')};
    align-items: flex-start;
    padding:1.5rem 2rem;
    ${SizeofOriginalContentsForDevicesMoreThan2000px};
    gap: 6rem;


    @media(max-width:1200px){ 
        gap: 1.5rem;
        min-height: calc(100vh - 20vh);
    }


    > .description{
        ${ParagraphStyle};
        
        @media(min-width:768px){ 
            padding:0 50% 0 0;
        }
    }

    > .name{
        font-family: ${theme.fonts.raleway};
        color: ${theme.colors.greyPrimaryElevated};
        font-size: clamp(15rem, 15.5vw, 15.5rem);
        line-height: 1.25rem;
        font-weight: 900;
        letter-spacing: 0.15rem;
        
        @media(max-width:1350px){ 
            ${fontSize150px};
            line-height: 7rem;
        }
        @media(max-width:1200px){ 
            ${fontSize110px};
            line-height: 5.5rem;
        }
    }
`
export const AboutMeSection = styled.div`
    ${flex('column')};
    margin-top: 8rem;
    ${SizeofOriginalContentsForDevicesMoreThan2000px};
    padding: 2.5rem 2rem;
    gap: 3rem;



    @media(min-width:1000px){
        display: grid;
        grid-template-columns: 0.9fr 1fr;
        align-items: center;
        justify-content: center;
    }

    @media(max-width:999px){
        ${flex('column-reverse')};
    }

    > .imageContainer{
        width: 100%;
        height: 100%;
        border-radius: 100%;
        ${flexCenter('column', 'center')};
        overflow: hidden;

        > img {
            width: 100%;
            height: 100%;
            object-fit:cover;
            border-radius: 100%;
            

            &:hover {
                transform: scale(1.2);
                transition:transform ease-in-out 0.5s;
            }
        }


    }

    > .aboutMeText {
        ${flex('column')};
        gap: 1rem; 

        > h2 {
            font-family: ${theme.fonts.urbanist};
            text-align: right;
            ${fontSize70px};
            font-weight: 800;
            letter-spacing: 0.15rem;

            @media(max-width:768px){
                ${fontSize50px}
            }
        }

        > .description{
            ${ParagraphStyle};
            text-align: right;
            padding:0 0 0 3rem;

            @media(max-width:768px){
                padding:0;
            }
        }

        > .socialsIcon {
            ${flexCenter('row', 'flex-end')};
            gap: 0.25rem;

            > .socials {
                ${flexCenter('row', 'center')};
                gap:0.25rem;

                >  a > img {
                    width: 5rem;
                    height: 5rem;
                    object-fit: cover;
                    cursor: pointer;
                    border-radius: 40%;

                    @media(max-width:768px){
                        width: 3.5rem;
                        height: 3.5rem;
                    }
                }
            }

            > .text{
                ${ParagraphStyle};
            }
        }



    }

`
export const WorkExperience = styled.div`
    ${flexCenter('column', 'center')};
    margin-top: 8rem;
    ${SizeofOriginalContentsForDevicesMoreThan2000px};
    padding: 2.5rem 2rem;
    gap: 1rem;

    > h3 {
        font-family: ${theme.fonts.urbanist};
        ${fontSize70px};
        font-weight: 800;
        letter-spacing: 0.15rem;

        @media(max-width:768px){
            ${fontSize50px}
        }
    }

    > .description{
        font-family: ${theme.fonts.urbanist};
        ${fontSize24px};
        font-weight: 600;
        letter-spacing: 0.15rem;
    }

    > .imageContainer{
        ${flexCenter('row', 'space-around')};
        gap: 2rem;

        @media(max-width: 1000px){
            ${flexCenter('column', 'space-around')};
        }

        > .ImgContainer {  
            width: 25rem;
            height: 10rem;
            border-radius: 1rem;

            @media(max-width: 1000px){
                width: 20rem;
                height: 10rem;
            }

            > img { 
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1.5rem;
            }
        }
    }
`

export const Projects = styled.div`
    ${flexCenter('column', 'center')};
    margin-top: 8rem;
    ${SizeofOriginalContentsForDevicesMoreThan2000px};
    padding: 2.5rem 2rem;
    gap: 1rem;

`


export const Contact = styled.footer`
    ${flex('column')};
    margin-top: 8rem;
    ${SizeofOriginalContentsForDevicesMoreThan2000px};
    padding: 4rem 2rem;
    gap: 1.5rem;
    background-color:${theme.colors.peachClr};

    > .headingContainer{
        ${flexCenter('row', 'space-between')};

        @media(max-width: 1000px){
            ${flexCenter('column', 'flex-end')};
            gap: 2.5rem;
        }

        > .headerText{
            ${flexCenter('column', 'flex-end')};
            align-items:flex-end;
            gap:1.5rem;

            > h5 {
                font-family: ${theme.fonts.urbanist};
                ${fontSize70px};
                font-weight: 800;
                letter-spacing: 0.15rem;
                text-align: right;
                line-height: 3rem;

                @media(max-width:768px){
                    ${fontSize50px}
                }
            }

            > .footerDescription{
                ${ParagraphStyle};
                text-align: right;
                padding: 0 0 0 20%;

            }
        }
    }

    > .contactDetails{
        ${flex('column')};
        gap:1rem;
        margin-top: 3rem;
        margin-bottom:3rem;

        > .container {
            ${flex('row')};
            align-items:center;
            gap: 2.5rem;

            @media(max-width:768px){
                ${flex('column')};
                align-items:flex-start;
                gap: 1rem;
            }

            > .img {
                ${flexCenter('column', 'center')};
                gap: 0.5rem;
                
                > .imgContainer {
                    border: 2px solid black;
                    border-radius: 50%;
                    width: 6rem;
                    height: 6rem;
                    padding: 1.5rem;

                    > img {
                        width: 100%;
                        height: 100%;
                        object-fit:cover;
                    }

                }
            }

            > a {
                font-family: ${theme.fonts.urbanist};
                ${fontSize32px};
                font-weight: 800;
                letter-spacing: 0.25rem;


                @media(max-width:768px){
                    ${fontSize20px}
                }
            }
        }
    }

    > .socials{
        ${flex('row')};
        gap: 1rem;
        margin-top: 1rem;
        margin-bottom:1rem;
        align-items:center;
        justify-content: space-between;

        > .leftSection {
            ${flex('column')};
            gap: 1rem;

            .content {
                ${flex('row')};
                gap: 1rem;

                > .container {
                    ${flex('row')};
                    align-items: center;

                    > .img {
                        ${flexCenter('column', 'center')};
                        
                        > .imgContainer {
                            border: 2px solid black;
                            border-radius: 50%;
                            width: 6rem;
                            height: 6rem;
                            padding: 1.5rem;
                            cursor: pointer;

                            > img {
                                width: 100%;
                                height: 100%;
                                object-fit:cover;

                                &:hover{
                                    transform:scale(1.1);
                                    transition: transform ease-in-out 0.5s;
                                }
                            }

                        }
                    }
                }  
            }
                
            > .copyrights{
                ${ParagraphStyle}
            }
        }

        > .rightSection{
            ${flexCenter('column', 'center')};
                    
            > .logo {
                border-radius: 50%;
                width: 15rem;
                height: 15rem;
                padding: 1.5rem;

                > img {
                    width: 100%;
                    height: 100%;
                    object-fit:cover;
                    border-radius: 50%;
                }

            }
        }



    }


`



export const BodyOverlay = styled.div`
  ${OverLayEffect};
`
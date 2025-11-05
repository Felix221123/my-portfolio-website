import {
    SizeofOriginalContentsForDevicesMoreThan1740px,
    flexCenter,
    fontSize16px,
    fontSize20px,
    fontSize24px,
    OverLayEffect,
    flex,
    fontSize150px,
    fontSize32px,
    fontSize70px
} from '@/styles/mixin';
import theme from '@/styles/theme';
import styled from 'styled-components';

export const HeroContainer = styled.header`
    width: 100%;
    height: 100%;
    ${SizeofOriginalContentsForDevicesMoreThan1740px};
    box-shadow:none;
    background-color: ${theme.colors.greyPrimaryElevated};
    position: relative;
     z-index: ${theme.zIndex.navbar};

    .hero-content {
        position:sticky;
        top:0;
        width: 100%;
        height: 100%;
        ${flexCenter("row", "space-between")};
        padding: 2rem 2rem;

        @media (min-width: 768px){
            padding: 2.5rem 4rem; 
        }

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
        right: 5%;
        width: 2rem;
        height:2rem;
        
        img {
            width:100%;
            width:100%;
            object-fit:cover;
        }
    }

    > .textSection {
        ${flex('column')};
        justify-content: space-between;
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


export const BodyOverlay = styled.div`
  ${OverLayEffect};
`
const theme = {
    colors: {
        whiteClr: "hsl(0, 0%, 100%)",
        blackClr: "#000000",
        glassmorphism_clr: "rgba(200, 200, 200, 0.05)",
        lightBlue: "#0079ff",
        lightDarkBlue: "#1e2a47",
        lightDark: "#2b3442",
        lightGrey: "#f6f8ff",
        medGrey: "#697c9a",
        reallyDark: "#10141e",
        greyPrimaryElevated:"76797A",
        lightRoyalBlue:"D1D2D3",
        peachClr:"#FFEED9"
    },
    fonts: {
        raleway: "'Raleway', sans-serif",
        openSans: "'Open Sans', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        manrope: "'Manrope', sans-serif",
        urbanist: "'Urbanist', sans-serif",
    },
    breakpoints: {
        mobile: "screen and (max-width: 767px)",
        desktop: "screen and (min-width: 768px)",
    },
    zIndex: {
        navbar: 2,
        menuContainer: 3,
        heroBgContainer: -1
    }
}


export default theme;
export type ThemeType = typeof theme;
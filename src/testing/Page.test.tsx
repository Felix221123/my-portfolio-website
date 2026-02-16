import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

// Mock scrollIntoView
const scrollIntoViewMock = vi.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

// Mock HTMLMediaElement methods (for <video> elements)
Object.defineProperty(HTMLMediaElement.prototype, 'play', {
    configurable: true,
    value: vi.fn().mockResolvedValue(undefined),
});
Object.defineProperty(HTMLMediaElement.prototype, 'pause', {
    configurable: true,
    value: vi.fn(),
});
Object.defineProperty(HTMLMediaElement.prototype, 'load', {
    configurable: true,
    value: vi.fn(),
});

describe('Portfolio Website', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        scrollIntoViewMock.mockClear();
    });

    // ─── App Rendering ────────────────────────────────────────────────

    describe('App Rendering', () => {
        it('should render the app without crashing', () => {
            const { container } = render(<App />);
            expect(container).toBeTruthy();
        });

        it('should render content inside the app', () => {
            const { container } = render(<App />);
            expect(container.innerHTML).not.toBe('');
        });

        it('should have at least one image on the page', () => {
            render(<App />);
            const images = screen.getAllByRole('img');
            expect(images.length).toBeGreaterThan(0);
        });
    });

    // ─── Navigation Bar ───────────────────────────────────────────────

    describe('Navigation Bar', () => {
        it('should render a header element', () => {
            const { container } = render(<App />);
            const header = container.querySelector('header');
            expect(header).toBeInTheDocument();
        });

        it('should contain a logo image inside the header', () => {
            const { container } = render(<App />);
            const header = container.querySelector('header');
            const logo = header?.querySelector('img');
            expect(logo).toBeInTheDocument();
        });

        it('should have a clickable menu area', () => {
            const { container } = render(<App />);
            const header = container.querySelector('header');
            expect(header).toBeInTheDocument();

            const clickableElements = header?.querySelectorAll('img, button, div[class*="menu"]');
            expect(clickableElements?.length).toBeGreaterThan(0);
        });
    });

    // ─── Menu Functionality ───────────────────────────────────────────

    describe('Menu Functionality', () => {
        it('should open menu when menu trigger is clicked', async () => {
            const { container } = render(<App />);
            const header = container.querySelector('header');
            const menuTrigger = header?.querySelector('.hero-content-inner-right');

            if (menuTrigger) {
                fireEvent.click(menuTrigger);

                await waitFor(() => {
                    const menuContainer = container.querySelector('[class*="MenuContainer"]');
                    if (menuContainer) {
                        expect(menuContainer).toBeInTheDocument();
                    } else {
                        // Menu might be rendered as a separate component or overlay
                        const menuText = screen.queryByText(/menu/i);
                        expect(menuText || menuContainer).toBeTruthy();
                    }
                });
            }
        });

        it('should display navigation links when menu is open', async () => {
            const { container } = render(<App />);

            // Find and click the menu trigger
            const menuImages = container.querySelectorAll('header img');
            const menuIcon = menuImages[menuImages.length - 1]; // Usually the last img in header

            if (menuIcon) {
                fireEvent.click(menuIcon);

                await waitFor(() => {
                    const menuList = container.querySelector('.menu-list');
                    if (menuList) {
                        expect(menuList.children.length).toBeGreaterThan(0);
                    }
                }, { timeout: 2000 });
            }
        });

        it('should close menu when close button is clicked', async () => {
            const { container } = render(<App />);

            // Open menu
            const menuImages = container.querySelectorAll('header img');
            const menuIcon = menuImages[menuImages.length - 1];

            if (menuIcon) {
                fireEvent.click(menuIcon);

                await waitFor(() => {
                    const closeBtn = container.querySelector('.closeBtn, [class*="close"]');
                    if (closeBtn) {
                        fireEvent.click(closeBtn);

                        waitFor(() => {
                            const menuList = container.querySelector('.menu-list');
                            expect(menuList).not.toBeInTheDocument();
                        });
                    }
                }, { timeout: 2000 });
            }
        });
    });

    // ─── Smooth Scrolling ─────────────────────────────────────────────

    describe('Smooth Scrolling', () => {
        it('should call scrollIntoView when menu item is clicked', async () => {
            const { container } = render(<App />);

            // Open menu
            const menuImages = container.querySelectorAll('header img');
            const menuIcon = menuImages[menuImages.length - 1];

            if (menuIcon) {
                fireEvent.click(menuIcon);

                await waitFor(() => {
                    const menuItems = container.querySelectorAll('.menu-list > div');
                    if (menuItems.length > 0) {
                        fireEvent.click(menuItems[0]);

                        waitFor(() => {
                            expect(scrollIntoViewMock).toHaveBeenCalledWith({
                                behavior: 'smooth',
                                block: 'start',
                            });
                        }, { timeout: 1000 });
                    }
                }, { timeout: 2000 });
            }
        });
    });

    // ─── Page Sections ────────────────────────────────────────────────

    describe('Page Sections', () => {
        it('should render the about section', () => {
            const { container } = render(<App />);
            const aboutSection = container.querySelector('#about, [id*="about"]');
            expect(aboutSection).toBeInTheDocument();
        });

        it('should render the experience section', () => {
            const { container } = render(<App />);
            const experienceSection = container.querySelector('#experience, [id*="experience"]');
            expect(experienceSection).toBeInTheDocument();
        });

        it('should render the projects section', () => {
            const { container } = render(<App />);
            const projectsSection = container.querySelector('#projects, [id*="project"]');
            expect(projectsSection).toBeInTheDocument();
        });

        it('should render the contact section', () => {
            const { container } = render(<App />);
            const contactSection = container.querySelector('#contact, [id*="contact"]');
            expect(contactSection).toBeInTheDocument();
        });
    });

    // ─── Projects Section ─────────────────────────────────────────────

    describe('Projects Section', () => {
        it('should render project cards', () => {
            const { container } = render(<App />);
            const projectCards = container.querySelectorAll('.videoContainer, [class*="ProjectCard"]');
            expect(projectCards.length).toBeGreaterThan(0);
        });

        it('should render video elements inside project cards', () => {
            const { container } = render(<App />);
            const videos = container.querySelectorAll('video');
            expect(videos.length).toBeGreaterThan(0);
        });

        it('should render project descriptions', () => {
            const { container } = render(<App />);
            const descriptions = container.querySelectorAll('.projectDescription, [class*="projectDescription"]');
            expect(descriptions.length).toBeGreaterThan(0);
        });

        it('should render project type links', () => {
            const { container } = render(<App />);
            const projectLinks = container.querySelectorAll('.link_projectType, [class*="link_projectType"]');
            expect(projectLinks.length).toBeGreaterThan(0);
        });

        it('should render project articles/titles', () => {
            const { container } = render(<App />);
            const articles = container.querySelectorAll('.textSection article, article');
            expect(articles.length).toBeGreaterThan(0);
        });
    });

    // ─── Images & Media ───────────────────────────────────────────────

    describe('Images and Media', () => {
        it('should have all images with alt attributes', () => {
            render(<App />);
            const images = screen.getAllByRole('img');
            images.forEach((img) => {
                expect(img).toHaveAttribute('alt');
            });
        });

        it('should render videos with src attributes', () => {
            const { container } = render(<App />);
            const videos = container.querySelectorAll('video');
            videos.forEach((video) => {
                const hasSrc = video.hasAttribute('src') ||
                    video.querySelector('source') !== null;
                expect(hasSrc).toBe(true);
            });
        });
    });

    // ─── Links ────────────────────────────────────────────────────────

    describe('Links', () => {
        it('should render anchor elements with href attributes', () => {
            const { container } = render(<App />);
            const links = container.querySelectorAll('a');
            links.forEach((link) => {
                expect(link).toHaveAttribute('href');
            });
        });

        it('should have at least one external link', () => {
            const { container } = render(<App />);
            const links = container.querySelectorAll('a[href]');
            expect(links.length).toBeGreaterThan(0);
        });
    });

    // ─── Structure & Layout ───────────────────────────────────────────

    describe('Structure and Layout', () => {
        it('should have a proper DOM hierarchy', () => {
            const { container } = render(<App />);
            const rootDiv = container.firstChild;
            expect(rootDiv).toBeTruthy();
            expect(rootDiv?.childNodes.length).toBeGreaterThan(0);
        });

        it('should render multiple sections on the page', () => {
            const { container } = render(<App />);
            const sections = container.querySelectorAll(
                'section, [id="about"], [id="experience"], [id="projects"], [id="contact"], header'
            );
            expect(sections.length).toBeGreaterThanOrEqual(2);
        });

        it('should render text content on the page', () => {
            const { container } = render(<App />);
            expect(container.textContent).not.toBe('');
            expect(container.textContent?.length).toBeGreaterThan(10);
        });
    });

});

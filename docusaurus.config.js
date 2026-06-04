// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes: prismThemes} = require("prism-react-renderer");

/** @type {() => Promise<import('@docusaurus/types').Config>} */
module.exports = async function () {
    const remarkD2 = (await import("remark-d2")).default;

    return {
        title: "Works in Prod",
        tagline: "Vibe-posted. Fact-checked. Mostly.",
        url: "https://works-in-prod.github.io",
        baseUrl: "/",
        headTags: [
            { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
            { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" } },
            { tagName: "link", attributes: { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap" } },
        ],
        onBrokenLinks: "throw",
        markdown: {
            hooks: {
                onBrokenMarkdownLinks: "warn",
            },
        },
        favicon: "img/logo-mark.svg",

        organizationName: "works-in-prod",
        projectName: "works-in-prod.github.io",
        trailingSlash: true,
        i18n: {
            defaultLocale: "en",
            locales: ["en"],
        },
        plugins: [
            [
                "@docusaurus/plugin-content-pages",
                {
                    path: "src/pages",
                    routeBasePath: "/",
                },
            ],
            [
                "@docusaurus/plugin-content-blog",
                ({
                    showReadingTime: true,
                    routeBasePath: "/",
                    postsPerPage: 10,
                    blogSidebarCount: "ALL",
                    remarkPlugins: [remarkD2],
                }),
            ],
        ],
        themes: [
            [
                "@docusaurus/theme-classic",
                {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            ],
        ],

        themeConfig:
            /** @type {import('@docusaurus/types').ThemeConfig} */
            ({
                metadata: [
                    {
                        name: "keywords",
                        content:
                            "AI engineering, architecture, testing, observability, developer experience, software engineering, production lessons, technical leadership",
                    },
                    {
                        name: "title",
                        content: "Works in Prod",
                    },
                    {
                        name: "description",
                        content:
                            "Production lessons on AI engineering, architecture, testing, observability, and developer experience.",
                    },
                    {
                        property: "og:title",
                        content: "Works in Prod",
                    },
                    {
                        property: "og:description",
                        content:
                            "Production lessons on AI engineering, architecture, testing, observability, and developer experience.",
                    },
                    {
                        property: "og:type",
                        content: "website",
                    },
                    {
                        name: "twitter:card",
                        content: "summary",
                    },
                    {
                        name: "twitter:title",
                        content: "Works in Prod",
                    },
                    {
                        name: "twitter:description",
                        content:
                            "Production lessons on AI engineering, architecture, testing, observability, and developer experience.",
                    },
                    {
                        name: "google-site-verification",
                        content: "4wtMRQYF-x9ALzRmResSAiLkmCMznEP-QzhS4rjsewQ",
                    },
                ],
                colorMode: {
                    defaultMode: "light",
                    disableSwitch: false,
                    respectPrefersColorScheme: true,
                },
                navbar: {
                    logo: {
                        alt: "Works in Prod",
                        src: "img/logo.svg",
                    },
                    items: [
                        {
                            to: "/",
                            label: "Home",
                            position: "left",
                            exact: true,
                        },
                        {
                            to: "/archive/",
                            label: "Blog",
                            position: "left",
                        },
                        {
                            to: "/tags/",
                            label: "Tags",
                            position: "left",
                        },
                        {
                            to: "/about/",
                            label: "About",
                            position: "left",
                        },
                        {
                            type: "html",
                            position: "left",
                            value: '<span class="navbar__tagline">Vibe-posted. Fact-checked. Mostly.</span>',
                        },
                        {
                            type: "html",
                            position: "right",
                            value:
                                '<a class="navbar__link navbar__icon-link" href="https://github.com/ambersariya" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.01c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg></a>',
                        },
                        {
                            href: "https://www.linkedin.com/in/danish-javed/",
                            label: "LinkedIn",
                            position: "right",
                        },
                    ],
                },
                footer: {
                    style: "dark",
                    links: [
                        {
                            title: "Find Me",
                            items: [
                                {
                                    label: "Twitter",
                                    href: "https://twitter.com/_ambersariya",
                                },
                                {
                                    label: "LinkedIn",
                                    href: "https://www.linkedin.com/in/danish-javed/",
                                },
                            ],
                        },
                    ],
                    copyright: `Copyright © ${new Date().getFullYear()} Works in Prod`,
                },
                prism: {
                    theme: prismThemes.github,
                    darkTheme: prismThemes.dracula,
                },
            }),
    };
};

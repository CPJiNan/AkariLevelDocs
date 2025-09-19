import {defineConfig} from 'vitepress'

export default defineConfig({
    base: '/AkariLevelDocs/',
    title: "AkariLevel",
    description: "A VitePress Site",
    head: [
        ['link', {rel: 'icon', href: '/favicon.png'}]
    ],
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})

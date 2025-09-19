import {defineConfig} from 'vitepress'

export default defineConfig({
    base: '/AkariLevelDocs/',
    title: "AkariLevel",
    description: "澄明等级",
    head: [
        ['link', {rel: 'icon', href: '/AkariLevelDocs/favicon.png'}]
    ],
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '开发', link: '/develop'}
        ],

        sidebar: [
            {
                text: '🛠️ 开发',
                items: [
                    {
                        text: '📦 API',
                        items: [
                            {text: '等级组', link: '/develop/api/levelgroup'},
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/CPJiNan/AkariLevel'}
        ]
    }
})

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
            {text: '开发', link: '/develop/'}
        ],

        sidebar: [
            {
                text: '🛠️ 开发',
                items: [
                    {
                        text: '📦 API',
                        items: [
                            {text: '等级组', link: '/develop/api/levelgroup/'},
                        ]
                    }
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/CPJiNan/AkariLevel'}
        ],

        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
        },

        editLink: {
            pattern: 'https://github.com/CPJiNan/AkariLevelDocs/tree/master/docs/:path'
        }
    },
    lastUpdated: true
})

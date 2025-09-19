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
        },

        editLink: {
            pattern: 'https://github.com/CPJiNan/AkariLevelDocs/tree/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于'
        },

        notFound: {
            title: '页面未找到',
            quote:
                '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
            linkLabel: '前往首页',
            linkText: '带我回首页'
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
    },
    lastUpdated: true
})

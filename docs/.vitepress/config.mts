import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "AkariLevel",
    description: "澄明等级",
    head: [
        ['link', {rel: 'icon', href: '/favicon.png'}]
    ],
    themeConfig: {
        nav: [
            {text: '文档', link: '/intro'},
        ],

        sidebar: [
            {text: '✨ 插件简介', link: '/intro'},
            {text: '👋🏻 快速上手', link: '/start'},
            {
                text: '🏷 基础教程',
                items: [
                    {text: '插件命令', link: '/basic/command'},
                    {text: 'PlaceholderAPI 变量', link: '/basic/placeholder'},
                    {text: 'MythicMobs 掉落', link: '/basic/mythicmobs'},
                    {
                        text: 'JavaScript 脚本',
                        link: '/basic/javascript/',
                        collapsed: true,
                        items: [
                            {text: 'AutoJoin', link: '/basic/javascript/autojoin'},
                            {text: 'ExpAddition', link: '/basic/javascript/expaddition'},
                            {text: 'ExpMessage', link: '/basic/javascript/expmessage'},
                            {text: 'TeamShareExp', link: '/basic/javascript/teamshareexp'},
                            {text: 'Track', link: '/basic/javascript/track'},
                            {text: 'VanillaExp', link: '/basic/javascript/vanillaexp'}
                        ]
                    },
                    {text: 'Kether 脚本', link: '/basic/kether'}
                ]
            },
            {
                text: '📖 进阶教程',
                items: [
                    {text: 'JavaScript 脚本', link: '/advanced/javascript'}
                ]
            },
            {
                text: '🛠️ 开发文档',
                items: [
                    {
                        text: 'API',
                        items: [
                            {text: 'LevelGroup', link: '/develop/api/levelgroup'},
                            {text: 'ConfigLevelGroup', link: '/develop/api/configlevelgroup'},
                            {text: 'ConfigLevelAction', link: '/develop/api/configlevelaction'},
                            {text: 'ConfigLevelCondition', link: '/develop/api/configlevelcondition'}
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
    locales: {
        root: {label: '简体中文', lang: 'zh-CN'},
        en: {label: 'English', lang: 'en-US'}
    },
    lastUpdated: true
})

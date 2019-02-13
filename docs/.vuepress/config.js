module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    head:[
        ['link', {rel:'icon', href:'/image/favicon.ico'}]
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '配置', link: '/guide/' },
            {
                text: '语言',
                items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com' }
        ],
        // displayAllHeaders: true,
        sidebar: [
            '/',
            ['/hello', 'hello page']
        ]
    }
};
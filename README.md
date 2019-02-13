使用技术：

 - [VuePress][1] - Vue 驱动的静态网站生成器

> 仓库地址：https://github.com/yinian-R/vuepress-demo


## 全局安装
```
## 安装
yarn global add vuepress # 或者：npm install -g vuepress
```
## 现有项目
如果你想在一个现有项目中使用 VuePress，同时想要在该项目中管理文档，则应该将 VuePress 安装为本地依赖。

```
## 没有项目可以初始化
yarn init

## 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

## 新建一个 docs 文件夹
mkdir docs

## 新建一个 markdown 文件
echo # Hello VuePress! > docs/README.md

## 开始写作
npx vuepress dev docs
```

接着，在 package.json 里加一些脚本:

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## 基本配置

```
.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
```
一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象：
```
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```


## 静态资源

创建public文件夹，主要用于存放静态资源

```
.
├─ docs
│  └─ .vuepress
│     └─ public
│          └─ image
│               └─ favicon.ico
```

添加网站 favicon，修改 .vuepress/config.js 内容

```
module.exports = {
    head:[
        ['link', {rel:'icon', href:'/image/favicon.ico'}]
    ]
};
```



## 导航栏

你可以通过 themeConfig.nav 增加一些导航栏链接:

```
module.exports = {
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            {
                text: '语言',
                items: [
                    { text: '中文', link: '/language/chinese/' },
                    { text: 'English', link: '/language/english/' }
                ]
            },
            { text: 'GitHub', link: 'https://github.com' }
        ]
    }
};
```

## 首页
需要在dosc/README.md指定 `home: true`

```
---
home: true
heroImage: /image/favicon.ico
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```


## 侧边栏
想要使 侧边栏（Sidebar）生效，需要配置 themeConfig.sidebar，基本的配置，需要一个包含了多个链接的数组：

```
module.exports = {
    themeConfig: {
        sidebar: [
            '/',
            ['/hello', 'hello page']
        ]
    }
};
```

## 部署

设置部署站点的基础路径。

```
module.exports = {

    base: '/vuepress-demo/',
    
};
```

在你的项目中，创建一个如下的 deploy.sh 文件

```
#!/usr/bin/env bash
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:yinian-R/vuepress-demo.git master:gh-pages

cd -
```

  [1]: https://vuepress.vuejs.org/zh/
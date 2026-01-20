const config = {
        //网页元数据
        metaData: {
                title: 'Xin的个人主页🎉',
                description: '欢迎来到Xin的奇妙世界！',
                keywords: 'xin,Xin,个人主页,个人网站',
                icon: '/favicon.ico'   //网页图标
        },

        avatar: "/img/avatar.jpg", // 头像
        welcometitle: "Hi, I'm Xin", // 标题

        // 颜色配置
        color: {
                themecolor: "#FFFFFF",
                welcometitlecolor: "#FFFFFF",
                turntablecolor1: "#FFFF00",  
                turntablecolor2: "#00FFFF"   
        },

        brightness: 85, 
        blur: 5, 

        // 我的标签
        tags: ['代码诗人', '架构探索', '随和亲切', '冷静沉着', 'Node.js 专家', 'Docker 玩家', '全栈开发', '善解人意'],

        // 默认背景壁纸
        background: {
                "pc": {
                        "type": "pic",
                        "datainfo": {
                                "title": "海洋女孩",
                                "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp",
                                "url": "/img/wallpaper/static/海洋女孩/image.png"
                        },
                },
                "mobile": {
                        "type": "pic",
                        "datainfo": {
                                "title": "0001",
                                "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
                                "url": "/img/wallpaper/static-mobile/0001/image.png"
                        }
                }
        },

        //极坐标图数据
        polarChart: {
                skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
                skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
        },

        //社交按钮
        socialPlatformIcons: [
                { icon: "mdi-github", link: "https://www.github.com/leleo886" },
                { icon: "mdi-email", link: "mailto:leleo886@foxmail.com" },
                { icon: "mdi-qqchat", link: "https://im.qq.com/" },
                { icon: "mdi-wechat", link: "https://wx.qq.com/" },
                { icon: "mdi-youtube", link: "https://www.youtube.com" },
                { icon: "mdi-facebook", link: "https://www.facebook.com" }
        ],

        //打字机 - 更具哲理的文案
        typeWriterStrings: [
                "代码是写给人看的，顺便给机器运行。",
                "与其在别人的剧本里跑龙套，不如在自己的世界里做主角。",
                "所有的伟大，都源于一个勇敢的开始。",
                "心简单，世界就简单；心自由，生活就自由。"
        ],

        //音乐播放配置
        musicPlayer: {
                server: 'netease',
                type: 'playlist',
                id: '17657816544'
        },

        //壁纸库
        wallpaper: {
                pic: [
                        { "title": "赛博朋克", "preview": "https://t.alcy.cc/acg?1", "url": "https://t.alcy.cc/acg?1" },
                        { "title": "宁静之海", "preview": "https://imgapi.cn/api.php?category=fengjing&2", "url": "https://imgapi.cn/api.php?category=fengjing&2" },
                        { "title": "城市缩影", "preview": "https://imgapi.cn/api.php?category=architecture&3", "url": "https://imgapi.cn/api.php?category=architecture&3" }
                ],
                picMobile: [
                        { "title": "次元壁纸", "preview": "https://imgapi.cn/api.php?mm=1", "url": "https://imgapi.cn/api.php?mm=1" }
                ],
                video: [
                        {
                                "title": "向往航天的女孩",
                                "preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
                                "url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
                        }
                ],
                videoMobile: [],
        },

        //项目卡片 - 深度美化文案版
        projectcards: [
                { go: "🚀 开启", img: "https://t.alcy.cc/acg?nav", title: "万花筒导航", subtitle: "万物之始，连接未来", text: "整合全球优质资源，让互联网没有边界。", url: "https://dh.xxy.indevs.in", show: false },
                { go: "🗂️ 管理", img: "https://t.alcy.cc/acg?cloud", title: "星尘云盘", subtitle: "数据之海，永恒存储", text: "安全、私密、高速，你的数字资产管家。", url: "https://tu.xxy.indevs.in", show: false },
                { go: "🎨 抽奖", img: "https://t.alcy.cc/acg?random", title: "幻彩 ACG", subtitle: "遇见二次元的惊喜", text: "每一次刷新，都是一场不期而遇的美丽。", url: "https://t.alcy.cc/acg", show: false },
                { go: "⌛ 期待", img: "https://imgapi.cn/api.php?category=architecture&4", title: "进化中项目", subtitle: "代码正在孵化", text: "精雕细琢，只为下一次惊艳亮相。", url: "http://tv.xxy.indevs.in", show: false },
                { go: "🎬 观影", img: "https://t.alcy.cc/ysz?tv", title: "光影博物馆", subtitle: "沉浸式私人院线", text: "跨越时空，在这里珍藏所有的感官震撼。", url: "https://tv1.xxy.indevs.in/login", show: false },
                { go: "💍 配置", img: "https://imgapi.cn/api.php?category=fengjing&7", title: "节点实验室", subtitle: "自由网络的基石", text: "高效的分流管理，构建最稳定的网络环境。", url: "https://xxcm.pages.dev/admin", show: false },
                { go: "✅ 运行", img: "https://imgapi.cn/api.php?category=architecture&8", title: "智控签到", subtitle: "自动化生活美学", text: "让重复的任务交给机器，把时间留给热爱。", url: "http://125.208.21.128:11905", show: false },
                { go: "🔍 探索", img: "https://imgapi.cn/api.php?category=star&9", title: "荒原建设", subtitle: "从 0 到 1 的开拓", text: "正在施工中，这里即将建立一座赛博城市。", url: "https://gxj.redgad.de5.net", show: false },
        ],

        statement: ["备案号：XXICP备123456789号", "Copyright © 2026 Xin"],
}

export default config

const config = {
        //网页元数据
        metaData: {
                title: 'Xin的个人主页🎉',
                description: '欢迎来到Xin的奇妙世界！',
                keywords: 'xin,Xin,个人主页,个人网站',
                icon: '/favicon.ico'   //网页图标，支持外链
        },

        avatar: "/img/avatar.jpg", // 头像
        welcometitle: "Hi, I'm Xin", // 标题

        // 颜色配置
        color: {
                themecolor: "#FFFFFF", // 主题颜色
                welcometitlecolor: "#FFFFFF", // 标题颜色
                turntablecolor1: "#FFFF00",  // 转盘渐变色一
                turntablecolor2: "#00FFFF"   // 转盘渐变色二
        },

        brightness: 85, // 背景亮度 --%
        blur: 5, // 毛玻璃模糊效果

        // 我的标签
        tags: ['乐观开朗', '温柔体贴', '随和亲切', '冷静沉着', '才思敏捷', '风趣幽默', '刚正不阿', '善解人意'],

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

        //打字机
        typeWriterStrings: [
                "如果你看到了这行字，说明我已经成功吸引到了你的注意力。",
                "顶峰的少年，给了你所有细节，你却说我不是迪迦，给不了你想要的光。",
                "心简单，世界就简单，幸福才会生长；心自由，生活就自由，到哪都有快乐。",
                "生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。"
        ],

        //音乐播放配置
        musicPlayer: {
                server: 'netease',
                type: 'playlist',
                id: '17657816544'
        },

        //壁纸数据
        wallpaper: {
                pic: [
                        { "title": "森林呼吸", "preview": "https://imgapi.cn/api.php?category=fengjing&type=small", "url": "https://imgapi.cn/api.php?category=fengjing" },
                        { "title": "二次元之窗", "preview": "https://t.alcy.cc/acg?category=girls", "url": "https://t.alcy.cc/acg" },
                        { "title": "极简建筑", "preview": "https://imgapi.cn/api.php?category=architecture&type=small", "url": "https://imgapi.cn/api.php?category=architecture" },
                        { "title": "星空夜话", "preview": "https://imgapi.cn/api.php?category=star&type=small", "url": "https://imgapi.cn/api.php?category=star" }
                ],
                picMobile: [
                        { "title": "竖屏随心", "preview": "https://imgapi.cn/api.php?category=meizi&type=small", "url": "https://imgapi.cn/api.php?mm=1" }
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

        //项目卡片 - 采用稳定图床链接
        projectcards: [
                { go: "🚀 前往", img: "https://t.alcy.cc/acg?1", title: "导航站", subtitle: "探索更多可能", text: "If you see this line, I've managed to get your attention.", url: "https://dh.xxy.indevs.in", show: false },
                { go: "🗂️ 前往", img: "https://t.alcy.cc/acg?2", title: "图床云盘", subtitle: "云端存储中心", text: "If you see this line, I've managed to get your attention.", url: "https://tu.xxy.indevs.in", show: false },
                { go: "📝 前往", img: "https://t.alcy.cc/acg?3", title: "随机ACG", subtitle: "遇见不一样的美", text: "每次刷新都是新世界。", url: "https://t.alcy.cc/acg", show: false },
                { go: "👍 前往", img: "https://t.alcy.cc/ysz?1", title: "快完成了", subtitle: "项目打磨中", text: "精益求精，敬请期待。", url: "http://tv.xxy.indevs.in", show: false },
                { go: "🎬 前往", img: "https://t.alcy.cc/ysz?2", title: "影视仓库", subtitle: "私人影院体验", text: "收藏你最爱的光影瞬间。", url: "https://tv1.xxy.indevs.in/login", show: false },
                { go: "💍 前往", img: "https://imgapi.cn/api.php?category=fengjing&4", title: "订阅管理", subtitle: "高效分流控制", text: "If you see this line, I've managed to get your attention.", url: "https://xxcm.pages.dev/admin", show: false },
                { go: "✅ 前往", img: "https://imgapi.cn/api.php?category=fengjing&5", title: "自动签到", subtitle: "解放双手", text: "让脚本为你效劳。", url: "http://125.208.21.128:11905", show: false },
                { go: "🔍 前往", img: "https://imgapi.cn/api.php?category=fengjing&6", title: "建设中", subtitle: "正在完善...", text: "每一个脚印都见证成长。", url: "https://gxj.redgad.de5.net", show: false },
        ],

        statement: ["备案号：XXICP备123456789号", "Copyright © 2026 Xin"],
}

export default config

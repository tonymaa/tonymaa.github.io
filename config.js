navs = [
	{
		navName: "我的网站",
		items: [
			{
				title: "相册",
				describe: "Tony 的相册分享",
				url: "https://album.tonyma.cn:47891/#/album",
				img: "https://album.tonyma.cn:47891/api/albums/cover?d=ZgwAPGo&title=分享",
				defaultImg: "img/album_bg.png",
				buttons: [
					{
						text: "相册",
						url: "https://album.tonyma.cn:47891/#/album",
						name: "album"
					}
				]
			},{
				title: "笔记",
				describe: "Tony 的笔记分享",
				url: "https://album.tonyma.cn:47891/#/note",
				img: "img/note_site.png",
				buttons: [
					{
						text: "笔记",
						url: "https://album.tonyma.cn:47891/#/note",
						name: "note"
					}
				]
			},{
				title: "歌单",
				describe: "Tony 的歌单分享",
				url: "https://space.bilibili.com/227369250/favlist?fid=1247372250&ftype=create&spm_id_from=333.1007.0.0",
				img: "img/music_list.png",
				buttons: [
					{
						text: "歌单",
						url: "https://space.bilibili.com/227369250/favlist?fid=1247372250&ftype=create&spm_id_from=333.1007.0.0",
						name: "music"
					}
				]
			},{
				title: "影视资源",
				describe: "影视资源站合集",
				url: "https://album.tonyma.cn:49903",
				img: "img/katelyTV.png",
				buttons: [
					{
						text: "打开",
						url: "https://album.tonyma.cn:49903",
						name: "tv"
					}
				]
			},{
				name: 'gold',
				hidden: true,
				url: "http://album.tonyma.cn:49901",
			},{
				name: 'home',
				hidden: true,
				url: "http://192.168.1.100",
			},
		]
	},
	{
	  navName: "我的主页",
	  items: [
		{
		  title: "Github",
		  describe: "Tony 的 Github主页",
		  url: "https://github.com/tonymaa",
		  img: "img/github.png",
		  buttons: [
			{
			  text: "Github 主页",
			  url: "https://github.com/tonymaa",
			  name: "github",
			}
		  ]
		},
		{
		  title: "bilibili",
		  describe: "Tony 的 bilibili",
		  url: "https://space.bilibili.com/227369250",
		  img: "img/bilibili.png",
		  buttons: [
			{
			  text: "bilibili 主页",
			  url: "https://space.bilibili.com/227369250",
			  name: "bilibili",
			}
		  ]
		}
	  ]
	},
	{
		navName: "工具",
		items: [
			{
				title: "瀚文75",
				describe: "瀚文75键盘管理界面",
				url: "./zmkx.app/index.html",
				img: "img/hanwen.png",
				buttons: [
					{
						text: "管理界面",
						url: "./zmkx.app/index.html",
						name: "hw75",
					}
				]
			},
			{
				title: "miniPaint",
				describe: "Web Photoshop / 网页版PS",
				url: "./miniPaint",
				img: "img/miniprint.png",
				buttons: [
					{
						text: "打开",
						url: "./miniPaint",
						name: "ps",
					}
				]
			},
			{
				title: "电梓播放器",
				describe: "浏览器插件 - Bilibili第三方音频播放器",
				url: (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) ? "https://chromewebstore.google.com/detail/%E7%94%B5%E6%A2%93%E6%92%AD%E6%94%BE%E5%99%A8-%E7%AC%AC%E4%B8%89%E6%96%B9bilibili%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/bdplgemfnbaefommicdebhboajognnhj?hl=zh-CN": "https://microsoftedge.microsoft.com/addons/detail/%E7%94%B5%E6%A2%93%E6%92%AD%E6%94%BE%E5%99%A8%E7%AC%AC%E4%B8%89%E6%96%B9bilibili%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/bikfgaolchpolficinadmbmkkohkbkdf?hl=zh-CN",
				img: "img/azusa.png",
				buttons: [
					{
						text: "谷歌插件市场",
						url: "https://chromewebstore.google.com/detail/%E7%94%B5%E6%A2%93%E6%92%AD%E6%94%BE%E5%99%A8-%E7%AC%AC%E4%B8%89%E6%96%B9bilibili%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/bdplgemfnbaefommicdebhboajognnhj?hl=zh-CN",
						name: "ps",
					},{
						text: "微软插件市场",
						url: "https://microsoftedge.microsoft.com/addons/detail/%E7%94%B5%E6%A2%93%E6%92%AD%E6%94%BE%E5%99%A8%E7%AC%AC%E4%B8%89%E6%96%B9bilibili%E9%9F%B3%E9%A2%91%E6%92%AD%E6%94%BE%E5%99%A8/bikfgaolchpolficinadmbmkkohkbkdf?hl=zh-CN",
						name: "ps",
					}
				]
			},{
				title: "Next Chat",
				describe: "AI 对话",
				url: "http://album.tonyma.cn:49902",
				img: "img/next_chat.png",
				buttons: [
					{
						text: "AI 对话",
						url: "http://album.tonyma.cn:49902",
						name: "gpt",
					}
				]
			}
		]
	},
	{
		navName: "云服务",
		items: [
			{
				title: "Nas",
				describe: "Tony 的私有云",
				url: "https://cloud.ugnas.com/#/login/account",
				img: "img/nas.png",
				buttons: [
					{
						text: "登录",
						url: "https://cloud.ugnas.com/#/login/account",
						name: "nas",
					}
				]
			},
		]
	}
];

navs = [
	{
	  navName: "个人主页导航",
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
		},
		{
		  title: "公开相册",
		  describe: "Tony 的公开相册",
		  // url: "http://h1406y6769.imdo.co:47891/#/album",
		  url: "http://album.tonyma.cn:47891/#/album",
		  img: "img/tonyalbum.png",
		  buttons: [
			{
			  text: "相册",
			  url: "http://album.tonyma.cn:47891/#/album",
			  name: "album"
			}
		  ]
		},
		{
		  title: "歌单",
		  describe: "Tony 的歌单",
		  url: "https://space.bilibili.com/227369250/favlist?fid=1247372250&ftype=create&spm_id_from=333.1007.0.0",
		  img: "https://10wallpaper.com/wallpaper/1280x1024/1504/Vinyl_Records_Theme_HD_Desktop_Wallpaper_14_1280x1024.jpg",
		  buttons: [
			{
			  text: "歌单",
			  url: "https://space.bilibili.com/227369250/favlist?fid=1247372250&ftype=create&spm_id_from=333.1007.0.0",
			  name: "music"
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
				img: "https://img.zcool.cn/community/01i76galyvo4os72t7jmaq3939.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/quality,q_100",
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
				img: "https://viliusle.github.io/miniPaint/images/logo.svg",
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
				img: "https://github.com/kenmingwang/azusa-player/raw/master/public/img/logo2-01.png?raw=true",
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
				img: "https://pic.nximg.cn/file/20210502/31733853_201029003101_2.jpg",
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

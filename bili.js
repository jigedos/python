{
  "wallpaper": "http://xhww.fun:63/img.php",
  "spider": "./jar/nb1202.jar;md5;80e2d5045e8cd48beb132870b4a339e0",
  "lives": [
    {
      "name": "直播",
      "type": 0,
      "playerType": 1,
      "url": "https://gcore.jsdelivr.net/gh/jigedos/tvbox1@main/900/TYZB",
      "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
      "logo": "https://epg.112114.xyz/logo/{name}.png"
    },
    {
      "group": "redirect",
      "channels": [
        {
          "name": "live",
          "epg": "https://epg.112114.xyz/?ch={name}&date={date}",
          "urls": [
            "proxy://do=live&type=txt&ext=https://gcore.jsdelivr.net/gh/jigedos/tvbox1@main/900/TYZB"
          ]
        }
      ]
    }
  ],
  "sites": [
   {
      "key": "csp_非凡",
      "name": "💯【非凡圈子】",
      "type": 3,
      "api": "csp_XBPQ",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "./json/非凡资源网.json"
    },
    {
      "key": "py_cctv",
      "name": "CCTV转播",
      "type": 3,
      "api": "py_cctv",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 0,
      "ext": "./py/py_cctv_1.py"
    },
    {
      "key": "js_豆瓣热播",
      "name": "❣️追剧影院",
      "type": 3,
      "api": "./json/Api.js",
      "searchable": 0,
      "quickSearch": 0,
      "filterable": 0,
      "ext": "./json/Doubanrebo.js"
    },
    {
      "key": "csp_骚火",
      "name": "💯骚火影视",
      "type": 3,
      "api": "csp_XBPQ",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "./json/骚火影视.json"
    },
    {
      "key": "csp_威士",
      "name": "💯威士影视",
      "type": 3,
      "api": "csp_XBPQ",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "./json/威士影视.json"
    },
    {
      "key": "push_agent",
      "name": "推送",
      "type": 3,
      "api": "csp_PushAgent",
      "playerType": 1,
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0,
      "ext": "./alitoken.txt"
    },
    {
      "key": "csp_JianPian",
      "name": "荐片",
      "type": 3,
      "api": "csp_JianPian",
      "playerType": 1,
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1
    },
    {
      "key": "看B站",
      "name": "B站",
      "type": 3,
      "api": "csp_XBPQ",
      "jar": "./jar/bili.jar",
      "ext": "https://kanb.tv/Show/{cateId}K{area}K{by}K{class}KKKKK{catePg}KKK{year}.html"
    },
    {
      "key": "一起看 ",
      "name": "一起1",
      "type": 3,
      "api": "csp_YQKan",
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 1
    },
    {
      "key": "yqkan_open",
      "name": "一起2",
      "type": 3,
      "api": "csp_YQKan",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0,
      "jar": "./jar/fan.txt;md5;14a42dfc35f4780e0d2aebf9fa397bbd"
    },
    {
      "key": "鲸落",
      "name": "TVB云",
      "type": 3,
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0,
      "api": "csp_XBPQ",
      "ext": "./json/TVB云播.json"
    },
    {
      "key": "南坊",
      "name": "南坊",
      "type": 3,
      "api": "csp_AppMao",
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 1,
      "ext": "FbjCcU1KqpC5pkRX4Q3D+NciPclIFs4EHzRV89m3pENRS6PivxPrlXvH/4efUSWwUCWwwk8srkIDSXN9RIJkSCZPJqnRikLRakBH0XBB6uNlX6XgMjhUKBTbBXopnsWdvXX6OowIBLQ78wghs3yRbgJxOYvrglBVIeI4cTcDGxixtMJ+yL0zE9g1d+N2RH4JERZh3CoYXSO1hH420ARbjt08lerroREmfGoT8JEGfTFW3MrK3hWueIyRsyOllsiwNM6dXSwTArm5em8Lv8ppXgro"
    },
    {
      "key": "加速",
      "name": "加速",
      "type": 3,
      "jar": "./jar/XBPQ.jar;md5;bb155c3f0133bbce4756ad52003f5968",
      "api": "csp_AppYs",
      "searchable": 1,
      "quickSearch": 1,
      "ext": "http://m.hhssyyss.icu/ruifenglb_api.php/v1.vod"
    },
    {
      "key": "freeok",
      "name": "freeBPQ",
      "type": 3,
      "api": "csp_XBPQ",
      "playerType": "1",
      "jar": "./jar/XBPQ.jar;md5;bb155c3f0133bbce4756ad52003f5968",
      "ext": {
        "分类url": "https://www.freeok.vip/vodshow/{cateId}-{area}-{by}-{class}-----{catePg}---{year}.html",
        "分类": "最新热榜&今日更新&FREE电影&FREE剧集&FREE动漫&FREE综艺",
        "分类值": "hot&new&1&2&3&4",
        "播放请求头": "User-Agent$Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
        "嗅探词": "m3u8#.m3u8#.mp4#freeok.mp4#/obj/",
        "线路数组": "data-dropdown-value=&&</div>[不包含:夸克]",
        "线路标题": "<span>&&</small>",
        "导演": "导演：&&</div>",
        "主演": "主演：&&</div>",
        "简介": "<p>&&</p>"
      }
    },
    {
      "key": "03影院",
      "name": "03影院",
      "type": 3,
      "api": "csp_XBPQ",
      "jar": "./jar/XBPQ.jar;md5;bb155c3f0133bbce4756ad52003f5968",
      "playerType": "1",
      "ext": {
        "主页url": "https://www.03yy.co",
        "数组": "<div class=\"pic-content pic-width-2\">&&</div",
        "副标题": "<span>&&</span>",
        "简介": "<p&&</p>",
        "导演": "导演：&&</div>",
        "主演": "主演：&&</div>",
        "搜索模式": "1",
        "搜索url": "https://www.03yy.co/search.php?searchword={wd}",
        "搜索副标题": "note\">&&</div>",
        "搜索链接": "href=\"&&\"",
        "线路二次截取": "<ul id=\"playlist\">&&</ul",
        "线路数组": " <li&&li>",
        "线路标题": ">&&<",
        "分类url": "https://www.03yy.co/search.php?page={catePg}&searchtype=5&order=time&tid={cateId}&area={area}&year={year}",
        "分类": "电影$1#电视剧$2#动漫$4#综艺$3"
      }
    },
    {
      "key": "Auete",
      "name": "奥特",
      "type": 3,
      "api": "csp_Auete",
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 0,
      "jar": "./jar/fan.txt;md5;14a42dfc35f4780e0d2aebf9fa397bbd"
    },
    {
      "key": "毛驴",
      "name": "毛驴",
      "type": 3,
      "api": "csp_MLYS",
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 0,
      "ext": "https://www.maolvys.com/",
      "jar": "./jar/fan.txt;md5;14a42dfc35f4780e0d2aebf9fa397bbd"
    },
    {
      "key": "Czsapp",
      "name": "厂长1",
      "type": 3,
      "api": "csp_Czsapp",
      "playerType": 2,
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 1,
      "ext": "https://www.czzy33.com/"
    },
    {
      "key": "csp_Czsapp",
      "name": "厂长2",
      "type": 3,
      "api": "csp_Czsapp",
      "playerType": 2,
      "searchable": 1,
      "changeable": 0,
      "quickSearch": 1,
      "ext": "https://www.czzy88.com/",
      "filterable": 1,
      "jar": "./jar/fan.txt;md5;14a42dfc35f4780e0d2aebf9fa397bbd"
    },
    {
      "key": "csp_Nmys",
      "name": "农民",
      "type": 3,
      "api": "csp_Nmys",
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 0,
      "ext": "./json/nmys.json"
    },
    {
      "key": "云播",
      "name": "云播",
      "type": 3,
      "api": "csp_XBPQ",
      "jar": "./jar/XBPQ.jar;md5;bb155c3f0133bbce4756ad52003f5968",
      "ext": {
        "影片类型": "分类：&&主演",
        "导演": "导演：</span>&&</p>",
        "主演": "主演：</span>&&</p>",
        "简介": "class=\"sketch content\">&&</span>",
        "数组": "myui-vodlist__thumb&&</a>",
        "标题": "title=\"&&\"",
        "副标题": "pic-tag pic-tag-top\">&&</span>",
        "图片": "data-original=\"&&\"",
        "链接": "href=\"&&\"",
        "搜索模式": "1",
        "搜索url": "http://www.hktvyun.com/index.php/ajax/suggest?mid=1&wd={wd}&limit=500",
        "搜索二次截取": "\"list\":[&&]",
        "搜索数组": "{&&}",
        "搜索标题": "\"name\":\"&&\"",
        "搜索图片": "\"pic\":\"&&\"",
        "搜索链接": "http://www.hktvyun.com/vod/detail/id/+\"id\":&&,+html",
        "嗅探词": ".m3u8#mp4",
        "线路数组": "</a><h3&&/h3>",
        "线路标题": "title\">&&<",
        "播放数组": "<ul class=\"myui-content__list scrollbar&&</ul>",
        "播放标题": ">&&<",
        "播放列表": "<a&&/a>",
        "分类url": "http://www.hktvyun.com/vod/show/area/{area}/by/{by}/class/{class}/id/{cateId}/lang/{lang}/page/{catePg}/year/{year}.html;;a",
        "分类": "电影$1#电视剧$2#综艺$3#动漫$4"
      }
    },
    {
      "key": "乌鸦",
      "name": "乌鸦",
      "type": 3,
      "api": "csp_XBPQ",
      "jar": "./jar/XBPQ.jar;md5;bb155c3f0133bbce4756ad52003f5968",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": {
        "站名": "乌鸦影视",
        "主页url": "https://wyys.wuyays.top/appto/v1/home/cateData?id=1",
        "请求头": "User-Agent$Dart/2.19 (dart:io)",
        "二次截取": "\"data\"*[&&]",
        "数组": "{&&}",
        "图片": "\"vod_pic\"*\"&&\"",
        "标题": "\"vod_name\"*\"&&\"",
        "副标题": "\"vod_remarks\"*\"&&\"",
        "链接": "https://wyys.wuyays.top/addons/apptov4/app.php/v1/vod/getVod?id=+\"vod_id\":&&,+_platform=android&__ic=lqGGz9NM4aHVoD8jSoFFcmfeQ0zcjkG0a6dOiCPe4lHMGzMEigPzyXuhccQRZf6D75pAyu5qXZa8Woq50p8Xvf11kZq38Yk6UAkKR0nWIPWyUN%2BrL68%2FTxsj%2Fs%2F%2Bdvz3d9mhjzeyYUyI71OEzzkEnw%3D%3D",
        "线路数组": "\"player_info\":{&&}",
        "线路标题": "\"show\"*\"&&\"",
        "导演": "vod_director\"*\"&&\"",
        "主演": "vod_actor\"*\"&&\"",
        "简介": "vod_blurb\"*\"&&\"",
        "播放二次截取": "&&[替换]",
        "播放数组": "urls*\\[&&\\]",
        "播放列表": "{&&}",
        "跳转播放链接": "\"url\"*\"&&\"",
        "播放标题": "\"name\"*\"&&\"",
        "跳转解析": "默认$http://zn.ghlyys.com/znjsonapi.php.php?url=#墨鸦独家$空#墨鸦VIP$http://110.42.2.247:880//analysis//json//?uid=2496&my=abefhjpvBCGJLOUWX3&format=json&url=",
        "播放链接": "解析+\"url\"*\"&&\"",
        "搜索url": "https://wyys.wuyays.top/addons/apptov4/app.php/v1/vod/getVodSearch?wd={wd}&page=1&type",
        "搜索模式": "1",
        "分类url": "https://wyys.wuyays.top/addons/apptov4/app.php/v1/vod/getLists?area=&lang=&year=&order=time&type_id={cateId}&type_name=&page={catePg}&pageSize=21;;u0",
        "分类": "电影$1#电视剧$2#动漫$3#综艺$4"
      }
    },
    {
      "key": "黑狐",
      "name": "黑狐",
      "type": 3,
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 1,
      "jar": "./jar/XBPQ.jar;md5;bb155c3f0133bbce4756ad52003f5968",
      "playerType": "2",
      "api": "csp_XBPQ",
      "ext": {
        "站名": "黑狐影院",
        "主页url": "http://fagmn.com",
        "数组": "class=\"stui-vodlist__box\"&&</a",
        "图片": "data-original=\"&&\"",
        "标题": "title=\"&&\"",
        "链接": "href=\"&&\"",
        "嗅探词": ".m3u8#v3.huoshanvod.com#v3-dy-o.zjcdn#sf16-sg.larksuitecdn.com#v.kd1.qq.com#.mp4",
        "过滤词": "/hls/#php",
        "副标题": "<span class=\"pic-text text-right\">&&</span>",
        "搜索url": "http://fagmn.com/search.php;post;searchword={wd}",
        "搜索模式": "1",
        "搜索数组": "<a class=\"v-thumb stui-vodlist__thumb&&</a>",
        "搜索图片": "data-original=\"&&\"",
        "搜索标题": "title=\"&&\"",
        "搜索链接": "href=\"&&\"",
        "搜索副标题": "<span class=\"pic-text text-right\">&&</span>",
        "搜索后缀": "/view/",
        "线路数组": "href=\"#down&&/a>[替换:奇异视频>>黑狐一线#优酷视频>>黑狐二线#搜狐视频>>黑狐三线#咪咕视频>>黑狐四线]",
        "线路标题": ">&&<",
        "播放数组": "class=\"stui-content__playlist clearfix&&</ul>",
        "状态": "地区：&&</p>",
        "导演": "导演：&&</p>",
        "主演": "主演：&&</p>",
        "简介": "简介：&&</div>",
        "播放列表": "<a&&/a>",
        "播放标题": ">&&<",
        "播放链接": "href=\"&&\"",
        "免嗅": "0",
        "分类": "电影$1#电视剧$2#动漫$3#综艺$4",
        "分类url": "http://fagmn.com/list/{cateId}_{catePg}.html?order=time"
      }
    },
    {
      "key": "相声",
      "name": "相声",
      "type": 3,
      "searchable": 0,
      "style": {
        "type": "rect",
        "ratio": 1.597
      },
      "quickSearch": 0,
      "api": "csp_XBPQ",
      "jar": "./jar/XBPQ.jar;md5;1484e86a3a4463eaf8ef41c6832a1df0",
      "ext": {
        "主页url": "https://www.xsmp3.com",
        "数组二次截取": "<ul id=\"post_list_box\">&&</ul",
        "数组": "<li class=\"www_xsmp3_com post_list_li\">&&</div>",
        "图片": "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/59385/6a211035-3658-45ce-a476-79f6f5dc02b71172884.png?x-oss-process=image/resize,h_1308/interlace,1",
        "标题": "title=\"&&\"",
        "副标题": ">&&</a",
        "链接": "href=\"&&\"",
        "播放二次截取": "autoplay&&;</script>",
        "播放数组": "\\[&&\\]",
        "播放列表": "{&&}",
        "播放链接": "url*\"&&\"",
        "播放标题": "name*\"&&\"",
        "播放副标题": "artist*\"&&\"",
        "线路数组": "相声随身听",
        "线路标题": "相声随身听",
        "导演": "小米",
        "主演": "相声明星",
        "简介": "相声合集",
        "分类url": "https://www.xsmp3.com/{cateId}/{catePg}.html;;av",
        "分类": "郭德纲$gdg#德云社$dys#新势力$xsxsl#青区社$qqs#马三立$msl#更多$xsmj"
      }
    },
    {
      "key": "评书",
      "name": "评书",
      "type": 3,
      "searchable": 0,
      "style": {
        "type": "rect",
        "ratio": 1.597
      },
      "quickSearch": 0,
      "api": "csp_XBPQ",
      "jar": "./jar/XBPQ.jar;md5;1484e86a3a4463eaf8ef41c6832a1df0",
      "ext": {
        "主页url": "https://www.psmp3.com",
        "数组二次截取": "<ul id=\"post_list_box\">&&</ul",
        "数组": "<li class=\"www_psmp3_com post_list_li\">&&</div>",
        "图片": "https://bkimg.cdn.bcebos.com/pic/86d6277f9e2f07084e3cb402ee24b899a901f2f3",
        "标题": "title=\"&&\"",
        "副标题": ">&&</a",
        "链接": "href=\"&&\"",
        "播放二次截取": "autoplay&&;</script>",
        "播放数组": "\\[&&\\]",
        "播放列表": "{&&}",
        "播放链接": "url*\"&&\"",
        "播放标题": "name*\"&&\"",
        "播放副标题": "artist*\"&&\"",
        "线路数组": "评书随身听",
        "线路标题": "评书随身听",
        "导演": "小米",
        "主演": "评书明星",
        "简介": "评书合集",
        "分类url": "https://www.psmp3.com/{cateId}/{catePg}.html;;av",
        "分类": "袁阔成$ykc#单田芳$stf#田连元$tly#刘兰芳$llf#连丽如$llr#张少佐$zsz#田战义$tzy"
      }
    },
    {
      "key": "csp_SP33",
      "name": "公众号【非凡工具箱】",
      "type": 3,
      "api": "csp_SP33",
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "changeable": 0
    },
    {
      "key": "Gitcafe",
      "name": "纸条搜索",
      "type": 3,
      "api": "csp_Gitcafe",
      "playerType": 1,
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "./alitoken.txt"
    },
    {
      "key": "csp_AliPS",
      "name": "喵狸搜索",
      "type": 3,
      "api": "csp_AliPS",
      "playerType": 1,
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0,
      "ext": "./alitoken.txt"
    },
    {
      "key": "csp_Yisou",
      "name": "易搜搜索",
      "type": 3,
      "api": "csp_Yisou",
      "playerType": 1,
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0,
      "ext": "./alitoken.txt"
    },
    {
      "key": "csp_Upyunso",
      "name": "UP搜搜索",
      "type": 3,
      "api": "csp_Upyunso",
      "playerType": 1,
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 0,
      "ext": "./alitoken.txt"
    },
    {
      "key": "csp_XYQHikerAL_玩偶哥哥",
      "name": "玩偶哥哥",
      "type": 3,
      "api": "csp_XYQHikerAL",
      "playerType": 1,
      "searchable": 1,
      "quickSearch": 1,
      "filterable": 1,
      "ext": "./XYQHiker/玩偶哥哥.json"
    },
    {
      "key": "csp_WoGG",
      "name": "玩偶弟弟",
      "type": 3,
      "api": "csp_WoGG",
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 0,
      "ext": "http://127.0.0.1:9978/file/tvfan/token.txt+4k|auto|fhd"
    },
    {
      "key": "csp_Dm84",
      "name": "动漫巴士",
      "type": 3,
      "api": "csp_Dm84",
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 1
    },
    {
      "key": "csp_Anime1",
      "name": "日本动漫",
      "type": 3,
      "api": "csp_Anime1",
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 1
    },
    {
      "key": "csp_Yj1211",
      "name": "网红直播",
      "type": 3,
      "api": "csp_Yj1211",
      "searchable": 1,
      "quickSearch": 1,
      "changeable": 1
    },
    {
      "key": "Aid",
      "name": "急救教学",
      "type": 3,
      "api": "csp_FirstAid",
      "searchable": 0,
      "quickSearch": 0,
      "changeable": 0,
      "style": {
        "type": "rect",
        "ratio": 3.8
      }
    },
    {
      "key": "Bili",
      "name": "🅱哔哔合集",
      "type": 3,
      "api": "csp_Bili",
      "style": {
        "type": "rect",
        "ratio": 1.597
      },
      "searchable": 1,
      "quickSearch": 0,
      "changeable": 0,
      "ext": "https://fanty.run.goorm.site/ext/bilibili.json"
    },
    {
      "key": "Biliych",
      "name": "🅱哔哔歌曲",
      "type": 3,
      "api": "csp_Bili",
      "style": {
        "type": "rect",
        "ratio": 1.597
      },
      "searchable": 1,
      "quickSearch": 0,
      "changeable": 0,
      "ext": "https://fanty.run.goorm.site/ext/biliych.json"
    },
    {
      "key": "dr_兔小贝",
      "name": "📚儿童启蒙",
      "type": 3,
      "api": "https://fanty.run.goorm.site/ext/js/drpy2.min.js",
      "ext": "https://fanty.run.goorm.site/ext/%E5%85%94%E5%B0%8F%E8%B4%9D.js",
      "style": {
        "type": "rect",
        "ratio": 1.597
      },
      "searchable": 0,
      "quickSearch": 0,
      "changeable": 0
    },
    {
      "key": "少儿教育",
      "name": "📚少儿教育",
      "type": 3,
      "api": "csp_Bili",
      "style": {
        "type": "rect",
        "ratio": 1.597
      },
      "searchable": 0,
      "quickSearch": 0,
      "changeable": 0,
      "ext": "https://fanty.run.goorm.site/ext/少儿教育.json"
    },
    {
      "key": "小学课堂",
      "name": "📚小学课堂",
      "type": 3,
      "api": "csp_Bili",
      "style": {
        "type": "rect",
        "ratio": 1.597
      },
      "searchable": 0,
      "quickSearch": 0,
      "changeable": 0,
      "ext": "https://fanty.run.goorm.site/ext/小学课堂.json"
    },
    {
      "key": "初中课堂",
      "name": "📚初中课堂",
      "type": 3,
      "api": "csp_Bili",
      "style": {
        "type": "rect",
        "ratio": 1.597
      },
      "searchable": 0,
      "quickSearch": 0,
      "changeable": 0,
      "ext": "https://fanty.run.goorm.site/ext/初中课堂.json"
    },
    {
      "key": "高中教育",
      "name": "📚高中课堂",
      "type": 3,
      "api": "csp_Bili",
      "style": {
        "type": "rect",
        "ratio": 1.597
      },
      "searchable": 0,
      "quickSearch": 0,
      "changeable": 0,
      "ext": "https://fanty.run.goorm.site/ext/高中课堂.json"
    },
    {
      "key": "巴士",
      "name": "巴士",
      "type": 3,
      "api": "csp_Dm84",
      "searchable": 1,
      "changeable": 1,
      "jar": "./jar/custom_spider.jar;md5;012dbdf7aebe1c301c6b87be83a213d4"
    },
    {
      "key": "AList",
      "name": "AList",
      "type": 3,
      "api": "csp_AList",
      "searchable": 1,
      "changeable": 0,
      "ext": "./json/alist.json"
    },
    {
      "key": "JustLive",
      "name": "JustLive",
      "type": 3,
      "api": "csp_JustLive",
      "searchable": 1,
      "changeable": 0,
      "jar": "./jar/custom_spider.jar;md5;012dbdf7aebe1c301c6b87be83a213d4"
    }
  ],
  "parses": [
    {
      "name": "并发",
      "type": 2,
      "url": "Parallel"
    },
    {
      "name": "嗅探",
      "type": 3,
      "url": "Web"
    },
    {
      "name": "非凡X解析",
      "type": 1,
      "url": "http://yh.xn--yi7aa.top:3977/home/api?type=ys&uid=23519&key=abcikmpyCLOTX23789&url="
    },
    {
      "name": "腾讯专用",
      "type": 1,
      "url": "http://jx.xn--yi7aa.top:3975/qq.php?url="
    },
    {
      "name": "优酷专用",
      "type": 1,
      "url": "http://jx.xn--yi7aa.top:3975/youku.php?url="
    },
    {
      "name": "芒果专用",
      "type": 1,
      "url": "http://jx.xn--yi7aa.top:3975/mgtv.php?url="
    },
    {
      "name": "火花",
      "type": 1,
      "url": "https://api.huohua.vip/api/?key=FJ95i3U8qzneBhyWzS&url="
    },
    {
      "name": "彩虹",
      "type": 1,
      "url": "http://42.157.129.144:2323/CH/caihong_1993138546.php?url=",
      "ext": {
        "flag": [
          "qq",
          "腾讯",
          "qiyi",
          "爱奇艺",
          "奇艺",
          "youku",
          "优酷",
          "tucheng",
          "sohu",
          "搜狐",
          "letv",
          "乐视",
          "mgtv",
          "芒果",
          "tnmb",
          "seven",
          "yzm",
          "aliyun",
          "RJuMao",
          "bilibili",
          "1905",
          "xinvip",
          "XAL",
          "qiqi",
          "XALS",
          "YuMi-vip"
        ]
      }
    },
    {
      "name": "AP云",
      "type": 1,
      "url": "http://119.91.123.253:2345/Api/yun.php?url="
    },
    {
      "name": "爱思",
      "type": 1,
      "url": "https://jxjson.cf/ads.php?url="
    },
    {
      "name": "ICU",
      "type": 1,
      "url": "https://cache.json.icu/a1804857380.php?url="
    },
    {
      "name": "seven",
      "type": 1,
      "url": "http://110.42.2.247:8001/analysis/json/?uid=2449&my=acfgikquvzFGJRW459&format=data&url="
    },
    {
      "name": "晨曦",
      "type": 1,
      "url": "http://121.205.88.143:22222/api/?key=9NjuQB6qDfISRU03ja&url="
    },
    {
      "name": "巴拉",
      "type": 1,
      "url": "https://jxjson.cf/ads.php?url="
    },
    {
      "name": "官解2",
      "type": 1,
      "url": "https://api.json.icu//api//?key=b965ffb1e2ea03df5b1df52293533ea4&url="
    },
    {
      "name": "巴拉拉",
      "type": 1,
      "url": "https:/jxjson.cf/json_balabala.php?url="
    },
    {
      "name": "小刀",
      "type": 1,
      "url": "https://api.xdys.vip/webapi/xdys.php?url="
    },
    {
      "name": "夜幕",
      "type": 0,
      "url": "https://www.yemu.xyz/?url="
    },
    {
      "name": "杰森",
      "type": 0,
      "url": "https://jx.jsonplayer.com/player/?url=",
      "header": {
        "User-Agent": "Mozilla/5.0"
      }
    },
    {
      "name": "虾米",
      "type": 0,
      "url": "https://jx.xmflv.com/?url="
    },
    {
      "name": "77",
      "type": 0,
      "url": "https://jx.777jiexi.com/player/?url="
    }
  ],
  "flags": [
    "qq",
    "QQ",
    "iqiyi",
    "qiyi",
    "letv",
    "youku",
    "sohu",
    "tudou",
    "pptv",
    "PPTV",
    "mgtv",
    "ltnb",
    "rx",
    "CL4K",
    "xfyun",
    "wuduzy",
    "wasu",
    "bilibili",
    "renrenmi",
    "xmm",
    "xigua",
    "m1905",
    "funshion",
    "优酷",
    "芒果",
    "腾讯",
    "爱奇艺",
    "奇艺",
    "哔哩哔哩",
    "哔哩",
    "douyin"
  ],
  "doh": [
    {
      "name": "Google",
      "url": "https://dns.google/dns-query",
      "ips": [
        "8.8.4.4",
        "8.8.8.8"
      ]
    },
    {
      "name": "Cloudflare",
      "url": "https://cloudflare-dns.com/dns-query",
      "ips": [
        "1.1.1.1",
        "1.0.0.1",
        "2606:4700:4700::1111",
        "2606:4700:4700::1001"
      ]
    },
    {
      "name": "AdGuard",
      "url": "https://dns.adguard.com/dns-query",
      "ips": [
        "94.140.14.140",
        "94.140.14.141"
      ]
    },
    {
      "name": "DNSWatch",
      "url": "https://resolver2.dns.watch/dns-query",
      "ips": [
        "84.200.69.80",
        "84.200.70.40"
      ]
    },
    {
      "name": "Quad9",
      "url": "https://dns.quad9.net/dns-quer",
      "ips": [
        "9.9.9.9",
        "149.112.112.112"
      ]
    }
  ],
  "rules": [
    {
      "host": "www.iesdouyin.com",
      "rule": [
        "playwm/?video_id="
      ]
    },
    {
      "host": "www.ysgc.vip",
      "rule": [
        "getm3u8?url=http"
      ]
    },
    {
      "host": "v.douyin.com",
      "rule": [
        "playwm/?video_id="
      ]
    },
    {
      "host": "*",
      "rule": [
        "default.365yg.com"
      ]
    },
    {
      "host": "dyxs20.com",
      "rule": [
        ".m3u8"
      ]
    },
    {
      "host": "www.agemys.cc",
      "rule": [
        "cdn-tos",
        "obj/tos-cn"
      ]
    },
    {
      "host": "www.sharenice.net",
      "rule": [
        "http.*?/play.{0,3}\\?[^url]{2,8}=.*"
      ]
    },
    {
      "host": "www.sharenice.net",
      "rule": [
        "qianpailive.com",
        "vid="
      ]
    },
    {
      "host": "*",
      "rule": [
        "douyin.com/aweme",
        "video_id="
      ]
    },
    {
      "host": "*",
      "rule": [
        "huoshan.com",
        "/item/video/"
      ]
    },
    {
      "host": "*",
      "rule": [
        "http((?!http).){12,}?\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a)\\?.*"
      ]
    },
    {
      "host": "*",
      "rule": [
        "http((?!http).){12,}\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a)"
      ]
    },
    {
      "name": "量子广告",
      "hosts": [
        "vip.lz",
        "hd.lz"
      ],
      "regex": [
        "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.433333,[\\s\\S]*?#EXT-X-DISCONTINUITY"
      ]
    },
    {
      "name": "非凡广告",
      "hosts": [
        "vip.ffzy",
        "hd.ffzy"
      ],
      "regex": [
        "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY"
      ]
    },
    {
      "name": "火山",
      "hosts": [
        "huoshan.com"
      ],
      "regex": [
        "item_id="
      ]
    },
    {
      "name": "抖音",
      "hosts": [
        "douyin.com"
      ],
      "regex": [
        "is_play_url="
      ]
    },
    {
      "name": "暴风",
      "hosts": [
        "s5.bfzycdn"
      ],
      "regex": [
        "#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:3,[\\s\\S]*?#EXT-X-DISCONTINUITY"
      ]
    }
  ],
  "ijk": [
    {
      "group": "软解码",
      "options": [
        {
          "category": 4,
          "name": "opensles",
          "value": "0"
        },
        {
          "category": 4,
          "name": "overlay-format",
          "value": "842225234"
        },
        {
          "category": 4,
          "name": "framedrop",
          "value": "1"
        },
        {
          "category": 4,
          "name": "soundtouch",
          "value": "1"
        },
        {
          "category": 4,
          "name": "start-on-prepared",
          "value": "1"
        },
        {
          "category": 1,
          "name": "http-detect-range-support",
          "value": "0"
        },
        {
          "category": 1,
          "name": "fflags",
          "value": "fastseek"
        },
        {
          "category": 2,
          "name": "skip_loop_filter",
          "value": "48"
        },
        {
          "category": 4,
          "name": "reconnect",
          "value": "1"
        },
        {
          "category": 4,
          "name": "enable-accurate-seek",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec-auto-rotate",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec-handle-resolution-change",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec-hevc",
          "value": "0"
        },
        {
          "category": 1,
          "name": "dns_cache_timeout",
          "value": "600000000"
        }
      ]
    },
    {
      "group": "硬解码",
      "options": [
        {
          "category": 4,
          "name": "opensles",
          "value": "0"
        },
        {
          "category": 4,
          "name": "overlay-format",
          "value": "842225234"
        },
        {
          "category": 4,
          "name": "framedrop",
          "value": "1"
        },
        {
          "category": 4,
          "name": "soundtouch",
          "value": "1"
        },
        {
          "category": 4,
          "name": "start-on-prepared",
          "value": "1"
        },
        {
          "category": 1,
          "name": "http-detect-range-support",
          "value": "0"
        },
        {
          "category": 1,
          "name": "fflags",
          "value": "fastseek"
        },
        {
          "category": 2,
          "name": "skip_loop_filter",
          "value": "48"
        },
        {
          "category": 4,
          "name": "reconnect",
          "value": "1"
        },
        {
          "category": 4,
          "name": "enable-accurate-seek",
          "value": "0"
        },
        {
          "category": 4,
          "name": "mediacodec",
          "value": "1"
        },
        {
          "category": 4,
          "name": "mediacodec-auto-rotate",
          "value": "1"
        },
        {
          "category": 4,
          "name": "mediacodec-handle-resolution-change",
          "value": "1"
        },
        {
          "category": 4,
          "name": "mediacodec-hevc",
          "value": "1"
        },
        {
          "category": 1,
          "name": "dns_cache_timeout",
          "value": "600000000"
        }
      ]
    }
  ],
  "ads": [
    "mimg.0c1q0l.cn",
    "www.googletagmanager.com",
    "www.google-analytics.com",
    "mc.usihnbcq.cn",
    "mg.g1mm3d.cn",
    "mscs.svaeuzh.cn",
    "cnzz.hhttm.top",
    "tp.vinuxhome.com",
    "cnzz.mmstat.com",
    "www.baihuillq.com",
    "s23.cnzz.com",
    "z3.cnzz.com",
    "c.cnzz.com",
    "stj.v1vo.top",
    "z12.cnzz.com",
    "img.mosflower.cn",
    "tips.gamevvip.com",
    "ehwe.yhdtns.com",
    "xdn.cqqc3.com",
    "www.jixunkyy.cn",
    "sp.chemacid.cn",
    "hm.baidu.com",
    "s9.cnzz.com",
    "z6.cnzz.com",
    "um.cavuc.com",
    "mav.mavuz.com",
    "wofwk.aoidf3.com",
    "z5.cnzz.com",
    "xc.hubeijieshikj.cn",
    "tj.tianwenhu.com",
    "xg.gars57.cn",
    "k.jinxiuzhilv.com",
    "cdn.bootcss.com",
    "ppl.xunzhuo123.com",
    "xomk.jiangjunmh.top",
    "img.xunzhuo123.com",
    "z1.cnzz.com",
    "s13.cnzz.com",
    "xg.huataisangao.cn",
    "z7.cnzz.com",
    "xg.huataisangao.cn",
    "z2.cnzz.com",
    "s96.cnzz.com",
    "q11.cnzz.com",
    "thy.dacedsfa.cn",
    "xg.whsbpw.cn",
    "s19.cnzz.com",
    "z8.cnzz.com",
    "s4.cnzz.com",
    "f5w.as12df.top",
    "ae01.alicdn.com",
    "www.92424.cn",
    "k.wudejia.com",
    "vivovip.mmszxc.top",
    "qiu.xixiqiu.com",
    "cdnjs.hnfenxun.com",
    "cms.qdwght.com",
    "api.htpan.net"
  ]
}

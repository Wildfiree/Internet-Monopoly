var margin = { top: 30, right: 20, bottom: 20, left: 20 },
    twopart = 30;
var width = $(window).width() - margin.left*2,
    height = $(window).height() - margin.top*2,  
// var width = 500,
    // height = 500,
    miheight = height - 40,
    radius = 5,
    data = [],
    padding = 3;

// d3.json("./data/cleanD.json", function(error, mdata) {
//     if (error) throw error;
//     console.log(mdata);
//     data = mdata;
//     chart();
// });
// console.log(data);

data = 
    [{ "date": "2018/3/17", "com_id": 32732878, "name": "凌晨网络科技", "money": "", "currency": "", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2016/7/18", "com_id": 21876, "name": "酷狗音乐", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2016, "value": 201607 },
        { "date": "2016/7/18", "com_id": 21877, "name": "酷我音乐", "money": "", "currency": "", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2016, "value": 201607 },
        { "date": "2016/7/15", "com_id": 17181, "name": "海洋音乐China Music Corp", "money": "数亿", "currency": "美元", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2016, "value": 201607 },
        { "date": "2016/5/12", "com_id": 2197, "name": "袋鼠跳跳", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2016, "value": 201605 },
        { "date": "2014/11/6", "com_id": 14894, "name": "云中书城", "money": "50亿", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2014, "value": 201411 },
        { "date": "2014/4/2", "com_id": 9177, "name": "碁震云计算Keen Cloud", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2014, "value": 201404 },
        { "date": "2014/1/1", "com_id": 8608, "name": "科菱航睿", "money": "", "currency": "", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2014, "value": 201401 },
        { "date": "2013/9/13", "com_id": 8893, "name": "北京倍嘉时代科技", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2013, "value": 201309 },
        { "date": "2013/3/1", "com_id": 8190, "name": "枫树浏览器ChromePlus", "money": "", "currency": "", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2013, "value": 201303 },
        { "date": "2013/1/1", "com_id": 5203, "name": "安全管家", "money": "", "currency": "", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2013, "value": 201301 },
        { "date": "2013/1/1", "com_id": 8192, "name": "迅影网络Prayaya", "money": "", "currency": "", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2013, "value": 201301 },
        { "date": "2012/8/1", "com_id": 6816, "name": "刷机精灵", "money": "8000万", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2012, "value": 201208 },
        { "date": "2012/3/15", "com_id": 4149, "name": "游戏谷", "money": "1.35亿", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2012, "value": 201203 },
        { "date": "2012/1/1", "com_id": 3881, "name": "买卖宝", "money": "", "currency": "", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2012, "value": 201201 },
        { "date": "2011/8/1", "com_id": 8884, "name": "DNSPod", "money": "4000万", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2011, "value": 201108 },
        { "date": "2011/1/1", "com_id": 8193, "name": "MyTT Live", "money": "", "currency": "", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2011, "value": 201101 },
        { "date": "2010/8/23", "com_id": 78349, "name": "康盛创想", "money": "4300万", "currency": "美元", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2010, "value": 201008 },
        { "date": "2009/1/23", "com_id": 8768, "name": "北京驿码神通", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2009, "value": 200901 },
        { "date": "2008/1/23", "com_id": 24291, "name": "北京永航科技", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2008, "value": 200801 },
        { "date": "2008/1/23", "com_id": 8773, "name": "北京英克必成科技", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "并购", "com": "腾讯", "year": 2008, "value": 200801 },
        { "date": "2018/3/28", "com_id": 6001, "name": "多知网", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/21", "com_id": 12013962, "name": "壹心娱乐", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/21", "com_id": 32752066, "name": "微见", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/20", "com_id": 32749331, "name": "颂歌网络", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/20", "com_id": 25986, "name": "哇唧唧哇娱乐", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/20", "com_id": 81938, "name": "宝宝玩英语", "money": "1.5亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/16", "com_id": 22089, "name": "酷匠网", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/14", "com_id": 42186, "name": "iPayLinks", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/14", "com_id": 77413, "name": "趣头条", "money": "2亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/14", "com_id": 32711259, "name": "有狐文化", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/11", "com_id": 11060, "name": "新丽传媒", "money": "33.17亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/9", "com_id": 15285, "name": "虎牙直播", "money": "4.6亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/9", "com_id": 26018, "name": "柠萌影业", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/8", "com_id": 10292, "name": "斗鱼TV", "money": "40亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/8", "com_id": 64407, "name": "微电汇", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/7", "com_id": 22673442, "name": "灿谷集团", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/5", "com_id": 31059, "name": "考虫英语", "money": "2000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/3/1", "com_id": 5241, "name": "车好多集团", "money": "8.18亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201803 },
        { "date": "2018/2/28", "com_id": 14178, "name": "洋葱数学", "money": "1.2亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/27", "com_id": 7396, "name": "幕星社", "money": "4000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/23", "com_id": 32624000, "name": "步步高", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/14", "com_id": 32620864, "name": "京东物流", "money": "25亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/13", "com_id": 32624349, "name": "双羯影业", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/10", "com_id": 56049, "name": "艺画开天", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/9", "com_id": 21934, "name": "即刻", "money": "3000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/8", "com_id": 30706, "name": "盛大游戏", "money": "30亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/7", "com_id": 43161, "name": "网速大师", "money": "700万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/5", "com_id": 32616831, "name": "好物满仓", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/5", "com_id": 14742, "name": "山茶花", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/2/2", "com_id": 14127316, "name": "铁鳞社", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201802 },
        { "date": "2018/1/31", "com_id": 30642447, "name": "海澜之家", "money": "25亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201801 },
        { "date": "2018/1/29", "com_id": 26194, "name": "永辉云创", "money": "1.88亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201801 },
        { "date": "2018/1/25", "com_id": 519, "name": "快手", "money": "10亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201801 },
        { "date": "2018/1/24", "com_id": 32814, "name": "灵龙文化", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201801 },
        { "date": "2018/1/24", "com_id": 9066, "name": "晶泰科技", "money": "1500万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201801 },
        { "date": "2018/1/23", "com_id": 20960, "name": "SEE小电铺", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201801 },
        { "date": "2018/1/23", "com_id": 17975, "name": "优必选科技", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201801 },
        { "date": "2018/1/16", "com_id": 4233, "name": "自如网", "money": "40亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201801 },
        { "date": "2018/1/8", "com_id": 54087, "name": "VIP陪练", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201801 },
        { "date": "2018/1/2", "com_id": 8286, "name": "安赛AISEC", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2018, "value": 201801 },
        { "date": "2017/12/26", "com_id": 42186, "name": "iPayLinks", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201712 },
        { "date": "2017/12/22", "com_id": 42886, "name": "威马汽车", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201712 },
        { "date": "2017/12/18", "com_id": 20521, "name": "唯品会", "money": "8.63亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201712 },
        { "date": "2017/12/12", "com_id": 26998424, "name": "面包小课", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201712 },
        { "date": "2017/12/8", "com_id": 21373311, "name": "超级物种", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201712 },
        { "date": "2017/12/6", "com_id": 14078, "name": "医联", "money": "4亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201712 },
        { "date": "2017/12/1", "com_id": 32264147, "name": "每日优鲜便利购", "money": "5300万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201712 },
        { "date": "2017/12/1", "com_id": 25018, "name": "驿氪科技", "money": "2000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201712 },
        { "date": "2017/11/22", "com_id": 79323, "name": "十字星", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201711 },
        { "date": "2017/11/20", "com_id": 6033435, "name": "糖人动漫", "money": "700万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201711 },
        { "date": "2017/11/19", "com_id": 29928548, "name": "美的专业主义", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201711 },
        { "date": "2017/11/10", "com_id": 3700, "name": "猫眼电影", "money": "10亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201711 },
        { "date": "2017/11/8", "com_id": 14241, "name": "Alauda灵雀云", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201711 },
        { "date": "2017/11/8", "com_id": 22568, "name": "蔚来汽车", "money": "10亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201711 },
        { "date": "2017/11/6", "com_id": 20579, "name": "Ganker工匠社科技", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201711 },
        { "date": "2017/10/25", "com_id": 8961, "name": "耀客传媒", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201710 },
        { "date": "2017/10/19", "com_id": 3698, "name": "美团点评集团", "money": "40亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201710 },
        { "date": "2017/10/16", "com_id": 21107, "name": "懒熊体育", "money": "3000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201710 },
        { "date": "2017/10/11", "com_id": 77854, "name": "大家车言论", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201710 },
        { "date": "2017/10/10", "com_id": 62751, "name": "迷说", "money": "240万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201710 },
        { "date": "2017/9/28", "com_id": 44863, "name": "体素科技VoxelCloud", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201709 },
        { "date": "2017/9/25", "com_id": 25503, "name": "罗辑思维", "money": "9.6亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201709 },
        { "date": "2017/9/20", "com_id": 2261361, "name": "中金公司", "money": "28.6亿", "currency": "港元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201709 },
        { "date": "2017/9/18", "com_id": 16522, "name": "有车以后", "money": "2亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201709 },
        { "date": "2017/9/18", "com_id": 1356136, "name": "金证财富", "money": "8400万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201709 },
        { "date": "2017/9/5", "com_id": 83308, "name": "华体文化", "money": "2000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201709 },
        { "date": "2017/9/1", "com_id": 34954, "name": "香橙互动", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201709 },
        { "date": "2017/9/1", "com_id": 44784, "name": "徒子文化", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201709 },
        { "date": "2017/8/30", "com_id": 34891, "name": "水滴互助", "money": "1.6亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201708 },
        { "date": "2017/8/29", "com_id": 32255804, "name": "芝士视频", "money": "100万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201708 },
        { "date": "2017/8/23", "com_id": 8811, "name": "VIPKID大米科技", "money": "2亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201708 },
        { "date": "2017/8/16", "com_id": 36327, "name": "中国联通", "money": "780亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201708 },
        { "date": "2017/8/10", "com_id": 21150, "name": "Linklogis联易融金融", "money": "2亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201708 },
        { "date": "2017/8/4", "com_id": 42120, "name": "乐聚机器人", "money": "5000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201708 },
        { "date": "2017/7/26", "com_id": 77340, "name": "铸梦动画", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201707 },
        { "date": "2017/7/5", "com_id": 65712, "name": "企鹅童话", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201707 },
        { "date": "2017/7/5", "com_id": 33733, "name": "轻课", "money": "3300万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201707 },
        { "date": "2017/7/3", "com_id": 67607, "name": "雷鸟科技", "money": "4.5亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201707 },
        { "date": "2017/7/2", "com_id": 33532, "name": "扫货特卖APP", "money": "2000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201707 },
        { "date": "2017/6/30", "com_id": 2488, "name": "活动行", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/29", "com_id": 72815, "name": "WhatYouNeed", "money": "600万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/27", "com_id": 67648, "name": "衣川文化杜绍斐", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/25", "com_id": 55636, "name": "千聊", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/23", "com_id": 35348, "name": "Ulegal有法务", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/23", "com_id": 32199232, "name": "慧狮科技", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/21", "com_id": 36840, "name": "掌趣科技", "money": "4.9亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/16", "com_id": 35985, "name": "摩拜单车", "money": "6亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/15", "com_id": 79307, "name": "金楚信息", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/12", "com_id": 4306, "name": "富途证券", "money": "1.46亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/6", "com_id": 3182, "name": "棒棒糖", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/6", "com_id": 44471, "name": "酷开", "money": "3亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/6", "com_id": 79600, "name": "Storybook初篇信息", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/5", "com_id": 14800515, "name": "丛潇动漫", "money": "500万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/1", "com_id": 22568, "name": "蔚来汽车", "money": "6亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/6/1", "com_id": 26605, "name": "拼好货", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201706 },
        { "date": "2017/5/31", "com_id": 1491, "name": "猿题库", "money": "1.2亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201705 },
        { "date": "2017/5/26", "com_id": 18548, "name": "毒舌电影", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201705 },
        { "date": "2017/5/22", "com_id": 30052, "name": "数据工场", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201705 },
        { "date": "2017/5/16", "com_id": 8543, "name": "易鑫集团", "money": "5.05亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201705 },
        { "date": "2017/5/12", "com_id": 16197, "name": "轻松筹", "money": "2800万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201705 },
        { "date": "2017/5/8", "com_id": 60026, "name": "小电", "money": "3.5亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201705 },
        { "date": "2017/5/4", "com_id": 6990, "name": "星环科技TransWarp", "money": "2.35亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201705 },
        { "date": "2017/5/2", "com_id": 100, "name": "货车帮", "money": "1.56亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201705 },
        { "date": "2017/4/30", "com_id": 10953811, "name": "稻来传媒", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201704 },
        { "date": "2017/4/26", "com_id": 6033435, "name": "糖人动漫", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201704 },
        { "date": "2017/4/25", "com_id": 31521046, "name": "乐匠文化", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201704 },
        { "date": "2017/4/21", "com_id": 8833, "name": "西山居", "money": "1.43亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201704 },
        { "date": "2017/4/20", "com_id": 11683, "name": "易车", "money": "10亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201704 },
        { "date": "2017/4/19", "com_id": 17422, "name": "链家网", "money": "30亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201704 },
        { "date": "2017/4/18", "com_id": 29631, "name": "转转", "money": "2亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201704 },
        { "date": "2017/4/10", "com_id": 60026, "name": "小电", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201704 },
        { "date": "2017/4/1", "com_id": 11246, "name": "派派", "money": "4000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201704 },
        { "date": "2017/3/30", "com_id": 45266, "name": "小孩子点读", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201703 },
        { "date": "2017/3/29", "com_id": 12911, "name": "好大夫在线", "money": "2亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201703 },
        { "date": "2017/3/23", "com_id": 519, "name": "快手", "money": "3.5亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201703 },
        { "date": "2017/3/17", "com_id": 19068, "name": "新榜", "money": "1.8亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201703 },
        { "date": "2017/3/9", "com_id": 21586, "name": "云迹科技", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201703 },
        { "date": "2017/3/8", "com_id": 12241229, "name": "超神影业", "money": "3000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201703 },
        { "date": "2017/3/7", "com_id": 548330, "name": "冬漫社", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201703 },
        { "date": "2017/3/6", "com_id": 27111, "name": "天津动漫堂", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201703 },
        { "date": "2017/3/3", "com_id": 28888279, "name": "一群翻译网", "money": "100万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201703 },
        { "date": "2017/3/1", "com_id": 15087, "name": "赢了网", "money": "3000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201703 },
        { "date": "2017/2/28", "com_id": 18587, "name": "多有米网络", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201702 },
        { "date": "2017/2/28", "com_id": 10125, "name": "玄机科技", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201702 },
        { "date": "2017/2/20", "com_id": 9451, "name": "快法务", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201702 },
        { "date": "2017/2/20", "com_id": 79523, "name": "美豆爱厨房", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201702 },
        { "date": "2017/2/16", "com_id": 29957, "name": "猫王收音机", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201702 },
        { "date": "2017/2/14", "com_id": 28825, "name": "梦想加", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201702 },
        { "date": "2017/2/12", "com_id": 56049, "name": "艺画开天", "money": "300万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201702 },
        { "date": "2017/1/25", "com_id": 44766, "name": "阅文集团", "money": "1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/24", "com_id": 32598, "name": "萌爪医生", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/23", "com_id": 60214, "name": "企鹅医生", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/22", "com_id": 81539, "name": "悟漫田", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/20", "com_id": 17099, "name": "每日优鲜", "money": "1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/19", "com_id": 17953, "name": "豆腐", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/18", "com_id": 28516, "name": "绘梦动画", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/12", "com_id": 65698, "name": "大圣Live", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/12", "com_id": 3173, "name": "销售易CRM", "money": "2.8亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/12", "com_id": 1485, "name": "知乎", "money": "1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/6", "com_id": 4889, "name": "表情盒子", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/5", "com_id": 29778, "name": "SOIREE奢瑞小黑裙", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/4", "com_id": 35985, "name": "摩拜单车", "money": "2.15亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2017/1/1", "com_id": 17967, "name": "漫漫漫画", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2017, "value": 201701 },
        { "date": "2016/12/28", "com_id": 20234, "name": "新世相", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201612 },
        { "date": "2016/12/22", "com_id": 100, "name": "货车帮", "money": "1.15亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201612 },
        { "date": "2016/12/21", "com_id": 30793, "name": "博纳影业", "money": "25亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201612 },
        { "date": "2016/12/15", "com_id": 20598, "name": "工夫影业", "money": "2.7亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201612 },
        { "date": "2016/12/14", "com_id": 10449, "name": "PLU游戏视频", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201612 },
        { "date": "2016/12/9", "com_id": 32720346, "name": "坏小弟影业", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201612 },
        { "date": "2016/12/7", "com_id": 34910, "name": "嗨球科技", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201612 },
        { "date": "2016/12/1", "com_id": 25035, "name": "风起云扬传媒", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201612 },
        { "date": "2016/11/29", "com_id": 65712, "name": "企鹅童话", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201611 },
        { "date": "2016/11/28", "com_id": 7748, "name": "锦尚志", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201611 },
        { "date": "2016/11/24", "com_id": 17234, "name": "在行", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201611 },
        { "date": "2016/11/21", "com_id": 26549, "name": "天天拍车", "money": "1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201611 },
        { "date": "2016/11/15", "com_id": 58055, "name": "Boom布姆电竞学院", "money": "500万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201611 },
        { "date": "2016/11/10", "com_id": 53546, "name": "带我飞", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201611 },
        { "date": "2016/11/5", "com_id": 23782, "name": "映客APP", "money": "3.1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201611 },
        { "date": "2016/10/28", "com_id": 21329, "name": "微拍堂", "money": "2000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201610 },
        { "date": "2016/10/27", "com_id": 53213, "name": "真时科技Pacewear", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201610 },
        { "date": "2016/10/27", "com_id": 6696134, "name": "爱驰亿维", "money": "12亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201610 },
        { "date": "2016/10/27", "com_id": 19046, "name": "校园司令", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201610 },
        { "date": "2016/10/25", "com_id": 10175, "name": "四维图新", "money": "38亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201610 },
        { "date": "2016/10/19", "com_id": 29408, "name": "斗米兼职", "money": "4000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201610 },
        { "date": "2016/10/13", "com_id": 35985, "name": "摩拜单车", "money": "5500万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201610 },
        { "date": "2016/10/10", "com_id": 65757, "name": "灵河影视制作", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201610 },
        { "date": "2016/10/9", "com_id": 7925, "name": "来订吧", "money": "10亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201610 },
        { "date": "2016/10/9", "com_id": 7484, "name": "同程旅游", "money": "10亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201610 },
        { "date": "2016/9/20", "com_id": 14539, "name": "海云捷迅AWcloud", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201609 },
        { "date": "2016/9/7", "com_id": 44253, "name": "天闻角川", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201609 },
        { "date": "2016/9/5", "com_id": 11646, "name": "人人车", "money": "1.5亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201609 },
        { "date": "2016/9/3", "com_id": 28670, "name": "汇医在线", "money": "2400万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201609 },
        { "date": "2016/8/19", "com_id": 8676, "name": "京东商城", "money": "数亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/8/18", "com_id": 985, "name": "Teambition", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/8/16", "com_id": 14236, "name": "Keep", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/8/15", "com_id": 10292, "name": "斗鱼TV", "money": "15亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/8/8", "com_id": 20620, "name": "指尖天文", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/8/5", "com_id": 70239, "name": "奢分期", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/8/4", "com_id": 21150, "name": "Linklogis联易融金融", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/8/2", "com_id": 34891, "name": "水滴互助", "money": "5000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/8/2", "com_id": 788, "name": "更美APP", "money": "3.45亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/8/2", "com_id": 8543, "name": "易鑫集团", "money": "5.5亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/8/1", "com_id": 24078, "name": "名人朋友圈", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201608 },
        { "date": "2016/7/23", "com_id": 8166, "name": "永洪科技", "money": "2亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201607 },
        { "date": "2016/7/21", "com_id": 11737, "name": "抱抱APP", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201607 },
        { "date": "2016/7/20", "com_id": 31091, "name": "拼多多", "money": "1.1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201607 },
        { "date": "2016/7/19", "com_id": 2515, "name": "靠谱网络", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201607 },
        { "date": "2016/7/19", "com_id": 60214, "name": "企鹅医生", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201607 },
        { "date": "2016/6/16", "com_id": 8699, "name": "互动吧", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201606 },
        { "date": "2016/6/16", "com_id": 15731, "name": "疯狂老师", "money": "1.2亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201606 },
        { "date": "2016/6/16", "com_id": 157, "name": "滴滴出行", "money": "45亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201606 },
        { "date": "2016/6/13", "com_id": 8531, "name": "南京信风网络", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201606 },
        { "date": "2016/6/6", "com_id": 11683, "name": "易车", "money": "3亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201606 },
        { "date": "2016/6/3", "com_id": 32231, "name": "思派网络", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201606 },
        { "date": "2016/6/2", "com_id": 16197, "name": "轻松筹", "money": "2000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201606 },
        { "date": "2016/5/31", "com_id": 1491, "name": "猿题库", "money": "4000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201605 },
        { "date": "2016/5/25", "com_id": 32820, "name": "三千客餐饮", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201605 },
        { "date": "2016/5/17", "com_id": 15087, "name": "赢了网", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201605 },
        { "date": "2016/5/15", "com_id": 18527, "name": "Face视频交友", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201605 },
        { "date": "2016/5/14", "com_id": 35087, "name": "沃云网络我的WiFi", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201605 },
        { "date": "2016/5/10", "com_id": 21658, "name": "Come", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201605 },
        { "date": "2016/5/9", "com_id": 31310, "name": "易奇八字", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201605 },
        { "date": "2016/4/29", "com_id": 14844, "name": "雅讯天地", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201604 },
        { "date": "2016/4/27", "com_id": 51221, "name": "小格娱乐", "money": "30亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201604 },
        { "date": "2016/4/27", "com_id": 20167, "name": "微影时代", "money": "30亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201604 },
        { "date": "2016/4/18", "com_id": 100, "name": "货车帮", "money": "3500万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201604 },
        { "date": "2016/4/15", "com_id": 2274, "name": "百思不得姐", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201604 },
        { "date": "2016/4/11", "com_id": 28104, "name": "碳云智能科技", "money": "10亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201604 },
        { "date": "2016/4/6", "com_id": 17422, "name": "链家网", "money": "38.5亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201604 },
        { "date": "2016/4/5", "com_id": 7239, "name": "G7汇通天下", "money": "4500万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201604 },
        { "date": "2016/4/1", "com_id": 79563, "name": "BYTON拜腾", "money": "3000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201604 },
        { "date": "2016/3/31", "com_id": 3749, "name": "小红书", "money": "1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/26", "com_id": 33537, "name": "微赛体育", "money": "2.65亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/25", "com_id": 7026, "name": "忆红妆", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/25", "com_id": 7027, "name": "阿思拓ASTO", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/25", "com_id": 19932, "name": "火石", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/25", "com_id": 33494, "name": "谁APP", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/25", "com_id": 11374, "name": "元宝铺", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/14", "com_id": 4887, "name": "新氧", "money": "5000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/9", "com_id": 79306, "name": "白兔直播", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/7", "com_id": 26018, "name": "柠萌影业", "money": "5亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/1", "com_id": 24222, "name": "侃图", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/3/1", "com_id": 24770, "name": "ABC360伯瑞英语", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201603 },
        { "date": "2016/2/25", "com_id": 44766, "name": "阅文集团", "money": "1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201602 },
        { "date": "2016/2/24", "com_id": 9632, "name": "秀美甲APP", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201602 },
        { "date": "2016/2/17", "com_id": 20621, "name": "风铃软件", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201602 },
        { "date": "2016/2/17", "com_id": 29051, "name": "蜜蜂停车", "money": "8000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201602 },
        { "date": "2016/2/9", "com_id": 44314, "name": "邻家好医", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201602 },
        { "date": "2016/2/1", "com_id": 32230, "name": "新东方在线", "money": "3.2亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201602 },
        { "date": "2016/1/25", "com_id": 16686, "name": "东方二次元", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201601 },
        { "date": "2016/1/19", "com_id": 3698, "name": "美团点评集团", "money": "33亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201601 },
        { "date": "2016/1/19", "com_id": 5343, "name": "深圳云高信息", "money": "2100万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201601 },
        { "date": "2016/1/8", "com_id": 16470, "name": "陆金所", "money": "12.16亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2016, "value": 201601 },
        { "date": "2015/12/28", "com_id": 22985, "name": "朋友印象", "money": "3300万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201512 },
        { "date": "2015/12/22", "com_id": 3044, "name": "赞那度", "money": "8000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201512 },
        { "date": "2015/12/21", "com_id": 8940, "name": "MemBlaze忆恒创源科技", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201512 },
        { "date": "2015/12/21", "com_id": 11737, "name": "抱抱APP", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201512 },
        { "date": "2015/12/15", "com_id": 19233, "name": "知识星球", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201512 },
        { "date": "2015/12/15", "com_id": 17367, "name": "阿凡题", "money": "6000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201512 },
        { "date": "2015/12/15", "com_id": 9066, "name": "晶泰科技", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201512 },
        { "date": "2015/12/9", "com_id": 30516, "name": "中国邮政储蓄银行", "money": "451亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201512 },
        { "date": "2015/11/30", "com_id": 1606, "name": "微医集团", "money": "3亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201511 },
        { "date": "2015/11/18", "com_id": 10292, "name": "斗鱼TV", "money": "1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201511 },
        { "date": "2015/11/17", "com_id": 51221, "name": "小格娱乐", "money": "15亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201511 },
        { "date": "2015/11/17", "com_id": 20167, "name": "微影时代", "money": "15亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201511 },
        { "date": "2015/11/13", "com_id": 20087, "name": "回收宝", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201511 },
        { "date": "2015/11/12", "com_id": 17099, "name": "每日优鲜", "money": "2亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201511 },
        { "date": "2015/11/10", "com_id": 1964, "name": "哔哩哔哩bilibili", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201511 },
        { "date": "2015/11/9", "com_id": 7415, "name": "微盟Weimob", "money": "5亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201511 },
        { "date": "2015/10/28", "com_id": 8563, "name": "《天天幻灵》天锋网络", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201510 },
        { "date": "2015/10/22", "com_id": 28403, "name": "上海寰创通信", "money": "6200万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201510 },
        { "date": "2015/10/20", "com_id": 9796, "name": "Kuanter宽途汽车", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201510 },
        { "date": "2015/10/10", "com_id": 9077, "name": "金苗网", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201510 },
        { "date": "2015/9/30", "com_id": 52659, "name": "微脉", "money": "1000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/9/29", "com_id": 1485, "name": "知乎", "money": "5500万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/9/24", "com_id": 1606, "name": "微医集团", "money": "3.94亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/9/17", "com_id": 2884, "name": "超NICE", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/9/16", "com_id": 5657, "name": "成都余香", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/9/12", "com_id": 28067, "name": "一起Hi交友", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/9/9", "com_id": 26549, "name": "天天拍车", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/9/7", "com_id": 14078, "name": "医联", "money": "4000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/9/6", "com_id": 33290, "name": "金工场", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/9/2", "com_id": 26340, "name": "原力动画", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/9/1", "com_id": 69103, "name": "聚能鼎力", "money": "1547万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201509 },
        { "date": "2015/8/27", "com_id": 3009, "name": "饿了么", "money": "6.3亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/27", "com_id": 26013, "name": "南极圈", "money": "1270万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/25", "com_id": 25849, "name": "悦动圈", "money": "5000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/24", "com_id": 100, "name": "货车帮", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/21", "com_id": 9058, "name": "救要救第一反应急救", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/19", "com_id": 15263, "name": "华谊兄弟", "money": "36亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/18", "com_id": 15939, "name": "修车易", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/16", "com_id": 79651, "name": "有情趣", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/15", "com_id": 8669, "name": "微店", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/14", "com_id": 25188, "name": "微鲸科技", "money": "20亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/11", "com_id": 78892, "name": "战法牧", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/10", "com_id": 10971, "name": "大象册", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/4", "com_id": 4306, "name": "富途证券", "money": "6000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/4", "com_id": 30958, "name": "妙手医生", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/8/3", "com_id": 11646, "name": "人人车", "money": "8500万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201508 },
        { "date": "2015/7/29", "com_id": 24352, "name": "柠檬网联Magic Wifi", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/29", "com_id": 3756, "name": "Zealer载乐网络", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/28", "com_id": 3471, "name": "胡莱游戏", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/22", "com_id": 15087, "name": "赢了网", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/21", "com_id": 1240, "name": "e家洁", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/10", "com_id": 8961, "name": "耀客传媒", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/8", "com_id": 23668, "name": "美克国际", "money": "39.6亿", "currency": "港元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/8", "com_id": 157, "name": "滴滴出行", "money": "30亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/5", "com_id": 13898, "name": "优体网", "money": "70万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/3", "com_id": 7484, "name": "同程旅游", "money": "60亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/3", "com_id": 7925, "name": "来订吧", "money": "60亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/2", "com_id": 8561, "name": "Future Mobility和谐富腾", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/1", "com_id": 3881, "name": "买卖宝", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/7/1", "com_id": 6388, "name": "乐跑手环", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201507 },
        { "date": "2015/6/25", "com_id": 17216, "name": "悠先点菜", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201506 },
        { "date": "2015/6/17", "com_id": 22568, "name": "蔚来汽车", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201506 },
        { "date": "2015/6/17", "com_id": 8584, "name": "赛亚人网络", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201506 },
        { "date": "2015/6/11", "com_id": 15731, "name": "疯狂老师", "money": "2000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201506 },
        { "date": "2015/6/9", "com_id": 38479, "name": "58速运", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201506 },
        { "date": "2015/6/9", "com_id": 9015, "name": "华夏乐游", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201506 },
        { "date": "2015/6/4", "com_id": 15976, "name": "美家帮", "money": "数百万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201506 },
        { "date": "2015/6/1", "com_id": 2071, "name": "被窝音乐", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201506 },
        { "date": "2015/5/23", "com_id": 17099, "name": "每日优鲜", "money": "1000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201505 },
        { "date": "2015/5/18", "com_id": 8965, "name": "手游彩", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201505 },
        { "date": "2015/5/16", "com_id": 100, "name": "货车帮", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201505 },
        { "date": "2015/5/16", "com_id": 7239, "name": "G7汇通天下", "money": "3000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201505 },
        { "date": "2015/5/13", "com_id": 3980, "name": "知道创宇", "money": "6亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201505 },
        { "date": "2015/5/7", "com_id": 6431, "name": "广州欢网科技", "money": "5000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201505 },
        { "date": "2015/4/27", "com_id": 51221, "name": "小格娱乐", "money": "1.05亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201504 },
        { "date": "2015/4/27", "com_id": 20167, "name": "微影时代", "money": "1.05亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201504 },
        { "date": "2015/4/10", "com_id": 19536, "name": "宝宝助手", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201504 },
        { "date": "2015/4/9", "com_id": 2650, "name": "嘟嘟叫车", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201504 },
        { "date": "2015/4/2", "com_id": 8873, "name": "大众点评网", "money": "8.5亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201504 },
        { "date": "2015/3/27", "com_id": 26018, "name": "柠萌影业", "money": "1亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201503 },
        { "date": "2015/3/7", "com_id": 3669, "name": "刚泰控股", "money": "33亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201503 },
        { "date": "2015/3/1", "com_id": 7715, "name": "红点直播", "money": "2300万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201503 },
        { "date": "2015/2/19", "com_id": 11683, "name": "易车", "money": "15亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201502 },
        { "date": "2015/2/15", "com_id": 1240, "name": "e家洁", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201502 },
        { "date": "2015/2/11", "com_id": 17894, "name": "最美花开", "money": "数百万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201502 },
        { "date": "2015/2/11", "com_id": 16432, "name": "车生活", "money": "数百万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201502 },
        { "date": "2015/2/9", "com_id": 3508, "name": "华益天信", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201502 },
        { "date": "2015/1/31", "com_id": 8543, "name": "易鑫集团", "money": "4亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201501 },
        { "date": "2015/1/30", "com_id": 2167, "name": "卓健科技", "money": "1.5亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201501 },
        { "date": "2015/1/23", "com_id": 3009, "name": "饿了么", "money": "3.5亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201501 },
        { "date": "2015/1/7", "com_id": 1612, "name": "南京零号线", "money": "3000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201501 },
        { "date": "2015/1/7", "com_id": 9453, "name": "易题库", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201501 },
        { "date": "2015/1/6", "com_id": 5110, "name": "城觅网", "money": "1200万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2015, "value": 201501 },
        { "date": "2014/12/30", "com_id": 7054, "name": "Same", "money": "2000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201412 },
        { "date": "2014/12/24", "com_id": 8776, "name": "竞乐游戏", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201412 },
        { "date": "2014/12/21", "com_id": 40, "name": "面包旅行", "money": "5000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201412 },
        { "date": "2014/12/19", "com_id": 28807, "name": "创业邦", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201412 },
        { "date": "2014/12/15", "com_id": 28028, "name": "龙珠直播", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201412 },
        { "date": "2014/12/9", "com_id": 157, "name": "滴滴出行", "money": "7亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201412 },
        { "date": "2014/12/8", "com_id": 6121, "name": "WiWide迈外迪", "money": "3亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201412 },
        { "date": "2014/11/30", "com_id": 16760, "name": "万达电商飞凡网", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201411 },
        { "date": "2014/11/19", "com_id": 15263, "name": "华谊兄弟", "money": "36亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201411 },
        { "date": "2014/11/14", "com_id": 51, "name": "楚楚街", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201411 },
        { "date": "2014/11/12", "com_id": 9054, "name": "沃特碧们的Colg随乐软件", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201411 },
        { "date": "2014/11/4", "com_id": 4776, "name": "人人快送", "money": "1500万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201411 },
        { "date": "2014/10/26", "com_id": 15686, "name": "微播APP", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201410 },
        { "date": "2014/10/23", "com_id": 12924, "name": "GeGe APP", "money": "2000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201410 },
        { "date": "2014/10/23", "com_id": 39, "name": "口袋购物", "money": "3.5亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201410 },
        { "date": "2014/10/16", "com_id": 14309, "name": "华彩控股中福在线", "money": "4.45亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201410 },
        { "date": "2014/10/15", "com_id": 1606, "name": "微医集团", "money": "1.07亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201410 },
        { "date": "2014/10/3", "com_id": 5059, "name": "58同城", "money": "2300万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201410 },
        { "date": "2014/9/30", "com_id": 8558, "name": "高腾恒远", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201409 },
        { "date": "2014/9/28", "com_id": 5059, "name": "58同城", "money": "1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201409 },
        { "date": "2014/9/24", "com_id": 9018, "name": "雪球科技", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201409 },
        { "date": "2014/9/17", "com_id": 8603, "name": "盛世光华动漫", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201409 },
        { "date": "2014/9/12", "com_id": 17181, "name": "海洋音乐China Music Corp", "money": "1.2亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201409 },
        { "date": "2014/9/2", "com_id": 1556, "name": "丁香园", "money": "7000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201409 },
        { "date": "2014/9/1", "com_id": 13986, "name": "华南城", "money": "8亿", "currency": "港元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201409 },
        { "date": "2014/9/1", "com_id": 1240, "name": "e家洁", "money": "400万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201409 },
        { "date": "2014/9/1", "com_id": 9329, "name": "我趣旅行", "money": "2000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201409 },
        { "date": "2014/8/20", "com_id": 1611, "name": "爱拍原创", "money": "3800万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201408 },
        { "date": "2014/8/1", "com_id": 9636, "name": "跨考教育", "money": "3000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201408 },
        { "date": "2014/7/30", "com_id": 16161, "name": "优答", "money": "3000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201407 },
        { "date": "2014/7/29", "com_id": 5488, "name": "晶合思动BlingStorm", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201407 },
        { "date": "2014/7/21", "com_id": 28857, "name": "零禾谷网络", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201407 },
        { "date": "2014/7/15", "com_id": 9029, "name": "大成天下", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201407 },
        { "date": "2014/7/3", "com_id": 51221, "name": "小格娱乐", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201407 },
        { "date": "2014/7/3", "com_id": 20167, "name": "微影时代", "money": "数百万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201407 },
        { "date": "2014/7/1", "com_id": 28809, "name": "黑鲸网络", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201407 },
        { "date": "2014/7/1", "com_id": 12143, "name": "e袋洗", "money": "2000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201407 },
        { "date": "2014/6/15", "com_id": 19654, "name": "众安保险", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201406 },
        { "date": "2014/6/13", "com_id": 3464, "name": "有品PICOOC", "money": "2100万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201406 },
        { "date": "2014/6/12", "com_id": 27701355, "name": "微生活会员卡", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201406 },
        { "date": "2014/6/2", "com_id": 20167, "name": "微影时代", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201406 },
        { "date": "2014/6/1", "com_id": 5059, "name": "58同城", "money": "7.36亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201406 },
        { "date": "2014/5/26", "com_id": 10175, "name": "四维图新", "money": "11.73亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201405 },
        { "date": "2014/5/22", "com_id": 2650, "name": "嘟嘟叫车", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201405 },
        { "date": "2014/5/20", "com_id": 9071, "name": "乐我网络OOHHOO", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201405 },
        { "date": "2014/5/1", "com_id": 10175, "name": "四维图新", "money": "11.73亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201405 },
        { "date": "2014/5/1", "com_id": 7922, "name": "擎天柱", "money": "1.5亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201405 },
        { "date": "2014/4/30", "com_id": 27641, "name": "引力影视", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201404 },
        { "date": "2014/3/28", "com_id": 1356, "name": "魔格科技", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201403 },
        { "date": "2014/3/12", "com_id": 9281, "name": "乐居", "money": "1.8亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201403 },
        { "date": "2014/3/3", "com_id": 4306, "name": "富途证券", "money": "1000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201403 },
        { "date": "2014/3/1", "com_id": 8676, "name": "京东商城", "money": "2.14亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201403 },
        { "date": "2014/3/1", "com_id": 3881, "name": "买卖宝", "money": "1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201403 },
        { "date": "2014/2/19", "com_id": 8873, "name": "大众点评网", "money": "数亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201402 },
        { "date": "2014/2/1", "com_id": 7925, "name": "来订吧", "money": "5亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201402 },
        { "date": "2014/2/1", "com_id": 8765, "name": "刷机大师", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201402 },
        { "date": "2014/2/1", "com_id": 7484, "name": "同程旅游", "money": "5亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201402 },
        { "date": "2014/1/23", "com_id": 8754, "name": "像素软件", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201401 },
        { "date": "2014/1/20", "com_id": 1654, "name": "呱呱视频社区", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201401 },
        { "date": "2014/1/13", "com_id": 11302287, "name": "天天中彩票", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201401 },
        { "date": "2014/1/9", "com_id": 9921, "name": "华清飞扬", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201401 },
        { "date": "2014/1/5", "com_id": 1393, "name": "人人贷", "money": "1.3亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201401 },
        { "date": "2014/1/1", "com_id": 13986, "name": "华南城", "money": "15亿", "currency": "港元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201401 },
        { "date": "2014/1/1", "com_id": 8608, "name": "科菱航睿", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201401 },
        { "date": "2014/1/1", "com_id": 5486, "name": "星创互联", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201401 },
        { "date": "2014/1/1", "com_id": 157, "name": "滴滴出行", "money": "1亿", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2014, "value": 201401 },
        { "date": "2013/12/16", "com_id": 1981, "name": "好买财富", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201312 },
        { "date": "2013/12/1", "com_id": 1942, "name": "LBE安全大师", "money": "数千万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201312 },
        { "date": "2013/10/30", "com_id": 60, "name": "Roseonly专爱花店", "money": "1000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201310 },
        { "date": "2013/10/1", "com_id": 2244, "name": "乐逗游戏", "money": "1500万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201310 },
        { "date": "2013/9/16", "com_id": 26358, "name": "搜狗", "money": "4.48亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201309 },
        { "date": "2013/9/1", "com_id": 1240, "name": "e家洁", "money": "400万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201309 },
        { "date": "2013/7/8", "com_id": 2604, "name": "金译通网", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201307 },
        { "date": "2013/4/30", "com_id": 1632, "name": "Togic泰捷", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201304 },
        { "date": "2013/4/11", "com_id": 8911, "name": "长远互动网络", "money": "1000万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201304 },
        { "date": "2013/4/1", "com_id": 157, "name": "滴滴出行", "money": "1500万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201304 },
        { "date": "2013/4/1", "com_id": 81, "name": "优信二手车", "money": "3000万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201304 },
        { "date": "2013/3/17", "com_id": 51, "name": "楚楚街", "money": "数百万", "currency": "美元", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201303 },
        { "date": "2013/3/1", "com_id": 8190, "name": "枫树浏览器ChromePlus", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201303 },
        { "date": "2013/2/1", "com_id": 5066, "name": "JiaThis加网", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201302 },
        { "date": "2013/1/1", "com_id": 5203, "name": "安全管家", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201301 },
        { "date": "2013/1/1", "com_id": 8192, "name": "迅影网络Prayaya", "money": "", "currency": "", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201301 },
        { "date": "2013/1/1", "com_id": 2342, "name": "任玩传媒", "money": "数百万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201301 },
        { "date": "2013/1/1", "com_id": 315, "name": "365日历网", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2013, "value": 201301 },
        { "date": "2012/12/22", "com_id": 8588, "name": "中国网络电视台", "money": "数千万", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2012, "value": 201212 },
        { "date": "2012/12/1", "com_id": 74097, "name": "南方新媒体", "money": "数亿", "currency": "人民币", "inname": "腾讯", "cata": "投资", "com": "腾讯", "year": 2012, "value": 201212 },
        { "date": "2012/1/1", "com_id": 14242, "name": "Shopex商派网络", "money": "数千万", "currency": "人民币", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2012, "value": 201201 },
        { "date": "2011/11/1", "com_id": 1231, "name": "淘淘搜", "money": "数百万", "currency": "美元", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2011, "value": 201111 },
        { "date": "2011/9/1", "com_id": 7403, "name": "购物助手", "money": "数千万", "currency": "人民币", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2011, "value": 201109 },
        { "date": "2011/7/1", "com_id": 3698, "name": "美团点评集团", "money": "5000万", "currency": "美元", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2011, "value": 201107 },
        { "date": "2011/6/30", "com_id": 26813, "name": "名鞋库", "money": "1500万", "currency": "美元", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2011, "value": 201106 },
        { "date": "2011/3/1", "com_id": 8941, "name": "宝尊电商", "money": "数千万", "currency": "美元", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2011, "value": 201103 },
        { "date": "2011/2/5", "com_id": 9078, "name": "杭州淘巧科技", "money": "1000万", "currency": "人民币", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2011, "value": 201102 },
        { "date": "2011/1/31", "com_id": 14489, "name": "正和岛", "money": "数千万", "currency": "人民币", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2011, "value": 201101 },
        { "date": "2010/12/24", "com_id": 76817, "name": "莫耶瓷业", "money": "", "currency": "", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2010, "value": 201012 },
        { "date": "2010/11/25", "com_id": 31667, "name": "百世物流", "money": "数千万", "currency": "美元", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2010, "value": 201011 },
        { "date": "2010/4/1", "com_id": 1231, "name": "淘淘搜", "money": "300万", "currency": "人民币", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2010, "value": 201004 },
        { "date": "2010/3/1", "com_id": 31661, "name": "星晨急便", "money": "7000万", "currency": "人民币", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2010, "value": 201003 },
        { "date": "2010/1/1", "com_id": 8941, "name": "宝尊电商", "money": "数百万", "currency": "美元", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2010, "value": 201001 },
        { "date": "2009/6/1", "com_id": 10027, "name": "UC浏览器", "money": "数千万", "currency": "美元", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2009, "value": 200906 },
        { "date": "2009/3/1", "com_id": 5718, "name": "1771网游交易平台", "money": "数千万", "currency": "人民币", "inname": "阿里巴巴", "cata": "投资", "com": "阿里巴巴", "year": 2009, "value": 200903 }]
const yAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    // .attr("transform", `translate(${margin.left + 30},0)`)
    .call(d3.axisTop(xScale)
        // .tickValues([2015,2016,2017,2018])
        .tickSizeOuter(0));

const xAxis = g => g
    // .attr("transform", `translate(0,${height - margin.bottom})`)
    .attr("transform", `translate(${margin.left + width/2},0)`)
    .call(d3.axisLeft(yScale)
        // .tickValues([2015,2016,2017,2018])
        .tickSizeOuter(0));

var xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.year))
    .range([margin.left, width - margin.right]);
var yScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.year))
    .range([margin.top, height - margin.bottom]);
var yxScale = d3.scaleLinear()
    .domain([margin.left, width - margin.right])
    .range([margin.top, height - margin.bottom]);
var xyScale = d3.scaleLinear()
    .range([margin.left, width/2 - margin.right])
    .domain([margin.top, height - margin.bottom]);

// function Axis(orit,)
function dodge(data, radius, padding){
    const circles = data.map(d => ({ x: xScale(d.year), data: d })).sort((a, b) => a.x - b.x);
    // // const circles = data.map(d => ({ x: xScale(d.year), data: d })).sort((a, b) => a.y - b.y);

    const epsilon = 1e-3;
    let head = null, tail = null;

    // Returns true if circle ⟨x,y⟩ intersects with any circle in the queue.
    function intersects(x, y) {
        let a = head;
        while (a) {
            if ((radius * 2 + padding - epsilon) ** 2 > (a.x - x) ** 2 + (a.y - y) ** 2) {
                return true;
            }
            a = a.next;
        }
        return false;
    }

    // Place each circle sequentially.
    for (const b of circles) {

        // Remove circles from the queue that can’t intersect the new circle b.
        while (head && head.x < b.x - (radius * 2 + padding)) head = head.next;

        // Choose the minimum non-intersecting tangent.
        if (intersects(b.x, b.y = 0)) {
            let a = head;
            b.y = Infinity;
            do {
                let y = a.y + Math.sqrt((radius * 2 + padding) ** 2 - (a.x - b.x) ** 2);
                if (y < b.y && !intersects(b.x, y)) b.y = y;
                a = a.next;
                // if (y < 0) a.y = 1-y
            } while (a);
        }

        // Add b to the queue.
        b.next = null;
        if (head === null) head = tail = b;
        else tail = tail.next = b;
    }

    return circles;
}; 

function chart(){
    const svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height);

    const Yaxis = svg.append("g")
        .attr("class", "axis")
        .call(yAxis);

    const bubble = svg.append("g")
        .selectAll("circle")
        .data(dodge(data, radius, padding))
        .enter().append("circle")
        .attr("r", radius)
        .attr("fill", function (d) {
            if (d.data.inname === "腾讯") {
                return "blue"
            } else {
                return "red"
            }
        })
        .attr("cx", function(d){
            if (d.y < miheight) { return d.x } 
            else if (d.y > miheight && d.y < miheight * 2) { return d.x + radius*2 + padding }
            else if (d.y > miheight*2 ) { return d.x + radius * 4 + padding*2 }
        })
        .attr("cy", function (d) {
            if (d.y < miheight) { return miheight - d.y - radius - padding } 
            else if (d.y > miheight && d.y < miheight * 2) { return miheight * 2 - d.y }
            else if (d.y > miheight * 2) { return miheight * 3 - d.y - padding }
        });


        // .attr("cx", d => d.x)
        // .attr("cy", d => height - d.y + margin.bottom - radius - padding)
        // .attr("r", radius)
        // .attr("fill", function(d){
        //     if (d.data.inname === "腾讯"){
        //         return "blue"
        //     }else{
        //         return "red"
        //     }
        // });
    
    svg.transition()
        .delay(3000)
        .attr("class", "second");

    Yaxis.transition()
        .duration(1000)
        .remove();
    
    const Xaxis = svg.append("g")
        .call(xAxis);

    bubble.transition()
        .duration(3000)
        .delay(1000)
        

        // .ease()
        .attr("cx", function (d) {
            if (d.data.inname === "腾讯") {
                return (width / 2 - xyScale(d.y) - twopart/2)
            } else {
                return (width / 2 + xyScale(d.y) + twopart/2)
            }
    })
        .attr("cy", d => yxScale(d.x));

  return svg.node();

// $("div button").click(function (d) {
//     console.log($("div button").text());
//     svg.transition()
//         .duration(3000);
//     svg.attr("cx", function (d) {
//         if (d.data.inname === "腾讯") {
//             return width / 2 - d.y
//         } else {
//             return width / 2 + d.y
//         }
//     })
//         .attr("cy", d => d.x);
// });

};


//draw the simple position
// chart();

var circles;
function drawtpye() {
    // const angle = Math.PI * (3 - Math.sqrt(5));
    // const context = DOM.context2d(width, height);
    // context.translate(width / 2, height / 2);
    // for (let i = 1; i <= n; ++i) {
    //     const r = (radius + padding) * 1.2 * Math.sqrt(i);
    //     const a = i * angle;
    //     const x = r * Math.cos(a);
    //     const y = r * Math.sin(a);
    //     context.beginPath();
    //     context.arc(x, y, radius, 0, 2 * Math.PI);
    //     context.fill();
    //     yield context.canvas;
    // }
    //example
    var svg = d3.select("svg")
        .attr("width", width)
        .attr("height", height),
        // .attr("transform","translate(100,100)"),
        // size = Math.max(width, height);
        size = 300;
    // var color = d3.scaleRainbow()
        // .domain([0, 2 * Math.PI]);

    circles = d3.packSiblings(data
        // .map(d3.randomUniform(8, 26))//??
        // .map(d => ({data: d}))
        .map(function (r) { return { r: radius + padding }; }))
        // .map(function (i) { return { i: data.com_id }; }))
        
        .filter(function (d) { return -500 < d.x && d.x < 500 && -500 < d.y && d.y < 500; });

    svg.append("g")
        .selectAll("circle")
        .data(circles)
        .enter().append("circle")
        .attr("transform","translate(300,300)")

        .style("fill", "blue")
        .attr("r", radius)
        // .attr("cx", 0 )
        // .attr("cy", 0 )
        // .transition()
        // .duration(3000)
        // .delay(function(d){return d.x *10})

        .attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });
};

//draw the pack position
drawtpye();

// const context = DOM.context2d(width, height);
// const circles = d3.packSiblings(d3.range(n).map(() => ({ r: radius + padding })));
// context.translate(width / 2, height / 2);
// for (const { x, y } of circles) {
//     context.beginPath();
//     context.arc(x, y, radius, 0, 2 * Math.PI);
//     context.fill();
//     yield context.canvas;
// }



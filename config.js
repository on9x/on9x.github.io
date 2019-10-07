const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|ecosystem|support)/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'APlayer',

    
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'aplayer',
            tags: ['english', 'zh-Hans'],
            url: ''
        }),
        evanyou(),
        player()
    ]
});

function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer0();
            
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + i]) {
            window['ap' + i].destroy();
        }
    }
}


function aplayer0 () {
    window.ap0 = new APlayer({
        container: document.getElementById('aplayer0'),
        fixed: false,
	autoplay: true,
        lrcType: 0,
        audio: 
		[
			{name: '懒音',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070703.mp3'},
			{name: '声衰',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070704.mp3'},
			{name: '负面',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070705.mp3'},
			{name: '错晒',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070706.mp3'},
			{name: '正面',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070709.mp3'},
			{name: '抱榴莲',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070710.mp3'},
			{name: '得个隆',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070711.mp3'},
			{name: '像素低',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070712.mp3'},
			{name: '比个正面',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070713.mp3'},
			{name: '照答',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070716.mp3'},
			{name: '自以为是',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070717.mp3'},
			{name: '拾人牙畏',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070718.mp3'},
			{name: '咩态度',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070719.mp3'},
			{name: 'I wanna save U',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070720.mp3'},
			{name: '跑鞋',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070723.mp3'},
			{name: '讲嘢慢',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070724.mp3'},
			{name: '企鹅',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070725.mp3'},
			{name: '拖板',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070726.mp3'},
			{name: '碗',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070727.mp3'},
			{name: '唱K',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070730.mp3'},
			{name: '后波雷达',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070731.mp3'},
			{name: '帮帮手',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070801.mp3'},
			{name: 'Say no',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070802.mp3'},
			{name: '唔准',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070803.mp3'},
			{name: '教大家',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070806.mp3'},
			{name: '放榜',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070807.mp3'},
			{name: '一级蠢材',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070808.mp3'},
			{name: '呱呱嘈',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070809.mp3'},
			{name: '彼他',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070810.mp3'},
			{name: '温故知新',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070813.mp3'},
			{name: '啊吓',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070814.mp3'},
			{name: '嗯哼',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070815.mp3'},
			{name: '早起鸟儿',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070816.mp3'},
			{name: '牙签仔',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070817.mp3'},
			{name: '奥运弹人',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070820.mp3'},
			{name: '扭耳仔',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070821.mp3'},
			{name: '饮汤',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070822.mp3'},
			{name: '改名',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070823.mp3'},
			{name: '你衰啦',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070824.mp3'},
			{name: '黄金屋',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070827.mp3'},
			{name: '埋位',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070828.mp3'},
			{name: '揾笨',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070829.mp3'},
			{name: '让位',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070830.mp3'},
			{name: '大家一齐坐',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070831.mp3'},
			{name: '炒你',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070903.mp3'},
			{name: '装修',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070904.mp3'},
			{name: 'big and big',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070905.mp3'},
			{name: '权力',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070906.mp3'},
			{name: '选择',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070907.mp3'},
			{name: '唱歌',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070910.mp3'},
			{name: '样衰',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070911.mp3'},
			{name: '死狗',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070912.mp3'},
			{name: '神棍',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070913.mp3'},
			{name: '心算',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070914.mp3'},
			{name: '信五信我',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070917.mp3'},
			{name: '好蠢',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070918.mp3'},
			{name: '请病假',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070919.mp3'},
			{name: '心知肚明',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070920.mp3'},
			{name: '口水佬',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070921.mp3'},
			{name: '算罢',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070924.mp3'},
			{name: '病左',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070925.mp3'},
			{name: '孤独',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070926.mp3'},
			{name: '恃细凌人',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070927.mp3'},
			{name: '认错文化',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20070928.mp3'},
			{name: '煲烟',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071001.mp3'},
			{name: '红色',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071002.mp3'},
			{name: '直译',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071003.mp3'},
			{name: '报复',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071004.mp3'},
			{name: '民族精神',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071005.mp3'},
			{name: '听电话',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071008.mp3'},
			{name: '商机',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071009.mp3'},
			{name: '点算啊',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071010.mp3'},
			{name: '收五到',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071011.mp3'},
			{name: '食多D',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071012.mp3'},
			{name: '三缺一',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071015.mp3'},
			{name: '好名',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071016.mp3'},
			{name: '5够真',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071017.mp3'},
			{name: '勤力',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071018.mp3'},
			{name: '社会栋梁',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071019.mp3'},
			{name: '人情纸甘薄',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071023.mp3'},
			{name: '黄巴士',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071024.mp3'},
			{name: '口水尾',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071025.mp3'},
			{name: '慢慢拣',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071026.mp3'},
			{name: '连线',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071029.mp3'},
			{name: '食鬼',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071030.mp3'},
			{name: '见鬼',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071031.mp3'},
			{name: '中产',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071101.mp3'},
			{name: '人生中发白',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20071102.mp3'},
			{name: '执一济',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080204.mp3'},
			{name: '乜都无',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080205.mp3'},
			{name: '卖力',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080206.mp3'},
			{name: '利利是是',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080207.mp3'},
			{name: '年初二',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080208.mp3'},
			{name: '比面',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080211.mp3'},
			{name: '小小',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080212.mp3'},
			{name: '礼物',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080213.mp3'},
			{name: '扮大嘢',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080214.mp3'},
			{name: '谂下好',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080215.mp3'},
			{name: '拜年',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080218.mp3'},
			{name: '感冒',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080219.mp3'},
			{name: '踩界',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080220.mp3'},
			{name: '好得意',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080221.mp3'},
			{name: '三条易',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080222.mp3'},
			{name: '错同拿',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080225.mp3'},
			{name: '5答',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080226.mp3'},
			{name: '反击',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080227.mp3'},
			{name: '打冷',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080228.mp3'},
			{name: '井底娃娃',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080229.mp3'},
			{name: '音乐节目',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080303.mp3'},
			{name: '电子音乐',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080304.mp3'},
			{name: '独立音乐',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080305.mp3'},
			{name: '音乐是非题',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080306.mp3'},
			{name: '音乐意境',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080307.mp3'},
			{name: '飞左线',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080310.mp3'},
			{name: '搭错线',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080311.mp3'},
			{name: 'Cut线',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080312.mp3'},
			{name: '出来捞',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080314.mp3'},
			{name: '消假不良',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080317.mp3'},
			{name: '珍惜光阴',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080318.mp3'},
			{name: '依赖大野',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080319.mp3'},
			{name: '开会',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080320.mp3'},
			{name: '化学',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080321.mp3'},
			{name: '急',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080407.mp3'},
			{name: '等',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080408.mp3'},
			{name: '三日香',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080409.mp3'},
			{name: '后台',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080410.mp3'},
			{name: '跳台',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080411.mp3'},
			{name: '得闲',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080414.mp3'},
			{name: '美国医生',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080415.mp3'},
			{name: '退而求其',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080416.mp3'},
			{name: '精神D',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080417.mp3'},
			{name: '就快',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080418.mp3'},
			{name: '合约',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080421.mp3'},
			{name: '签名样衰',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080422.mp3'},
			{name: '无笔字',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080423.mp3'},
			{name: '忍',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080424.mp3'},
			{name: '丑字',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080425.mp3'},
			{name: '一百万银的故事',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080428.mp3'},
			{name: '增值',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080429.mp3'},
			{name: '立正收息',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080430.mp3'},
			{name: 'no',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080501.mp3'},
			{name: '5明',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080502.mp3'},
			{name: '惊',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080505.mp3'},
			{name: '埋堆',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080506.mp3'},
			{name: '埋洲',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080507.mp3'},
			{name: '游戏规则',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080508.mp3'},
			{name: '5话得',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080509.mp3'},
			{name: '三分钟热度',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080512.mp3'},
			{name: '收档',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080513.mp3'},
			{name: '无热度',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080514.mp3'},
			{name: 'do something',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080515.mp3'},
			{name: '点做',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080516.mp3'},
			{name: '大乡里',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080519.mp3'},
			{name: 'rose',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080520.mp3'},
			{name: '冻宾宾',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080521.mp3'},
			{name: '…',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080522.mp3'},
			{name: '…',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080523.mp3'},
			{name: '工字无出头',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080526.mp3'},
			{name: '为乜',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080527.mp3'},
			{name: '装野',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080528.mp3'},
			{name: '地板油',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080529.mp3'},
			{name: '搞生意',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080530.mp3'},
			{name: '无出路',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080602.mp3'},
			{name: '博大雾',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080603.mp3'},
			{name: '能见度低',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080604.mp3'},
			{name: '爹哦',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080609.mp3'},
			{name: '父亲节',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080610.mp3'},
			{name: '父亲节礼物',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080611.mp3'},
			{name: '巴比',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080612.mp3'},
			{name: '左住地球转',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080616.mp3'},
			{name: '跟住转',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080617.mp3'},
			{name: '自我中心',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080618.mp3'},
			{name: '冶你中心',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080619.mp3'},
			{name: '由你',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080620.mp3'},
			{name: '完',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080623.mp3'},
			{name: '冲啊',artist: '大嘢先生与迪迪仔',url: 'https://www.on9.fun/ii/20080624.mp3'},
		]
    });
}

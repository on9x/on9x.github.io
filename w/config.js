const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|ecosystem|support)/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'APlayer',

    nav: {
        default: [
            {
                title: 'Home', path: '/home'
            },
            {
                title: 'Ecosystem', path: '/ecosystem'
            },
            {
                title: 'Support APlayer', path: '/support'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/zh-Hans/'
            },
            {
                title: '生态', path: '/zh-Hans/ecosystem'
            },
            {
                title: '支持 APlayer', path: '/zh-Hans/support'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
    },
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
            aplayer1();
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
        lrcType: 0,
        audio: [{
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.jpg',
            
            theme: '#505d6b'
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.jpg',
            
            theme: '#46718b'
        }, {
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.mp3',
            cover: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.jpg',
            
            theme: '#ebd0c2'
        }]
    });
}
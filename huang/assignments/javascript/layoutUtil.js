// create navigation bar
function createLinkObject(desc, url) {
    return {
        "desc": desc,
        "link": url
    };
}

var MAIN_NAVIGATION = [
    createLinkObject("FaQs", "faqs.html"),
    createLinkObject("What's New", "games.html"),
    createLinkObject("About Us", "aboutus.html"),
    createLinkObject("Customer Service", "customerservice.html"),
    createLinkObject("Game Information", "gameInfo.html"),
    createLinkObject("Pokemon Movies", "movies.html"),
    createLinkObject("Favorite Pokemons", "pokemons.html")
];

var QUICK_NAVIGATION = [
    createLinkObject("Journey", "index.html#journey"),
    createLinkObject("News", "index.html#recent-news"),
    createLinkObject("Animations", "index.html#recent-animations"),
    createLinkObject("Recent Gifts", "index.html#recent-gifts")
];

function createLink(linkName, targetURL) {
    return [
        '<a href="',
        targetURL,
        '">',
        linkName,
        '</a>'
    ].join('');
}

function createListOfLinks(links, baseURL, skipFirstElement) {
    var list = ['<ul>'];
    links.forEach(function (oLink, index) {
        list.push('<li>');
        if (index === 0 && skipFirstElement) {
            list.push(createLink(oLink.desc, oLink.link));
        } else {
            list.push(createLink(oLink.desc, baseURL + oLink.link));
        }
        list.push('</li>');
    });
    list.push('</ul>');
    return list.join('');
}

function createNavigationBar(isIndex) {
    isIndex = isIndex || false;

    document.write('<div class="navigation">');
    // create main navigation
    document.write('<div class="portal">');
    document.write('<h3>Main Navigation</h3>');

    var baseURL;
    if (isIndex) {
        MAIN_NAVIGATION.unshift(createLinkObject("Main Page", "index.html"));
        baseURL = "./html/";
    } else {
        MAIN_NAVIGATION.unshift(createLinkObject("Main Page", "../index.html"));
        baseURL = "./";
    }
    document.write(createListOfLinks(MAIN_NAVIGATION, baseURL, true));
    document.write('</div>');

    // create quick link
    document.write('<div class="portal">');
    document.write('<h3>Quick Links</h3>');
    baseURL = isIndex ? '' : '../';
    document.write(createListOfLinks(QUICK_NAVIGATION, baseURL, false));
    document.write('</div>');

    document.write('</div>');
}


// Define Pokemon object
function Pokemon(name, img, desc) {
    this.name = name;
    this.img = img;
    this.desc = desc;
}

Pokemon.prototype.generatePage = function() {
    return [
        '<h2>' + this.name + '</h2>',
        '<article><p>' + this.desc + '</p></article>'
    ].join('');
};

function loadURL(url) {
    return window.open(url, "new window", "width=300, height=500, toolbar=no, " +
        "menubar=no, scrollbars=yes, resizable=true");
}

pokemons = [];
function createPokemons() {
    var desc;
    desc = "妙蛙种子是爬行动物形态的宝可梦，外表类似蟾蜍或小型恐龙。它的皮肤呈蓝绿色，并附有深绿色的斑纹。它有四条腿，每条腿有三个" +
        "白色的尖爪子。它有着鲜红色的眼睛，在头顶上长着类似耳朵一样的一对凸起，并且有着一张大嘴，上颚的两颗牙齿清晰可见。这只宝可梦最显著" +
        "的特点就是它背后那个洋葱状的鳞茎。这个鳞茎与宝可梦有着共生关系，从它出生起，鳞茎就在它的背上开始生长了。鳞茎通过白天的光合作用为" +
        "妙蛙种子提供能量，同时鳞茎含有的许多能吸取养分的种子使得鳞茎能在夜间保持强劲长势" +
        "虽然妙蛙种子通常用四条腿行走，但是妙蛙种子可以抬高它的后腿。当它进化成妙蛙草后，它的鳞茎会变成一个较大的蓓蕾，使它几乎无法抬起它的后腿。";
    var pokemon1 = new Pokemon('フシギダネ Bulbasaur', "../media/bulbasaur.png", desc);
    pokemons.push(pokemon1);

    desc = "皮卡丘是一只電氣鼠，全身的皮毛都是黄色的。它的耳朵很长，尖端是黑色的。它有小小的嘴巴，还有黑色的眼睛。它的脸颊上有两个" +
        "红色的圆。它的前爪短而有些粗，有五个“手指”，相对地，后爪只有三个。它后背上有两条褐色的条纹。它的尾巴是像锯齿状的闪电，与身体相" +
        "接的部分也有一片褐色的皮毛。确切地来说皮卡丘是一只老鼠，它跑动的时候是用四条腿着地快速地奔跑，但是更多时候它是站立着的并用两只后脚走路。";
    var pokemon2 = new Pokemon("ピカチュウ Pikachu", "../media/pikachu.png", desc);
    pokemons.push(pokemon2);
}

link1 = 'bulbasaur.html';
link2 = 'pikachu.html';
function getFavoriatePokemons() {
    var links = [
        createLinkObject("フシギダネ Bulbasaur", 'javascript: loadURL(link1)'),
        createLinkObject("ピカチュウ Pikachu", 'javascript: loadURL(link2)')
    ];

    document.write(createListOfLinks(links, '', false));
}

function closeWindow() {
    setTimeout(function() {
        window.close();
    }, 3000);
}

function addLinksToPokemonPage() {
    var links = [
        createLinkObject("Print", 'javascript: window.print()'),
        createLinkObject("Set Timeout To Close", 'javascript: closeWindow()')
    ];
    return createListOfLinks(links, '', false);
}


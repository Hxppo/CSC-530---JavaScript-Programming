function createLinkObject(desc, url) {
    return {
        "desc": desc,
        "link": url
    };
}

var MAIN_NAVIGATION = [
    createLinkObject("FaQs", "faqs.html"),
    createLinkObject("About Us", "aboutus.html"),
    createLinkObject("Customer Service", "customerservice.html"),
    createLinkObject("Game Lookup", "gameInfo.html"),
    createLinkObject("Pokemon Movies", "movies.html"),
    createLinkObject("Pokemon Games", "games.html"),
    createLinkObject("Favorite Pokemons", "pokemons.html"),
    createLinkObject("What's New", "whatsnew.html")
];

var QUICK_NAVIGATION = [
    createLinkObject("Journey", "index.html#journey"),
    createLinkObject("News", "index.html#recent-news"),
    createLinkObject("Animations", "index.html#recent-animations"),
    createLinkObject("Recent Gifts", "index.html#recent-gifts")
];

function createLink(linkName, targetURL) {
    var node = document.createElement("a");
    node.href = targetURL;
    node.innerHTML = linkName;

    return node;
}

function createListOfLinks(links, baseURL, skipFirstElement) {
    var root = document.createElement("ul");
    var listNode = null;
    links.forEach(function (oLink, index) {
        listNode = document.createElement("li");
        if (index === 0 && skipFirstElement) {
            listNode.appendChild(createLink(oLink.desc, oLink.link));
        } else {
            listNode.appendChild(createLink(oLink.desc, baseURL + oLink.link));
        }
        root.appendChild(listNode);
    });

    return root;
}

function createElementWithClass(tag, className) {
    var node = document.createElement(tag);
    node.className = className;
    return node;
}

function createElementWithID(tag, id) {
    var node = document.createElement(tag);
    node.id = id;
    return node;
}

function createNavigationBar(isIndex) {
    isIndex = isIndex || false;

    var root = document.getElementsByClassName("container")[0];
    var navigation = createElementWithClass("div", "navigation");
    root.appendChild(navigation);

    // add clock
    var portal = createElementWithClass("div", "portal");
    portal.appendChild(createTimeClock());
    navigation.appendChild(portal);

    // add quotes
    portal = createElementWithClass("div", "portal");
    portal.innerHTML = "<h3>Quote Of the Day</h3>" +
        "<p>" + generateQuote() + "</p>";
    navigation.appendChild(portal);

    // create main navigation
    portal = createElementWithClass("div", "portal");
    portal.innerHTML = '<h3>Main Navigation</h3>';

    var baseURL;
    if (isIndex) {
        MAIN_NAVIGATION.unshift(createLinkObject("Main Page", "index.html"));
        baseURL = "./html/";
    } else {
        MAIN_NAVIGATION.unshift(createLinkObject("Main Page", "../index.html"));
        baseURL = "./";
    }

    portal.appendChild(createListOfLinks(MAIN_NAVIGATION, baseURL, true));
    navigation.appendChild(portal);

    // create quick link
    portal = createElementWithClass("div", "portal");
    portal.innerHTML = '<h3>Main Navigation</h3>';
    baseURL = isIndex ? '' : '../';
    portal.appendChild(createListOfLinks(QUICK_NAVIGATION, baseURL, false));
    navigation.appendChild(portal);

    // create calendar
    var cal = new Calendar();
    portal = createElementWithClass("div", "portal");
    portal.innerHTML = cal.generateHTML();
    navigation.appendChild(portal);

    updateClockTime();
}

function createHeader(isIndex) {
    var header = document.getElementsByClassName("page-head")[0];

    // add logo
    var logo = document.createElement("a");
    logo.href = isIndex ? "index.html" : "../index.html";
    var img = createElementWithClass("img", "logo1");
    img.src = isIndex ? "./media/Wiki-wordmark.png" : "../media/Wiki-wordmark.png";
    logo.appendChild(img);
    header.appendChild(logo);

    // add title
    var title = document.createElement("h1");
    title.innerText = "Pokémon Wikipedia";
    header.appendChild(title);

    // add nav bar
    var nav = document.createElement("nav");
    var linkBase = isIndex ? "./html/" : "./";
    var links = [
        linkBase + "contactus.html",
        linkBase + "login.html",
        linkBase + "signup.html"
    ];
    var names = ["Contact Us", "Log In", "Sign Up"];
    var node = null;
    links.forEach(function (l, index) {
        node = document.createElement("a");
        node.href = l;
        node.innerHTML = "<b>" + names[index] + "</b>";
        nav.appendChild(node);
    });
    header.appendChild(nav);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuote() {
    var quotes = [
        "\"You said you have a dream ... That dream...Make it come true! Make your wonderful dream a reality, and it will become your truth! if anyone can, it's you!\" - N",
        "\"I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are. \"\n - Mewtwo",
        "\"A Caterpie may change into a Butterfree, but the heart that beats inside remains the same.\" \n - Brock",
        "\"'Cause i always play to win!\" -Ash Ketchum"
    ];

    var index = getRandomIntInclusive(0, quotes.length - 1);
    return quotes[index];
}

function popQuote() {
    var quote = generateQuote();
    var newWin = window.open("", "", "width=300, height=200, left=200, top=200");
    newWin.document.write("<h2>Quote Of the Day</h2>");
    newWin.document.write("<p>" + quote + "</p>");
    newWin.document.body.style.backgroundColor = "#f2ffe6";
}

function generateCurrentTimeString() {
    function normalizeTime(number) {
        return number < 10 ? "0" + number : number;
    }

    function selectGreetingAndBackgroundColor(time) {
        var body = document.getElementsByTagName("body")[0];
        if (0 <= time && time < 6) {
            body.style.backgroundColor = "#ffe6e6";
            return "What are you doing that early?";
        } else if (6 <= time && time < 12) {
            body.style.backgroundColor = "#f2f2f2";
            return "Good Morning!";
        } else if (12 <= time && time < 18) {
            body.style.backgroundColor = "#f2ffe6";
            return "Good Afternoon!";
        } else {
            body.style.backgroundColor = "#ffffe6";
            return "Good Evening";
        }
    }

    var currentTime = new Date();
    var hours = normalizeTime(currentTime.getHours());
    var minutes = normalizeTime(currentTime.getMinutes());
    var seconds = normalizeTime(currentTime.getSeconds());

    return selectGreetingAndBackgroundColor(currentTime.getHours()) + "\n\n"
        + [hours, minutes, seconds].join(":");
}

function createTimeClock() {
    var node = createElementWithID("h4", "clock");
    node.innerText = generateCurrentTimeString();
    return node;
}

function updateClockTime() {
    var portal = document.getElementsByClassName("portal")[0];
    if (portal.firstElementChild) {
        portal.replaceChild(createTimeClock(), portal.firstElementChild);
    } else {
        portal.appendChild(createTimeClock());
    }
    setTimeout('updateClockTime()', 1000);
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
    return window.open(url, "new window", "width=500, height=500, " +
        "left=400, top=150, toolbar=no, " +
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
function getFavoriatePokemons(parentNode) {
    var links = [
        createLinkObject("フシギダネ Bulbasaur", 'javascript: loadURL(link1)'),
        createLinkObject("ピカチュウ Pikachu", 'javascript: loadURL(link2)')
    ];

    var listNode = createListOfLinks(links, '', false);
    parentNode.appendChild(listNode);
}

function closePageAfterPrint() {
    print();
    setTimeout(function() {
        window.close();
    }, 2000);
}

function addLinksToPokemonPage(parent) {
    var links = [
        createLinkObject("Print", 'javascript: closePageAfterPrint()'),
        createLinkObject("Close Window", 'javascript: void close()')
    ];
    parent.appendChild(createListOfLinks(links, '', false));
}

// create calendar
var calDaysLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", 'Fri', 'Sat'];
var calMonthsLabels = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
var calDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var calCurrentDate = new Date();

function Calendar(month, year, day) {
    this.month = month ? month : calCurrentDate.getMonth();
    this.year = year ? year : calCurrentDate.getFullYear();
    this.day = day ? day : calCurrentDate.getDate();
}

Calendar.prototype.generateHTML = function () {
    // decide the first day of the week
    var startingDay = (new Date(this.year, this.month, 1)).getDay();

    // get number of days in a month
    var monthLength = calDaysInMonth[this.month];
    if (this.month === 1) {
        if((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0){
            monthLength = 29;
        }
    }

    // create the header of the calender
    var currentMonth = calMonthsLabels[this.month];
    var html = ['<table id="calendar">'];
    html.push('<tr><th colspan="7">');
    html.push(currentMonth + "," + this.year);
    html.push("</th></tr>");
    html.push("<tr>");
    var i, j;
    for (i = 0; i < 7; i++) {
        html.push("<td>" + calDaysLabels[i] + "</td>");
    }
    html.push("</tr><tr>");

    var day = 1;
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 7; j++) {
            html.push("<td>");
            if (day <= monthLength && (i > 0 || j >= startingDay)) {
                if (day === this.day) {
                    html.push('<mark>' + day + "</mark>");
                } else {
                    html.push(day);
                }
                day++;
            }

            html.push("</td>");
        }

        if (day > monthLength) {
            break;
        } else {
            html.push("</tr><tr>");
        }
    }

    html.push('</tr></table>');
    return html.join('');
};


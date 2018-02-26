// create clock
var springSaleDate = new Date(2018, 4, 13);
var clockHeader = "h2";
function generateCountdownClock () {
    var root = document.getElementById("clock");

    // generate title
    var title = document.createElement(clockHeader);
    title.innerText = "Countdown to Spring Sale April 13, 2018";
    root.appendChild(title);

    // generate clock
    var clock = document.createElement(clockHeader);

    clock.innerText = computeInterval(springSaleDate, new Date());
    root.appendChild(clock);

    updateClockTime();
}

function updateClockTime() {
    var clock = document.getElementsByTagName(clockHeader)[1];
    clock.innerText = computeInterval(springSaleDate, new Date());

    setTimeout('updateClockTime()', 1000);
}

function computeInterval(date1, date2) {
    function normalizeTime(number) {
        return number < 10 ? "0" + number : number;
    }

    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var msecPerDay = msecPerHour * 24;

    var interval = date1.getTime() - date2.getTime();
    var days = Math.floor(interval / msecPerDay );
    interval = interval - (days * msecPerDay );

    // Calculate the hours, minutes, and seconds.
    var hours = Math.floor(interval / msecPerHour );
    interval = interval - (hours * msecPerHour );

    var minutes = Math.floor(interval / msecPerMinute );
    interval = interval - (minutes * msecPerMinute );

    var seconds = Math.floor(interval / 1000);

    // normalize date
    hours = normalizeTime(hours);
    minutes = normalizeTime(minutes);
    seconds = normalizeTime(seconds);

    return days + " days, " + [hours, minutes, seconds].join(":");
}

// add flower
function displayFlower(isHidden) {
    var flowerNode = document.getElementById("flower");
    if(isHidden) {
        flowerNode.style.backgroundImage = "none";
    } else {
        flowerNode.style.backgroundImage = "url(flowers.jpg)";
        flowerNode.style.backgroundSize = "400px 50px";
        flowerNode.style.backgroundRepeat = "no-repeat";
    }
}

// add sale logo
var counterLogo = 0;
function displayLogo() {
    var logos = [
        "Spring Sale",
        "Save the Date",
        "April 13"
    ];

    var index = counterLogo % logos.length;
    counterLogo++;

    var node = document.getElementById("sale");
    node.innerText = logos[index];

    // set the style
    node.style.transform = "rotate(7deg)";
    node.style.fontSize = "bold";
    node.style.color = "#ffff1a";
    node.style.backgroundColor = "#ff6699";
    node.style.border = "thin solid red";

    setTimeout('displayLogo()', 2000);
}

// display product
var toDisplay = false;
function displayProductPics() {
    toDisplay = !toDisplay;
    selectProductImg();
}

var counterProduct = 0;
var timeoutFunction = null;
function selectProductImg() {
    var node;
    if (toDisplay) {
        var products = [
            "homepod",
            "ipad",
            "iphonex",
            "iwatch",
            "macbook"
        ];
        var index = counterProduct % products.length;
        counterProduct++;

        node = document.getElementById("product_img");
        node.style.display = "block";
        node.src = products[index] + ".jpg";

        node = document.getElementById("product_title");
        node.style.display = "block";
        node.innerText = products[index];
        node.style.color = "#990033";
        node.style.fontSize = "30px";
        node.style.textAlign = "center";

        timeoutFunction = setTimeout("selectProductImg()", 1000);
    } else {
        if (timeoutFunction) {
            clearTimeout(timeoutFunction);
        }
    }
}

function displayProductTitle(isHidden) {
    var node = document.getElementById("product_tool");
    node.innerHTML = isHidden ? "" : "Please Click to see <br> Sales or Stop Rotation";
    node.style.color = "#1a53ff";
    node.style.fontSize = "30px";
    node.style.textAlign = "center";
}

function init() {
    var nodeFlower = document.getElementById("flower");
    nodeFlower.addEventListener("mouseover", function () {
        displayFlower(false);
    });

    nodeFlower.addEventListener("mouseleave", function () {
        displayFlower(true);
    });

    displayLogo();

    var nodeProducts = document.getElementById("products");
    nodeProducts.addEventListener("mouseover", function () {
        displayProductTitle(false);
    });
    nodeProducts.addEventListener("mouseout", function () {
        displayProductTitle(true);
    });
    nodeProducts.addEventListener("click", function () {
        displayProductPics();
    });
}


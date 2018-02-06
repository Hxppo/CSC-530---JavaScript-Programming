loadURL = function (url) {
    return window.open(url, "", "width=600, height=600");
}

function Cruise (date, destination, cruiseDesc, cruiseURL, shipName, shipDesc, shipURL, price) {
    this.date = date;
    this.destination = destination;
    this.cruiseDesc = cruiseDesc;
    this.cruiseURL = cruiseURL;
    this.shipName = shipName;
    this.shipDesc = shipDesc;
    this.shipURL = shipURL;
    this. price = price;
}

cruises = [];

var cruise1Desc = "Take the sizzle from Miami when you depart for paradise aboard the Norwegian Getaway." +
    " Recline in a hammock on our newest resort-style destination, Harvest Caye, or go rainforest river tubing for " +
    "an experience the whole family will enjoy. Lean in and hear the ruins of Costa Maya as they whisper tales of " +
    "swashbuckling. Explore Cozumel’s unique ecological reserve Punta Sur Eco Park to see a pristine tropical jungle " +
    "and spot diverse wildlife. Find out why The Caribbean is paradise on earth when you set sail with Norwegian.";

var ship1Desc = "Norwegian Getaway combines the most magnificent amenities Norwegian has to offer with unforgettable " +
    "destinations. Stroll The Waterfront, an innovative, industry-first open-air promenade designed to connect guests" +
    " with the ocean like no other cruise line. Indulge in more than 28 dining options, experience the thrill of " +
    "five water slides, and three levels of action-packed activities in the sports complex. The excitement and" +
    " entertainment continues with Broadway musical Million Dollar Quartet. Get ready to explore the white sand beaches" +
    " and deep-blue waters on a Bahamas or Caribbean cruise, or just relax at sea on a Transatlantic cruise. " +
    "Miami’s Ultimate Ship is your ultimate getaway.";

var cruise1 = new Cruise(
    "3/8/2018",
    "Caribbean",
    cruise1Desc,
    "https://www.ncl.com/cruises/7-Day-Western-Caribbean-from-Miami?itineraryCode=GETAWAY7MIARTBBPICMACZMMIA",
    "NORWEGIAN GETAWAY",
    ship1Desc,
    "https://www.ncl.com/cruises/7-day-western-caribbean-from-miami-GETAWAY7MIARTBBPICMACZMMIA/staterooms?&itineraryCode=GETAWAY7MIARTBBPICMACZMMIA&shipCode=GETAWAY",
    549
);
cruises.push(cruise1);

var cruise2Desc = "Embark from Seattle and get ready for amazing views and wildlife like nowhere else. Witness massive " +
    "ice chunks calving into the sea, take the reins of a dogsled in Juneau, go for a catamaran ride in Ketchikan," +
    " and take a ride on the White Pass and Yukon route narrow-gauge railroad in Skagway.";

var ship2Desc = "Imagine awe over discovering fantastic vistas in The Last Frontier. Imagine exhilaration while" +
    " exploring the wilds of Alaska. Imagine relaxation upon finding your slice of paradise in The Caribbean. Imagine " +
    "Bliss. That’s what you’ll experience when you vacation on our newest and most incredible ship, Norwegian Bliss," +
    " coming to Alaska and The Caribbean in 2018. Custom-built for the spectacular, Norwegian Bliss features a" +
    " revolutionary Observation Lounge for you to soak in every stunning moment, from bald eagles soaring over glaciers " +
    "to dolphins splashing through warm turquoise waters. Come aboard and experience the best dining, entertainment and" +
    " amenities at sea against a backdrop of unrivaled natural beauty. Whether you choose to go tropical or a little" +
    " wild, there’s one word to describe the experiences awaiting you on Norwegian’s newest ship: Bliss.";

var cruise2 = new Cruise(
    "6/30/2018",
    "Alaska",
    cruise2Desc,
    "https://www.ncl.com/cruises/7-day-alaska-highlights-from-seattle-BLISS7SEAKTNJNUSGYVICSEA/schedule?destinations=Alaska_Cruises&numberOfGuests=4294953449&state=null&&itineraryCode=BLISS7SEAKTNJNUSGYVICSEA&customerStoriesCurrentPage=1&customerStoriesPageSize=3",
    "Norwegian Bliss",
    ship2Desc,
    "https://www.ncl.com/cruises/7-day-alaska-highlights-from-seattle-BLISS7SEAKTNJNUSGYVICSEA/staterooms?destinations=Alaska_Cruises&numberOfGuests=4294953449&state=null&&itineraryCode=BLISS7SEAKTNJNUSGYVICSEA&shipCode=BLISS",
    1049
);
cruises.push(cruise2);

var cruise3Desc = "Cruise Hawaii on the newly refurbished Pride of America.\n" +
    "The only cruise sailing 4 Hawaiian islands in 7 days year-round!\n" +
    "Voted best Hawaii Itinerary 12 years in a row!"

var ship3Desc = "Aloha! Come aboard Pride of America for the best way to island hop Hawaii. From the moment " +
    "you step into the Capitol Atrium, with its soaring Tiffany-glass dome and grand staircase, you’ll know this is" +
    " a spectacular cruise ship. Cruise America’s paradise in style, with more than 15 restaurants and 12 bars and " +
    "lounges, excellent family accommodations, spacious suites and lots of balconies – perfect for whale watching, " +
    "witnessing Kilauea Volcano or taking in the dramatic views of the Napali Coast.";

var cruise3 = new Cruise(
    "2/10/2018",
    "Hawaii",
    cruise3Desc,
    "https://www.ncl.com/cruises/7-day-hawaii-round-trip-honolulu-PRIDE_AMER7HNLOGGITOKOANWKHNL/schedule?destinations=Hawaii_Cruises&numberOfGuests=4294953449&state=null&&itineraryCode=PRIDE_AMER7HNLOGGITOKOANWKHNL&customerStoriesCurrentPage=1&customerStoriesPageSize=3",
    "Pride of America",
    ship3Desc,
    "https://www.ncl.com/cruises/7-day-hawaii-round-trip-honolulu-PRIDE_AMER7HNLOGGITOKOANWKHNL/staterooms?destinations=Hawaii_Cruises&numberOfGuests=4294953449&state=null&&itineraryCode=PRIDE_AMER7HNLOGGITOKOANWKHNL&shipCode=PRIDE_AMER",
    1699
);
cruises.push(cruise3);

linkNameArray = [
    "Display Cruises",
    "7-Day Western Caribbean from Miami",
    "7-Day Alaska Highlights from Seattle",
    "7-Day Hawaii, Round-trip Honolulu"
];

targetURLArray = [
    'javascript: displayList(cruises)',
    'javascript: loadURL(cruise1.cruiseURL)',
    'javascript: loadURL(cruise2.cruiseURL)',
    'javascript: loadURL(cruise3.cruiseURL)'
];

/*
Util Functions
 */
var createLink = function(linkName, targetURL) {
    return [
        '<a href="',
        targetURL,
        '">',
        linkName,
        '</a>'
    ].join('');
};

var createListOfLinks = function (linkNameArray, targetURLArray) {
    var list = ['<ul>'];
    linkNameArray.forEach(function (linkName, index) {
        list.push('<li>');
        list.push(createLink(linkName, targetURLArray[index]));
        list.push('</li>');
    });
    list.push('</ul>');
    return list.join('');
};

var createRow = function (newWindow, cruise, index) {
    var str = 'cruises[ ' + index + ']';

    newWindow.document.write("<tr>");
    newWindow.document.write("<td>" + cruise.date + "</td>");
    newWindow.document.write("<td>" + createLink(cruise.destination, 'javascript: loadDesc(' + str + '.cruiseDesc,' + str + '.cruiseURL)') + "</td>");
    newWindow.document.write("<td>" + createLink(cruise.shipName, 'javascript: loadDesc(' + str + '.shipDesc,' + str + '.shipURL)') + "</td>");
    newWindow.document.write("<td>" + cruise.price + "</td>");
    newWindow.document.write("</tr>");
};

var createHeader = function (newWindow, header) {
    newWindow.document.write("<thead><tr>");
    header.forEach(function (cell) {
        newWindow.document.write("<th>" + cell + "</th>");
    });
    newWindow.document.write("</tr></thead>");
}

popupWindow = function (url) {
    return window.open(url, "", "width=800, height=800, scrollbars=yes, resizable=true");
}

loadDesc = function (desc, url) {
    var newWin = window.open("", "", "width=800, height=800");
    newWin.document.write('<script type="text/javascript" src="midterm.js"></scr' + 'ipt>');
    newWin.document.write('<link rel="stylesheet" type="text/css" href="midterm.css"></head><body>');
    newWin.document.write("<article>" + desc + "</article>");
    newWin.document.write(createLink("Click here for more information...", 'javascript: popupWindow(' + "'" +  url + "'" + ')'));
    newWin.document.write('</body></html>');
}

displayList = function (cruises) {
    var newWin = loadURL("");
    newWin.document.write('<html><head><title>Midterm</title>');
    newWin.document.write('<script type="text/javascript" src="midterm.js"></scr' + 'ipt>');
    newWin.document.write('<link rel="stylesheet" type="text/css" href="midterm.css"></head><body>');
    var header = ["Departs", "Destination", "Ship", "Price From"];

    newWin.document.write('<table id="ships">');
    createHeader(newWin, header);

    newWin.document.write("<tbody>");
    cruises.forEach(function (cruise, index) {
        createRow(newWin, cruise, index);
    });
    newWin.document.write("</tbody></table>");

    newWin.document.write('</body></html>');
}
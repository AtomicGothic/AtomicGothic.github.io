const links = [
    {
        label: "Week 1",
        url: "week_1/index.html"
    },

    {
        label: "Week 2",
        url: "week_2/index.html"
    },

    {
        label: "Week 3",
        url: "week_3/index.html"
    },

    {
        label: "Week 4",
        url: "week_4/index.html"
    },

    {
        label: "Week 5",
        url: "week_5/index.html"
    },

    {
        label: "Week 7",
        url: "week_7/index.html"
    },

    {
        label: "Week 8",
        url: "week_8/index.html"
    },

    {
        label: "Week 9",
        url: "week_9/index.html"
    },

    {
        label: "Week 10",
        url: "week_10/index.html"
    },

    {
        label: "Challenge One",
        url: "challenge_one/index.html"
    }
]

function loadLinkList() {
    var listTag;
    var textLabel;

    for (var i = 0; i < links.length; i++){
        textLabel = document.createTextNode(links[i].label);
        listTag = document.createElement("a");
        listTag.appendChild(textLabel);
        listTag.setAttribute("class", "nav-link");
        listTag.setAttribute("onclick", "href='" + links[i].url + "';");
        document.getElementById("navBarList").appendChild(listTag);
    }

}

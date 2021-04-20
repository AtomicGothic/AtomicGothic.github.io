const links = [
    {
        label: "Week 1",
        url: "week_1/index.html"
    },

    {
        label: "Week 2",
        url: "week_2/index.html"
    }
]

function loadLinkList() {
    var listTag;
    var textLabel;

    for (var i = 0; i < links.length; i++){
        textLabel = document.createTextNode(links[i].label);
        listTag = document.createElement("LI");
        listTag.appendChild(textLabel);
        listTag.setAttribute("onclick", "window.location.href='" + links[i].url + "';");
        document.getElementById("linkList").appendChild(listTag);
    }

}
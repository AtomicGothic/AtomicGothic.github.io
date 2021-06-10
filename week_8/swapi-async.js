async function getJson(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            const fetchJson = await response.json();
            return fetchJson;
        }
    } catch (error) {
        console.log(error);
    }
}

function getShips(url) {
    return getJSON(url);
}

function renderShipList(ships, shipListElement) {
    const list = shipListElement.children[1];
    list.innerHTML = "";

    ships.forEach(function (ship) {
        let listItem = document.createElement("tr");
        listItem.innerHTML= `
            <td><a href="${ship.url}">${ship.name}</a></td>
            <td>${ship.length}</td>
            <td>${ship.crew}</td>
        `;

        listItem.addEventListener("click", function (event) {
            event.preventDefault();
            getShipDetails(ship.url);
        });

        list.appendChild(listItem);
    });
}

function renderShipDetails(shipData) {
    console.log(shipData);
}

async function showShips(url = "https://swapi.dev/api/starships/") {
    const results = await getShips(url);

    const shipListElement = document.getElementById("shipList");
    renderShipList(results.results, shipListElement);

    if(results.next) {
        const next = document.getElementById("next");
        next.ontouchend = () => {
            showShips(data.next);
        };
    }
    if (results.previous) {
        const prev = document.getElementById("prev");
        prev.ontouchend = () => {
            showShips(data.previous);
        };
    }
}

async function getShipDetails(url) {
    const ship = await getShips(url);
    renderShipDetails(ship);
}

showShips();

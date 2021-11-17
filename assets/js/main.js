


/* let user1 = "scissors";
let user2 = "rock";

switch (user1 + user2) {
    case "paperrock":
    case "rockpaper":
    case "scissorspaper":
        console.log("user 1 hat gewonnen")
        break;

    case "paperscissors":
    case "paperrock":
    case "scissorsrock":
        console.log("user 2 hat gewonnen")
        break;

    default:
        console.log("keiner hat gewonnen")
} */







// Lev2_5_js-vertiefung_conditional-statements_switch-break


/* let bundeslandInfo = document.getElementById("bundeslandInfo");
let bundeslandInfoErgebnis = document.getElementById("bundeslandInfoErgebnis");

function check() {
    switch (bundeslandInfo.value) {
        case "Baden-Württemberg":
            bundeslandInfoErgebnis.innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
            break;
        case "Bayern":
            bundeslandInfoErgebnis.innerHTML = "hat 12,844 Mio Einwohner und München ist die Hauptstadt"
            break;
        case "Berlin":
            bundeslandInfoErgebnis.innerHTML = "hat 12,844 Mio Einwohner und München ist die Hauptstadt"
            break;
        case "Brandenburg":
            bundeslandInfoErgebnis.innerHTML = "hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
            break;
        case "Bremen":
            bundeslandInfoErgebnis.innerHTML = "hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
            break;
        case "Hamburg":
            bundeslandInfoErgebnis.innerHTML = "hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
            break;
        case "Hessen":
            bundeslandInfoErgebnis.innerHTML = "hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
            break;
        case "Mecklenburg-Vorpommern":
            bundeslandInfoErgebnis.innerHTML = "hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
            break;
        case "Niedersachsen":
            bundeslandInfoErgebnis.innerHTML = "hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
            break;
        case "Nordrhein-Westfalen":
            bundeslandInfoErgebnis.innerHTML = "hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
            break;
        case "Rheinland-Pfalz":
            bundeslandInfoErgebnis.innerHTML = "hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt"
            break;
        case "Saarland":
            bundeslandInfoErgebnis.innerHTML = "hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt"
            break;
        case "Sachsen":
            bundeslandInfoErgebnis.innerHTML = "hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt"
            break;
        case "Sachsen-Anhalt":
            bundeslandInfoErgebnis.innerHTML = "hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt"
            break;
        case "Schleswig-Holstein":
            bundeslandInfoErgebnis.innerHTML = "hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
            break;
        case "Thüringen":
            bundeslandInfoErgebnis.innerHTML = "hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
            break;
        default:
            bundeslandInfoErgebnis.innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht."
            break;
    }
}
 */





// Lev2_7_js-vertiefung_conditional-statements_switch-break_DHL


let masse = document.getElementById("masse")
let mylist = document.getElementById("mylist")


function showtxt() {
    switch (mylist.value) {
        case "0":
            masse.innerHTML = "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cmH: bis 1 cm"
            break;
        case "1":
            masse.innerHTML = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm"
            break;
        case "2":
            masse.innerHTML = " <b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        case "3":
            masse.innerHTML = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        default:
            masse.innerHTML = "<b>Extra große Größe</b>"
    }

}


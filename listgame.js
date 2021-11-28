const gb = ["metroid-ii-return-of-samus", "pokemon-blue", "pokemon-red", "pokemon-yellow", "super-mario-land", "tetris"]
const gbc = ["links-awakening-dx", "pokemon-crystal", "pokemon-gold", "pokemon-silver", "super-mario-bros-delux"]

function listgame(console) {
    var list
    if (console == "gb") {
        list = gb
    } else if (console == "gbc") {
        list = gbc
    }

    for (let i = 1; i < gb.length; i++) {
        var game = "player.html?game=" + list[i] + "&type=" + console
        var image = "/gamebois/imageAssets/" + console + "/" + list[i] + ".png"

        var a = document.createElement("a");
        var link = document.createTextNode(game)
        a.appendChild(link)
        a.title = "linkozilla"
        a.href = game
        document.body.appendChild(a)
    }
}

//listgame("gb")
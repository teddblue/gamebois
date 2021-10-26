let favicon = document.querySelector("[rel=icon]")
const game = new URLSearchParams(window.location.search).get('game')
const type = new URLSearchParams(window.location.search).get('type')

/*games list*/
const gb = ['tetris', 'pokemon-red', 'pokemon-blue']

var url = "/gamebois/imageAssets/gameboislogo512.gif";
if (type === 'gb') {
    if (gb.includes(String(game))) {
        url = "/gamebois/imageAssets" + "/gb/" + game + ".png";
    }
}
favicon.href = url;
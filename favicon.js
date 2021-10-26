let favicon = document.querySelector("[rel=icon]")
const title = new URLSearchParams(window.location.search).get('title')
const console = new URLSearchParams(window.location.search).get('type')

/*url = "/gamebois/imageAssets/" + type + "/" + title + ".png";*/

const gb = ['tetris', 'pokemon-red', 'pokemon-blue', 'links-awakening-dx', 'metroid-ii-return-of-samus']

var url = "/gamebois/imageAssets/gameboislogo512.gif";
if (console === 'gb') {
    if (gb.includes(String(game))) {
        url = "/gamebois/imageAssets" + "/gb/" + title + ".png";
    }
}
favicon.href = url;
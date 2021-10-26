let favicon = document.querySelector("[rel=icon]")
const title = new URLSearchParams(window.location.search).get('title')
const type = new URLSearchParams(window.location.search).get('type')

/*url = "/gamebois/imageAssets/" + type + "/" + title + ".png";*/
/*games list*/
const gb = ['tetris', 'pokemon-red', 'pokemon-blue']

var url = "/gamebois/imageAssets/gameboislogo512.gif";
if (type === 'gb') {
    if (gb.includes(String(game))) {
        url = "/gamebois/imageAssets" + "/gb/" + title + ".png";
    }
}
favicon.href = url;

zzxnv
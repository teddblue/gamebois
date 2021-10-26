const favicon = document.querySelector("[rel=icon]")
const game = new URLSearchParams(window.location.search).get('game')
const type = new URLSearchParams(window.location.search).get('type')

/*games list*/
const gb = ['tetris', 'pokemon-red', 'pokemon-blue']

/*image lists*/
const gbimages = [
    'Tetris%20%28World%29%20%28Rev%201%29.png', 
    'Pokemon%20-%20Red%20Version%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29.png', 
    'Pokemon%20-%20Blue%20Version%20%28USA%2C%20Europe%29%20%28SGB%20Enhanced%29.png'
]

const url = "/gamebois/imageAssets/gameboislogo512.gif"
if (type === 'gb') {
    if (gb.includes(game)) {
        url = "http://thumbnails.libretro.com/" + "/Nintendo%20-%20Game%20Boy/Named_Boxarts/" + gbimages[gb.indexOf(game)]
    }
}
favicon.href = url;
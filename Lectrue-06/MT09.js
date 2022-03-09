function digitalClock(seconds) {
    let h = Math.floor(seconds/3600)
    if (h >= 24) {
        h -= 24
    }
    let m = Math.floor((seconds%3600)/60)
    let s = (seconds%3600)%60
    let arr = [h, m, s].map(el => {
        el = '' + el
        if (el.length < 2) {
            el = '0' + el
        }
        return el
    })
    return arr.join(':')
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));
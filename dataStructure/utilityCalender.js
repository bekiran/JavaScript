module.exports = {
    dayOfWeek(d, m, y) {
        var v = Math.floor((14 - m) / 12)
        var y0 = y - v
        var x = y0 + Math.floor(y0 / 4) - Math.floor(y0 / 100) + Math.floor(y0 / 400)
        var m0 = m + 12 * Math.floor((14 - m) / 12) - 2
        var d0 = (d + x + Math.floor((31 * m0) / 12)) % 7
        d0 = Math.floor(d0)
        console.log(d0+" jhgjhgjh")
        return d0
    },
    monthof(m) {
        switch (m) {
            case 1: return 31;
                break;
            case 2: return 28;
                break;
            case 3: return 31;
                break;
            case 4: return 30;
                break;
            case 5: return 31;
                break;
            case 6: return 30;
                break;
            case 7: return 31;
                break;
            case 8: return 31;
                break;
            case 9: return 30;
                break;
            case 10: return 31;
                break;
            case 11: return 30;
                break;
            case 12: return 31;
                break;

        }
    }
}

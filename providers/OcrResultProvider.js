class OcrResultProvider {

    static getLines(ocrResult) {
        let lines = []
        ocrResult.regions.forEach(r => {
            r.lines.forEach(l => {
                let words = []
                l.words.forEach(w => {
                    words.push(w.text)
                })
                lines.push(words)
            })
        })
        return lines
    }

    static getWords(ocrResult) {
        let words = []
        ocrResult.regions.forEach(r => {
            r.lines.forEach(l => {
                l.words.forEach(w => {
                    words.push(w.text)
                })
            })
        })
        return words
    }

    static findDates(ocrResult) {

    }

    static findGreatestNumber(ocrResult) {

    }

}

module.exports = OcrResultProvider
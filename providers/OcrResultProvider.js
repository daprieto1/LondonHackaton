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
        let dates = []
        let lines = this.getLines(ocrResult)

        lines.forEach(l => {
            try {
                let sentence = l.join(' ')
                let date = Date.parse(sentence)                
                if (!isNaN(date)) dates.push({ dateText: sentence, date: new Date(date) })
            } catch (error) {
                console.log(error)
            }
        })

        return dates
    }

    static findGreatestNumber(ocrResult) {

    }

}

module.exports = OcrResultProvider
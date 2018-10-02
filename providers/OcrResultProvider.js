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

    static findNumbers(ocrResult) {
        let numbers = []
        let words = this.getWords(ocrResult)

        words = words.map(w => w.replace('$', '').replace(',', '.'))
        words.forEach(w => {
            try {
                console.log(w)
                let number = parseFloat(w)
                if (!isNaN(number)) numbers.push({ numberText: w, number: number })
            } catch (error) {
                console.log(error)
            }
        })

        return numbers
    }

    static findGreatestNumber(ocrResult) {
        let numbers = this.findNumbers(ocrResult)

        if (numbers === undefined || numbers.length <= 0) throw ('No numbers')

        let greatest = numbers[0]
        numbers.forEach(n => {
            if (n.number > greatest.number) greatest = n
        })

        return greatest
    }

    static findSmallestNumber(ocrResult) {
        let numbers = this.findNumbers(ocrResult)

        if (numbers === undefined || numbers.length <= 0) throw ('No numbers')

        let smallest = numbers[0]
        numbers.forEach(n => {
            if (n.number < smallest.number) smallest = n
        })

        return smallest
    }

}

module.exports = OcrResultProvider
const express = require('express')
const computerVisionProvider = require('./../providers/ComputerVisionProvider')

const ocrResultProvider = require('./../providers/OcrResultProvider')

let FormatController = () => {
    let router = express.Router()

    router.route('/bancolombia')
        .post(function (req, res) {
            let url = req.body.url
            let detectOrientation = req.body.detectOrientation

            computerVisionProvider.recognizePrintedText(detectOrientation, url)
                .then(result => {
                    let greates = ocrResultProvider.findGreatestNumber(result)
                    let smallest = ocrResultProvider.findSmallestNumber(result)
                    result = ocrResultProvider.findNumbers(result)
                    res.send(smallest)
                })
                .catch(error => {
                    console.error(error)
                    res.status(500).send(error)
                })
        })

    return router
}

module.exports = FormatController
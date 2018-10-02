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
                    //result = ocrResultProvider.findDates(result)
                    res.send(result)
                })
                .catch(error => res.status(500).send(error))
        })

    return router
}

module.exports = FormatController
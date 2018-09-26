const express = require('express')
const computerVisionProvider = require('./../providers/ComputerVisionProvider')

let FormatController = () => {
    let router = express.Router()

    router.route('/bancolombia')
        .post(function (req, res) {
            let url = req.body.url
            let detectOrientation = req.body.detectOrientation

            computerVisionProvider.recognizePrintedText(detectOrientation, url)
                .then(result => res.send(result))
                .catch(error => res.status(500).send(error))
        })

    return router
}

module.exports = FormatController
const ComputerVisionClient = require('azure-cognitiveservices-computervision')
const CognitiveServicesCredentials = require('ms-rest-azure').CognitiveServicesCredentials

let credentials = new CognitiveServicesCredentials("76714dede3c64db9b25fd1262b700061")
let client = new ComputerVisionClient(credentials, 'https://northeurope.api.cognitive.microsoft.com')

class ComputerVisionProvider {

    static recognizePrintedTextInStream(detectOrientation, stream) {
        return client.recognizePrintedTextInStream(detectOrientation, stream)
    }

    static recognizePrintedText(detectOrientation, url) {
        return client.recognizePrintedText(detectOrientation, url)
    }

    printOcrResult(result) {
        let printResult = JSON.stringify(result);
        console.log(printResult)
    }

}

module.exports = ComputerVisionProvider


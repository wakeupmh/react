const VisualRecognitionV3 = require ('watson-developer-cloud/visual-recognition/v3'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    fsPromises = fs.promises;
    
let visualRecognition = new VisualRecognitionV3 ({
    version: '2018-03-19', 
    iam_apikey: 'Pc9INOgn3ZWIRKfyV1xNwHRMvgSzVW8QbwmyMG-6lI19'
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});
app.post('/whichFruit', async (req,res) => {
    let name = new Date().getTime();
    fsPromises.writeFile(`${name}.png`, req.body.img.replace(/^data:image\/\w+;base64,/, ''), {encoding: 'base64'})
    .then(() => {
        visualRecognition.classify ({
            images_file: fs.createReadStream(`${name}.png`), 
            classifier_ids: ['food']
        }, function (err, response) {
            returnClasses(response.images[0].classifiers[0].classes);
        });
    })
    .catch(er => {
        console.log(er);
    });
})
const returnClasses = classes =>{
    console.log(classes)
}


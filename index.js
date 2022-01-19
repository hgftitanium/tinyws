/**  From 
 * https://betterprogramming.pub/build-a-simple-web-server-using-node-js-and-express-27f3d6eb4e86 
 * https://stackoverflow.com/questions/23691194/node-express-file-upload
*/

const path = require('path');
const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

// default options
app.use(fileUpload());
/* 
var listAttributes = function (obj) {
    var keys = [];
    for(var key in obj){
       keys.push(key);
    }
    return keys;
}

*/

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    
    res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/minimal', (req, res) => {
    
    res.sendFile(`${__dirname}/public/minimal.html`);
});

app.post('/fileupload', (req, res) => {
    console.log('req' + req)
//    console.log(listAttributes(req))

    console.log('res' + res)
//    console.log(listAttributes(res))

//    res.sendFile(`${__dirname}/public/fileupload.html`);
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(`${__dirname}/some.ini`, function(err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

app.get('/fileupload', (req, res) => {
    
    res.sendFile(`${__dirname}/public/fileupload.html`);
});

app.listen(3333, () => {
    console.log('Application listening on port 3333!');
});
const express = require('express');
const localtunnel = require('localtunnel');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) => {
    if (req.body.Body.split(" ")[0] == 'Adicionar'){
        console.log('numero adicionado');
    }
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})

new Promise((resolve, reject) => {
    const SUB_DOMAIN = "testingtwilioapi232323"
    const tunnel = localtunnel({port: PORT, subdomain: SUB_DOMAIN});
    resolve(tunnel);
}).then(tunnel => {
    console.log(tunnel.url);
})
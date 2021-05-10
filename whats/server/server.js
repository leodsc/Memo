const express = require('express');
const localtunnel = require('localtunnel');
const bodyParser = require('body-parser');

const mongo = require('../../mongo');
const signin = mongo.signin;
const signup = mongo.signup;
const updateContacts = mongo.updateContacts;
const getContact = mongo.getContact;
const addMedicine = mongo.addMedicine;
const sendMessage = mongo.sendMessage;

const app = express();
const PORT = process.env.PORT || 3000;

var currentUser = 'Raul';

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/manage-access', (req, res) => {
    // if (req.body.Body.split(" ")[0] == 'Adicionar'){
    //     console.log('numero adicionado');
    // }
    
    // contato envia "ADICIONAR {NOME DE USUARIO DA PESSOA NO APP} E O ADICIONA NO BD PARA RECEBER AVISOS"
    
    console.log(req.body.Body);
})

app.post(`/add-number`, (req, res) => {
    const data = JSON.parse(Object.keys(req.body)[0]);
    // data.username = currentUser;
    data.username = "Raul";
    if (data != undefined) {
        updateContacts(data).then(() => {
            res.sendStatus(200);
        }).catch(error => {
            console.log(error.message);
        })
    } else {
        res.sendStatus(500);
    }
})

app.post('/add-medicine', (req, res) => {
    const data = JSON.parse(Object.keys(req.body)[0]);
    data.username = "Raul";
    addMedicine(data).then(
        (result) => {

            if (result == "OK") {
                res.send("OK");
            }
        }
    );
})

app.post('/signup', (req, res) => {
    const data = JSON.parse(Object.keys(req.body)[0]);
    signup(data);
})

app.post('/consumido', (req, res) => {
    const data = JSON.parse(Object.keys(req.body)[0]);
    sendMessage(currentUser, data);
})

app.post('/signin', (req, res) => {
    const data = JSON.parse(Object.keys(req.body)[0]);
    signin(data).then(result => {
        result ? [currentUser = data.username, res.send("OK"), console.log("Current User: " + currentUser)] : res.send("NOT FOUND");
    })
})

app.post('/check-contact', (req, res) => {
    getContact(currentUser).then((result) => {
        res.send(result);
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

new Promise((resolve, reject) => {
    const SUB_DOMAIN = "memoappserver"
    const tunnel = localtunnel({port: PORT, subdomain: SUB_DOMAIN});
    resolve(tunnel);
}).then(tunnel => {
    console.log(tunnel.url);
})
const express = require('express');
const localtunnel = require('localtunnel');
const bodyParser = require('body-parser');
require('dotenv').config({path: '/home/leonardo/UnB/8-semestre/SI/Trabalho/Memo/.env'});
const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSID, authToken);
    
const mongo = require('../../mongo');
const signin = mongo.signin;
const signup = mongo.signup;
const updateContacts = mongo.updateContacts;
const getContact = mongo.getContact;
const addMedicine = mongo.addMedicine;
const getMedicines = mongo.getMedicine;
const removeEverything = mongo.removeEverything;

const app = express();
const PORT = process.env.PORT || 3000;

var currentUser;

app.use(bodyParser.urlencoded({ extended: false }));

// removeEverything();

getMedicines(currentUser).then(
    res => console.log(res)
)

app.post(`/add-number`, (req, res) => {
    const data = JSON.parse(Object.keys(req.body)[0]);
    data.username = currentUser;
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
    data.username = currentUser;
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

app.post('/get-medicines', (req, res) => {
    getMedicines(currentUser).then(
        (medicines) => {
            res.send(medicines);
        }
    )
})

app.post('/consumido', (req, res) => {
    const data = JSON.parse(Object.keys(req.body)[0]);
    getContact(currentUser).then(
        (result) => {
            client.messages.create({
                from: 'whatsapp:+14155238886',
                body: `Olá, ${result[0]}, ${currentUser} consumiu ${data.medicineName}.`,
                to: `whatsapp:+55${result[1]}`
            }).then(
                message => console.log(message.sid)
            )
        }
    );
})

getMedicines("Raul").then(
                (res) => console.log(res)
            )

app.post('/signin', (req, res) => {
    const data = JSON.parse(Object.keys(req.body)[0]);
    signin(data).then(result => {
        if (result) {
            currentUser = data.username;
            console.log("Current User: " + currentUser);

            res.send("OK");
        } else {
            res.send('NOT FOUND');
        }
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
    const SUB_DOMAIN = "memoapp";
    const tunnel = localtunnel({port: PORT, subdomain: SUB_DOMAIN});
    resolve(tunnel);
}).then(tunnel => {
    console.log(tunnel.url);
})
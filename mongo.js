const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const initDB = () => {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url, {useUnifiedTopology: true});
    
    return client;
}

const removeEverything = () => {
    const client = initDB();

    client.connect(() => {
        const db = client.db("Memo");
        const collections = db.collection("Medicines");
        collections.remove({});
    })
}

const addMedicine = (dados) => {
    return new Promise((resolve, reject) => {
        const client = initDB();

        client.connect(() => {
            const db = client.db("Memo");
            const collections = db.collection("Medicines");

            collections.insertOne(dados);
            resolve("OK");
        })
    })
}

const getMedicine = (username) => {
    return new Promise((resolve, reject) => {
        const client = initDB();

        var medicines = [];

        client.connect(() => {
            const db = client.db("Memo");
            const collections = db.collection("Medicines");
            collections.find({}).toArray((err, docs) => {
                docs.forEach((item) => {
                    if (item.username == username) {
                        medicines.push(docs);
                    }
                })
                resolve(medicines);
            })
        })
    })
}

const updateContacts = (dados) => {
    return new Promise((resolve, reject) => {
        const client = initDB();
        client.connect(() => {
            const db = client.db("Memo");
            const collections = db.collection("Whats");
            
            collections.updateOne({username: dados.username}, 
                {$set: {name: dados.name, number: dados.number}}, (err, _) => {
                    if (err != undefined){
                        reject("Error updating");
                    } else {
                        console.log('updated!');
                        resolve();
                    }
                })
        })
    })
}

const getContact = (username) => {
    return new Promise((resolve, reject) => {
        const client = initDB();
    
        client.connect(() => {
            const db = client.db("Memo");
            const collections = db.collection("Whats");
    
            collections.find({}).toArray((err, docs) => {
                docs.forEach(item => {
                    if (item.username == username){
                        resolve([item.name, item.number]);
                    }
                })
            })
        })
    })
}

const signup = (dados) => {
    const client = initDB();
    
    client.connect((err) => {
        assert.equal(null, err);
        console.log('Connected successfully to server');

        const db = client.db("Memo");
            new Promise((resolve, reject) => {
                findAccounts(db, dados, (accountExists) => {
                    resolve(accountExists);
                })
            }).then(result => {
                if (result) {
                    console.log("Conta já existente!");
                    client.close();
                } else {
                    insertAccount(db, dados, () => {
                        client.close();
                    })
                }
            })
    })

}

const signin = (dados) => {
   return new Promise((resolve, reject) => {
       const client = initDB();

       client.connect(() => {
           const db = client.db("Memo");
           const result = logUser(db, dados);
           result.then(result => {
               resolve(result);
           })
       })
   })
}

const logUser = (db, dados) => {
    return new Promise((resolve, reject) => {
        isRegistered(db, dados, (accountExists) => {
            resolve(accountExists);
        })
    })
}

const isRegistered = (db, dados, callback) => {
    const collection = db.collection('Contas');

    collection.find({}).toArray((err, docs) => {
        docs.forEach((item) => {
            if (item.username == dados.username &&
                item.password == dados.password){
                callback(true);
            }
        })
        callback(false);
    });
}

const insertAccount = function(db, dados, callback) {
  const collection = db.collection('Contas');

  collection.insertMany([dados], function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
    console.log('Inserted 1 new account into Contas!');
    callback(result);
  });
};

const findAccounts = (db, dados, callback) => {
    const collection = db.collection('Contas');

    collection.find({}).toArray((err, docs) => {
        docs.forEach((item) => {
            if (item.username == dados.username
                || item.email == dados.email){
                callback(true);
            }
        })
        callback(false);
    })
}

const deleteAccounts = (db, callback) => {
    const collection = db.collection('Contas');

    collection.deleteMany({username: 'eu'});
    callback('deleted');
}

module.exports = {
    signin: signin,
    signup: signup,
    updateContacts: updateContacts,
    getContact: getContact,
    addMedicine: addMedicine,
    getMedicine: getMedicine,
    removeEverything: removeEverything,
};
const mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bankAccounts'
});

db.connect(err => {
    if (err) console.log('Failed Connection To DB :(')
    else {
        console.log('DB Connected')
    }
});


let Query = (q, params) => {
    return new Promise((resolve, reject) => {
        db.query(q, params, (err, result) => {
            if (err) {
                reject(err)
                console.log(err)
            } else {
                resolve(result)
            }
        })
    })
};

module.exports = Query;
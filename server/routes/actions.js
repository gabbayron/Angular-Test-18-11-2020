const router = require('express').Router()
const Query = require('../database');

// get actions for specific account

router.get('/:id', async (req, res) => {
    try {
        let q = `SELECT * FROM account_operations WHERE account_number = ?`
        let result = await Query(q, [req.params.id])
        res.json(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// make action

router.post('/', async (req, res) => {
    try {
        const { account_number, action, amount, payments, intrest } = req.body
        let q1 = `INSERT INTO account_operations(account_number,action,amount,payments,intrest)
                 values(?,?,?,?,?)`
        await Query(q1, [account_number, action, amount, payments, intrest])
        let q2 = `SELECT * FROM account_operations WHERE account_number = ?`
        let result = await Query(q2, [account_number])
        res.send(result)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

module.exports = router
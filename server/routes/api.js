const express = require('express')
const router = express.Router()
const User = require

const mongoose = require('mongoose')
const db = "mongodb+srv://zee:11ZZ@cluster0.omidu.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if (err) {
        console.error("Error!" + err)
    } else {
        console.log('Connected to Mongodb')
    }
})

router.get('/', (req, res) => {
    res.send('From API Route')
})

router.post('/register', (req, res) => {
    let userDate = req.body
})

module.exports = router
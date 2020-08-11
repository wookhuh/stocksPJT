const express = require('express')
const router = express.Router()

const themedStocksData = require('../data/ThemedStocksData.json')

router.get('/', function(req, res, next){
    res.json({ data: themedStocksData })
})

module.exports = router
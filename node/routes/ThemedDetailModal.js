const express = require('express')
const router = express.Router()



router.get('/:id', function (req, res, next) {
    console.log("req:**************************************")
    console.log(req.params.id)

    const themedStocksData = require('../data/' + req.params.id + '.json')


    res.json({ data: themedStocksData })
})

module.exports = router
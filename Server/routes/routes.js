
const express = require('express')
const router = express.Router()
const PI = require('../model/PlayerInformation')
const PC = require('../controller/controllers')

//localhost:3001/
router.get('/view', PC.getAllEntries)
router.post('/add', PC.addEntry)
router.get('/view/:id', PC.getById)
router.put('/update/:id', PC.updateEntry)
router.delete('/delete/:id', PC.deleteEntry)

module.exports = router
const express = require('express');
const {
    _createTable,
    _deleteItem,
    _insertItem,
    _getTotal,
    _showAll
} = require('../controllers/budget.js')

const router = express.Router();

router.get('/', _showAll)
router.post("/create/", _createTable)

router.delete("/", _deleteItem)

router.get('/', _getTotal)

router.put('/', _insertItem)
router.delete('/:id', _deleteItem)



module.exports = router
const express = require('express');
const {
    _deleteItem,
    _insertItem,
    _getTotal,
    _showAll
} = require('../controllers/budget.js')

const router = express.Router();

router.get('/', _showAll)
// router.post("/create/", _createTable)
router.get('/:project', _getTotal)

router.post('/', _insertItem)
// router.delete('/:id', _deleteItem)



module.exports = router
const { emitWarning } = require("process");
const {
  insertItem,
  createTable,
  deleteItem,
  getTotal,
  showAll,
  deleteTable
} = require("../modules/budget.js");

const _showAll = (req, res) => {
    showAll()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
}

const _insertItem = (req, res) => {
  insertItem(req.body.item)
  .then((data) => {
    res.json(data)
  })
  .catch(err => {
    console.log(err);
  })
};

const _createTable = (req, res) => {
    createTable(req.body.table)
    .then((data) => {
        res.json(data);
    })
    .catch(err => {
        console.log(err);
    })
};

const _deleteTable = (req,res) => {
  deleteTable(req.body.table)
  .then((data) => {
    res.json(data)
  })
  .catch(err => {
    console.log(err);
  })
}

const _deleteItem = (req, res) => {
  deleteItem(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const _getTotal = (req, res) => {
    getTotal(req.body)

};

module.exports = {
    _createTable,
    _deleteItem,
    _getTotal,
    _insertItem,
    _showAll,
    _deleteTable
}


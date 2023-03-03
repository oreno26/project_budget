const {db} = require("../config/db.js");

const showAll  = (table) => {
    return db('car_restore')
    .select('id','name','price')
    .orderBy('name');
  }
const insertItem = (table, item) => {
  return db(`${table}`).insert(item).returning("*");
};

const createTable = (table) => {//???????
  console.log(table[1] + "module");
  return db.schema.createTableLike(`${table}`, 'car_restore');
};

const deleteTable = (table) => {
  return db.schema.dropTable(`${table}`)
}

const deleteItem = (table, id) => {
  return db(`${table}`).del().where({ id: id });
};

const getTotal = (table) => {
  return db(`${table}`).sum('price');
};




module.exports = { insertItem, createTable, deleteItem, getTotal, showAll, deleteTable };

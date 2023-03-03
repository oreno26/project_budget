const {db} = require("../config/db.js");

const showAll  = () => {
    return db('budgetapp')
    .select('id','project','name','price')
    .orderBy('name');
  }
const insertItem = (item) => {
  return db('budgetapp').insert(item).returning("*");
};

// const createTable = (table) => {//???????
//   console.log(table[1] + "module");
//   return db.schema.createTableLike(`${table}`, 'car_restore');
// };

// const deleteTable = (table) => {
//   return db.schema.dropTable(`${table}`)
// }

const deleteItem = (id) => {
  return db(`budgetapp`).del().where({ id: id });
};

const getTotal = () => {
  return db(`budgetapp`).sum('price');
};




module.exports = { insertItem, deleteItem, getTotal, showAll };

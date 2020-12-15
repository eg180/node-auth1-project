const db = require("../../database/connection.js")

module.exports = {
    // add,
    find,
    // findBy,
    // findById,
};

function find() {
  return db("users").select("id", "username").orderBy("id");
}


const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../db/database");


class Users extends Model { }
Users.init({
    username: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    sequelize,
    modelName: "users"
});

module.exports = Users;

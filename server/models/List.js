const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../db/database");


class List extends Model { }
List.init({
    name: {
        type: Sequelize.STRING
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    userId: {
        type: Sequelize.INTEGER
    }
}, {
    sequelize,
    modelName: "list"
});

module.exports = List;

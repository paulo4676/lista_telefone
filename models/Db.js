// * coneçao com o banco de dados *

const Sequelize = require("sequelize")

const sequelize = new Sequelize('mydb', 'root', '', {

    host: "localhost",
    dialect: "mysql"
})

// * exportanto sequelize *
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
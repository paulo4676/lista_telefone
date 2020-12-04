// * atribuindo sequelize a post *
const db = require("./Db")

// * cria um espelho de tabela dentro do codigo *
const Post = db
    .sequelize
    .define('lista', {

        Nome: {
            type: db.Sequelize.TEXT
        },
        Email: {
            type: db.Sequelize.TEXT
        },
        Telefone: {
            type: db.Sequelize.TEXT
        },
        Residencial: {
            type: db.Sequelize.TEXT
        },
        Comercial: {
            type: db.Sequelize.TEXT
        }
    })

// * cria uma tabela *// ps. deixe comentado ou toda vez que a pagina entrar vai
// criar tabelas Post.sync({force:true})

// * exporta Post como tabela *
module.exports = Post
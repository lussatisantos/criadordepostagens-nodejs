   //Conexao com o banco de dados mysqs
const Sequelize = require('sequelize')

const sequelize = new Sequelize('postapp', 'root', 'angola2023', {
    host: 'localhost',
    dialect: 'mysql'
     })

     module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
     }
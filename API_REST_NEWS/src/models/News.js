const { Model, Sequelize } = require('sequelize');

class Noticias extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: Sequelize.STRING,
        len: {
          args: [3, 100],
          msg: ['O título deve conter pelo menos 3 caracteres ou no máximo 100 caracteres'],
        },
      },
      author: {
        type: Sequelize.STRING,
        len: {
          args: [2, 50],
          msg: ['O nome do autor da notícia deve conter entre 3 a 50 caracteres'],
        },
      },
      category: {
        type: Sequelize.STRING,
        len: {
          args: [2, 18],
          msg: ['Categoria inválida'],
        },
      },
      news: {
        type: Sequelize.STRING,
      },
    }, { sequelize });
    return this;
  }
}
module.exports = Noticias;

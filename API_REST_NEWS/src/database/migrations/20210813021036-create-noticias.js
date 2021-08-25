module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('noticia', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    author: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    news: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('noticia'),
};

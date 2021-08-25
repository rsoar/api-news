const Sequelize = require('sequelize');
const bdConfig = require('../config/database');
const UserModel = require('../models/User');
const NewsModel = require('../models/News');

const models = [UserModel, NewsModel];
const connection = new Sequelize(bdConfig);

models.forEach((model) => model.init(connection));

module.exports = connection;

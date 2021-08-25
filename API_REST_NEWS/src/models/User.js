const { Model, Sequelize } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {
  static init(sequelize) {
    super.init({
      username: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: true,
        len: {
          args: [3, 21],
          msg: 'O nome de usuário deve conter entre 3 a 21 caracteres',
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: true,
        validate: {
          isEmail: {
            msg: 'E-mail inválido',
          },
        },
      },
      password: {
        type: Sequelize.VIRTUAL,
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve conter pelo menos 6 a 50 caracteres',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

module.exports = User;

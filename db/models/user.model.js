const { Model, DataTypes, Sequelize  } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
 createAt: {
   type: DataTypes.DATE,
   allowNull: false,
   field: 'create_at',
   defaultValue: Sequelize.NOW
 },
};

class User extends Model {
  static associate(models) {
    // define association here
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { UserSchema, User, USER_TABLE };

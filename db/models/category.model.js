const { Model, Datatypes, Sequelize } = require('sequelize');
// const { all } = require('../../routes/categories.router');
// const sequelize = require('../../libs/sequelize');
// const { CUSTOMER_TABLE } = require('./customer.model');

const CAREGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Datatypes.INTEGER,
  },
  name: {
    type: Datatypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: Datatypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: Datatypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class Category extends Model {

  static associate(models) {
    this.hasMany(models.Product, {
      foreignKey: 'categoryId',
      as: 'products',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CAREGORY_TABLE,
      modelName: 'Category',
      timestamps: false,
    };
  }
}


module.exports = { Category, CategorySchema, CAREGORY_TABLE}

'use strict';
const { Model } = require('sequelize');
const { User } = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Donations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Donations.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Donations.init(
    {
      order_id: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id',
        },
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      donation_amount: DataTypes.INTEGER,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Donations',
    }
  );
  return Donations;
};

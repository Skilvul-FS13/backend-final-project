'use strict';
const { Model } = require('sequelize');
const { Petitions } = require('./petitions');
const { User } = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Signature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Signature.belongsTo(models.Petitions, { foreignKey: 'petitionId' });
      Signature.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Signature.init(
    {
      petitionId: {
        type: DataTypes.INTEGER,
        references: {
          model: Petitions,
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Signature',
    }
  );
  return Signature;
};

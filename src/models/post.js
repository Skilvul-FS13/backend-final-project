'use strict';
const { Model } = require('sequelize');
const { User } = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Post.init(
    {
      post: DataTypes.STRING,
      image: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );

  return Post;
};

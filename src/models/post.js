'use strict';
const { Model } = require('sequelize');
const { User } = require('./user');
const { Likes } = require('./likes');
const { Comments } = require('./comments');
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
      Post.hasMany(models.Likes, { foreignKey: 'postId' });
      Post.hasMany(models.Comments, { foreignKey: 'postId' });
    }
  }
  Post.init(
    {
      post: DataTypes.STRING,
      image: DataTypes.STRING,
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
      modelName: 'Post',
    }
  );

  return Post;
};

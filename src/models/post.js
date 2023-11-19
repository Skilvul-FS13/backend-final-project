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
      Post.belongsTo(models.User);
      Post.hasMany(models.Likes);
      Post.hasMany(models.Comments);
    }
  }
  Post.init(
    {
      post: DataTypes.STRING,
      image: DataTypes.STRING,
      likeId: {
        type: DataTypes.INTEGER,
        references: {
          model: Likes,
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
      commentId: {
        type: DataTypes.INTEGER,
        references: {
          model: Comments,
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

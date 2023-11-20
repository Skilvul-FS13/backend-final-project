const { Likes, User, Post, Comments } = require('../models');

const getAllPost = async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      include: [
        {
          model: Likes,
          require: true,
        },
        {
          model: Comments,
          require: true,
        },
      ],
    });
    res.status(200).json({
      message: 'succeed',
      data: allPosts,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const getPost = await Post.findOne({
      where: { id: id },
      include: [
        {
          model: Likes,
          require: true,
        },
        {
          model: Comments,
          require: true,
        },
      ],
    });

    if (!getPost) {
      res.status(404).json({
        message: 'Post not found',
      });
    }

    res.status(200).json({
      message: 'succeed',
      data: getPost,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addPost = async (req, res) => {
  try {
    const data = req.body;
    const user = await User.findOne({ where: { id: data.userId } });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const newPost = {
      post: data.post,
      image: data.image,
      userId: data.userId,
    };
    const addNewPost = await Post.create(newPost);

    res.status(201).json({
      message: 'Post has been added succesfully',
      data: addNewPost,
    });
  } catch (error) {
    res.send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const findPost = await Post.findOne({ where: { id: id } });
    const deletePostById = await findPost.destroy({ where: { id: id } });

    if (!deletePostById) {
      return res.status(404).json({
        message: 'Post with ' + id + ' not found',
      });
    }

    res.status(200).json({
      message: 'Post has been succesfully deleted',
      data: deletePostById,
    });
  } catch (error) {
    res.send('ID not found');
  }
};

const editPost = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const post = await Post.findOne({ where: { id: id } });

    const editedPost = {
      post: data.post,
      image: data.image,
      likeId: data.likeId,
      userId: data.userId,
      commentId: data.commentId,
    };
    const edited = await post.update(editedPost, { where: { id: id } });

    res.status(201).json({
      message: 'Post has succesfully made a change',
      data: edited,
    });
  } catch (error) {
    res.status(404).json({
      message: 'Internal Error',
    });
  }
};

module.exports = { getAllPost, getPostById, addPost, deletePost, editPost };

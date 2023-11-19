const { User, Post, Comments } = require('../models');

const getAllComments = async (req, res) => {
  try {
    const allComments = await Comments.findAll();
    res.status(200).json({
      message: 'succeed',
      data: allComments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCommentById = async (req, res) => {
  try {
    const id = req.params.id;
    const getComment = await Comments.findOne({ where: { id: id } });

    if (!getComment) {
      res.status(404).json({
        message: 'comment not found',
      });
    }

    res.status(200).json({
      message: 'succeed',
      data: getComment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addComment = async (req, res) => {
  try {
    const data = req.body;
    const post = await Post.findOne({ where: { id: data.postId } });

    if (!post) {
      return res.status(404).json({
        message: 'Post not found',
      });
    }

    const newComment = {
      postId: data.postId,
      userId: data.userId,
      comment: data.comment,
    };
    const addNewComment = await Comments.create(newComment);

    res.status(201).json({
      message: 'Comment has been added succesfully',
      data: addNewComment,
    });
  } catch (error) {
    res.send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const findTodo = await Todos.findOne({ where: { id: id } });
    const deletePostById = await findTodo.destroy({ where: { id: id } });

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

module.exports = { getAllComments, getCommentById, addComment, deletePost, editPost };

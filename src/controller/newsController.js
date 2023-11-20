const { News, Categories, User } = require('../models');

const getAllNews = async (req, res) => {
  try {
    const allNews = await News.findAll({
      include: [
        {
          model: User,
          require: true,
        },
        {
          model: Categories,
          require: true,
        },
      ],
    });
    res.status(200).json({
      message: 'succeed',
      data: allNews,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getNewsById = async (req, res) => {
  try {
    const id = req.params.id;
    const getNews = await News.findOne({
      where: { id: id },
      include: [
        {
          model: User,
          require: true,
        },
        {
          model: Categories,
          require: true,
        },
      ],
    });

    if (!getNews) {
      res.status(404).json({
        message: 'News not found',
      });
    }

    res.status(200).json({
      message: 'succeed',
      data: getNews,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addNews = async (req, res) => {
  try {
    const data = req.body;
    const user = await User.findOne({ where: { id: data.userId } });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const newNews = {
      title: data.title,
      description: data.description,
      image: data.image,
      userId: data.userId,
      categoryId: data.categoryId,
    };
    const addNewNews = await News.create(newNews);

    res.status(201).json({
      message: 'News has been added succesfully',
      data: addNewNews,
    });
  } catch (error) {
    res.send(error.message);
  }
};

const deleteNews = async (req, res) => {
  try {
    const id = req.params.id;
    const findNews = await News.findOne({ where: { id: id } });
    const deleteNewsById = await findNews.destroy({ where: { id: id } });

    if (!deleteNewsById) {
      return res.status(404).json({
        message: 'News with ' + id + ' not found',
      });
    }

    res.status(200).json({
      message: 'News has been succesfully deleted',
      data: deleteNewsById,
    });
  } catch (error) {
    res.send('ID not found');
  }
};

const editNews = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const news = await News.findOne({ where: { id: id } });

    const editedNews = {
      title: data.title,
      description: data.description,
      image: data.image,
      userId: data.userId,
      categoryId: data.categoryId,
    };
    const edited = await news.update(editedNews, { where: { id: id } });

    res.status(201).json({
      message: 'News has succesfully made a change',
      data: edited,
    });
  } catch (error) {
    res.status(404).json({
      message: 'Internal Error',
    });
  }
};

module.exports = { getAllNews, getNewsById, addNews, deleteNews, editNews };

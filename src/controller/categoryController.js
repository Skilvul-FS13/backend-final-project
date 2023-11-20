const { Categories } = require('../models');

const getAllCategories = async (req, res) => {
  try {
    const allCategories = await Categories.findAll();
    res.status(200).json({
      message: 'succeed',
      data: allCategories,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const getCategory = await Categories.findOne({ where: { id: id } });

    if (!getCategory) {
      res.status(404).json({
        message: 'Category not found',
      });
    }

    res.status(200).json({
      message: 'succeed',
      data: getCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getAllCategories, getCategoryById };

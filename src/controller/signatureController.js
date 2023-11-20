const { Signatures, Petitions } = require('../models');

const getAllSignature = async (req, res) => {
  try {
    const allSignatures = await Signatures.findAll();
    res.status(200).json({
      message: 'succeed',
      data: allSignatures,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addSignature = async (req, res) => {
  try {
    const data = req.body;
    const petition = await Petitions.findOne({ where: { id: data.petitionId } });

    if (!petition) {
      return res.status(404).json({
        message: 'Petition not found',
      });
    }

    const newSignature = {
      petitionId: data.petitionId,
      userId: data.userId,
    };
    const addNewSignature = await Signatures.create(newSignature);

    res.status(201).json({
      message: 'Signature has been added succesfully',
      data: addNewSignature,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteLike = async (req, res) => {
  try {
    const id = req.params.id;
    const findLike = await Likes.findOne({ where: { id: id } });
    const deleteLikeById = await findLike.destroy({ where: { id: id } });

    if (!findLike) {
      return res.status(404).json({
        message: 'Like with ' + id + ' not found',
      });
    }

    res.status(200).json({
      message: 'Like has been succesfully deleted',
      data: deleteLikeById,
    });
  } catch (error) {
    res.send('ID not found');
  }
};

const deleteSignature = async (req, res) => {
  try {
    const id = req.params.id;
    const findSignature = await Signatures.findOne({ where: { id: id } });
    const deleteSignatureById = await findSignature.destroy({ where: { id: id } });

    if (!findSignature) {
      return res.status(404).json({
        message: 'Signature with ' + id + ' not found',
      });
    }

    res.status(200).json({
      message: 'Signature has been succesfully deleted',
      data: deleteSignatureById,
    });
  } catch (error) {
    res.send('ID not found');
  }
};

module.exports = { getAllSignature, addSignature, deleteSignature };

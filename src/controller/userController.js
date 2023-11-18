const { User, Post } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const getAllUser = async (req, res) => {
  try {
    const allUsers = await User.findAll({ include: Post });
    res.status(200).json({
      message: 'succeed',
      data: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const getUser = await User.findOne({ where: { id: id } });

  if (!getUser) {
    res.status(404).json({
      message: 'user not found',
    });
  }

  res.status(200).json({
    message: 'succeed',
    data: getUser,
  });
};

const login = async (req, res) => {
  const data = req.body;
  const getUser = await User.findOne({ where: { email: data.email } });
  if (!getUser) {
    res.status(404).json({
      message: 'user not found',
    });
  }

  bcrypt
    .compare(data.password, getUser.password)
    .then((result) => {
      if (result) {
        const token = jwt.sign({ id: data.id, iat: Math.floor(Date.now() / 3000 - 30) }, process.env.JWT_SECRET);
        res.status(200).json({
          status: true,
          message: 'Login Succesful',
          token,
        });
      } else {
        res.status(404).json({
          status: failed,
          message: 'Wrong Password',
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        status: false,
        message: 'Internal server error',
      });
    });
};

const register = async (req, res) => {
  try {
    const data = req.body;
    console.log('🚀 ~ file: userController.js:66 ~ register ~ data:', data);
    const userCheck = await User.findAll({ where: { email: data.email } });
    console.log('🚀 ~ file: userController.js:23 ~ register ~ userCheck:', userCheck);

    if (userCheck.length > 0) {
      res.status(406).json({
        message: 'email has already been registered',
      });
      return;
    }

    let saltRounds = 10;

    bcrypt.hash(data.password, saltRounds, async (err, hash) => {
      const newUser = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hash,
        gender: data.gender,
      };
      const addUser = await User.create(newUser);

      res.status(201).json({
        message: 'account succesfully registered',
        data: addUser,
      });
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { getAllUser, getUserById, register, login };

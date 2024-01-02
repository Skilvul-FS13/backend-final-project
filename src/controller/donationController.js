require('dotenv/config');

const { User, Donations } = require('../models');
const midtransClient = require('midtrans-client');

const donationGetaway = async (req, res) => {
  try {
    const data = req.body;

    let snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: process.env.MIDTRANS_SERVER_KEY,
      clientKey: process.env.MIDTRANS_CLIENT_KEY,
    });

    let parameter = {
      transaction_details: {
        order_id: 'order-id-node-' + Math.round(new Date().getTime() / 1000),
        gross_amount: data.donation_amount,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
      },
    };

    snap.createTransaction(parameter).then((transaction) => {
      let transactionToken = transaction.token;
      res.status(201).json({
        data: transactionToken,
      });
      console.log('Token: ', transactionToken);
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { donationGetaway };

require('dotenv/config');

const { User, Donations } = require('../models');
const midtransClient = require('midtrans-client');

const donationGetaway = async (req, res) => {
  const data = req.body;
  const userId = req.params.id;

  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
  });

  let parameter = {
    transaction_detail: {
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
};

module.exports = { donationGetaway };

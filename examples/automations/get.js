// node examples/automations/get.js

"use strict";

import dotenv from 'dotenv';
dotenv.config();

import MailerLite from '../../dist/MailerLite.js';

const mailerlite = new MailerLite({
  api_key: process.env.API_KEY,
});

const params = {
  filter: {
    status: true,
    name: "test",
    // group: "GROUP_ID"
  },
  limit: 10,
  page: 1
};

mailerlite.automations.get(params)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) console.log(error.response.data);
    console.log(error.message);
  });

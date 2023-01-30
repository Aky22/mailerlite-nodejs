// node examples/stats/getFormsByType.js popup name 5 1

"use strict";

import dotenv from 'dotenv';
dotenv.config();

import MailerLite from '../../dist/esm/index.mjs';

const mailerlite = new MailerLite({
  api_key: process.env.API_KEY,
});

let formType = null;
let params = {};

if (process.argv.slice(2).length) formType = String(process.argv[2]);
if (process.argv.slice(3).length) params.sort = String(process.argv[3]);
if (process.argv.slice(4).length) params.limit = parseInt(process.argv[4]);
if (process.argv.slice(5).length) params.page = parseInt(process.argv[5]);

mailerlite.stats.getFormsByType(formType, params)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) console.log(error.response.data);
    console.log(error.message);
  });

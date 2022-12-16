const express = require('express');
const api = require('./routes/index');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

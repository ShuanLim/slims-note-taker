const express = require("express");
const path = require("path");
const fs = require("fs");
const notes = JSON.parse(fs.readFileSync('db/db.json', 'utf8')); 

let app = express();
let PORT = process.env.PORT || 5000;


var createId = () => {
    return 'id-' + Math.random().toString(36).substring(2, 16);
  };

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public/'));
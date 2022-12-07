const express = require('express');
const db=require('./common/connect');
// const port='3000';
const host='localhost';
const app = express();
const route= require('./routers/index.router');
const bodyParser = require('body-parser')
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//fix CORS disabled
app.use(cors());
// parse application/json
app.use(bodyParser.json())

route(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){});

const express = require("express");
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 8080;


app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});



module.exports = {
  app,
  express,
};
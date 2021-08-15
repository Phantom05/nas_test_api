var express = require('express');
const axios = require("axios");
var router = express.Router();

const dummyData = {
  index: {
    id      : 1,
    title   : "helloworld",
    username: 'Test1'
  },
  hello:{
    id:2,
    title:"helloapi",
    username:"Test2"
  }
}
/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index')
});



module.exports = router;

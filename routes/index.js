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
  res.json(dummyData.index)
});

router.get('/hello', function (req, res, next) {
  res.json(dummyData.hello)
});

router.get('/todos', async function (req, res, next) {


  const apiAddress = `https://jsonplaceholder.typicode.com/todos`;

  const {data} = await axios({
    method: "get",
    url   : apiAddress
  });
  console.log(data)
  data.length = 30

  const responseData ={
    data
  }

  res.json(responseData)
});



module.exports = router;

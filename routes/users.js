var express = require('express');
var router = express.Router();


const dummyData = {
  users: {
    list:[
      {
        id:1,
        username:"수민",
        age:30
      },
      {
        id:2,
        username:"준영",
        age:30
      },
      {
        id:3,
        username:"태연",
        age:30
      }
    ]
  }
}
/* GET users listing. */
router.get('/', async function (req, res, next) {


  res.json(dummyData.users)
});

module.exports = router;

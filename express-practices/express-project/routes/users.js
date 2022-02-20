var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/bandung", function(req, res, next){
  res.status(200);
  res.json({
    data: {},
    message: "Hello-hello bandung",
    status: res.statusCode,
  });
});

module.exports = router;

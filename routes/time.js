var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    //var collection = db.get('videos');
    var datetime = new Date();
    //console.log(datetime);
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    //res.json(datetime)
    res.send({date,hour,min,sec,year,month,day});
});

module.exports = router;
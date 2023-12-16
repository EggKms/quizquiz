var express = require('express')
var router = express.Router()
var path = require('path')

let player = ["mun","minseok","egg"];
//global.player = player;

router.get('/', function (req, res) {
    player[player.length] = "kaka";
    //console.log(path.join(__dirname, "../public/main.html"));
    //res.sendFile(path.join(__dirname, "../public/main.html"));
    res.send(player + "\r\n" + global.player);
})
module.exports = router;
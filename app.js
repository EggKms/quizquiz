// https://waspro.tistory.com/620

var express = require('express')
var app = express()
var router = require('./router/index')
var helloWorldController = require('./router/sample/HelloWorld')

app.listen(4500, function () {
    console.log("start!! express server on port 3000")
});

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use('/',router)
app.use('/helloworld',helloWorldController)
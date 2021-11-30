// встановлюємо express
var express = require('express');
var app = express();
const main= require('./main');
// встановлюємо директорію для віддачі статичного контенту (каталог проекту)
app.use(express.static(__dirname));
// налаштовуємо маршрутизацію
app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
})
// запускаємо server
app.listen(3000);
console.log('run server!');



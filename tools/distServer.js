import express from 'express';
var app = express();

var port = (process.env.PORT || 3000);
app.use(express.static('dist'));

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

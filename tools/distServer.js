// This file configures a web server for testing the production build
// on your local machine.

// import browserSync from 'browser-sync';
// import historyApiFallback from 'connect-history-api-fallback';


import express from 'express';
var app = express();

var port = (process.env.PORT || 3000);
app.use(express.static('dist'));

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});

// // Run Browsersync
// browserSync({
//   port: port,
//   ui: {
//     port: 3001
//   },
//   server: {
//     baseDir: 'dist'
//   },

//   files: [
//     'src/*.html'
//   ],

//   middleware: [historyApiFallback()]
// });

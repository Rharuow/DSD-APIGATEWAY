const httpProxy = require('express-http-proxy');
const express = require('express');
const app = express();
var logger = require('morgan');
 
app.use(logger('dev'));
 
function selectProxyHost(req) {
  if (req.path.startsWith('/movies'))
    return 'http://localhost:3000/';
  else if (req.path.startsWith('/cinemas'))
    return 'http://localhost:3001/';
}
 
app.use('/movies', httpProxy('https://api.themoviedb.org/3/movie/550?api_key=3b283881af9467943659c938473f833b'))

// app.use((req, res, next) => {
//   console.log(selectProxyHost(req))
//   httpProxy(selectProxyHost(req))(req, res, next);
// });

app.listen(10000, () => {
    console.log('API Gateway running!');
});
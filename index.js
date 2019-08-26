const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('kjempe gla i deg Maria Hilsen Pappa');
});
 
app.listen(8080, () => {
  console.log('Listening on port 8080');
});

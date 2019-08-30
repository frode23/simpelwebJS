const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('3008frode er kjempe gla gla i deg Maria Hilsen Pappa din frode');
});
 
app.listen(8080, () => {
  console.log('Listening on port 8080');
});

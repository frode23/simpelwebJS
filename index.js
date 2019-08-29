const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('edit on master watch u2b 29.08 19.19 pappa frode er kjempe gla gla i deg Maria Hilsen Pappa din frode');
});
 
app.listen(8080, () => {
  console.log('Listening on port 8080');
});

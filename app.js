const express = require('express')
const app = express();

const port = 8092;


app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, host);
console.log(`Running on ${port}`);

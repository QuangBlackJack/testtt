const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a+b;

  res.send('yoyo ching chong balabingbong SIUUUUUUUU! <br> <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
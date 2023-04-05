const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var i=0;
  var j=0;
  for (i=0;i<5;i++)
    for(j=0;j<i;j++)
      res.write('*');
    res.write('\n');
  res.end();
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)

const express = require('express');
const bodyParser= require('body-parser');
const app = express() ;
app.use(express.static("client/dist"));

app.listen(5500,()=>{
 console.log('server running on port 5500')
})
const express = require('express')


const app = express();

app.get('/', (req, res)=>{
    res.send('this is awesome in server')
})

app.listen(5000, () =>{
    console.log('Port is running here on 5000');
})
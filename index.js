const express = require('express')

const cors = require('cors')

const chefData = require('./chefdata.json')

const app = express();

app.use(cors());

app.get('/', (req, res)=>{
    res.send('this is awesome in server')
})

app.listen(5000, () =>{
    console.log('Port is running here on 5000');
})
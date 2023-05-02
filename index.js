const express = require('express')
const cors = require('cors')

const chefData = require('./chefdata.json')
const favDishes = require('./favdishes.json')

const app = express();

app.use(cors());

app.get('/', (req, res)=>{
    res.send(chefData)
})



app.listen(5000, () =>{
    console.log('Port is running here on 5000');
})
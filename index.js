const express = require('express')
const cors = require('cors')

const chefData = require('./chefdata.json')
const favDishes = require('./favdishes.json')
const cheSpecialDishes = require('./chefSpecialRecipes.json')

const app = express();

app.use(cors());

app.get('/', (req, res)=>{
    res.send(chefData)
})


app.get('/chefDishes/:id', (req, res) =>{
    const id = req.params.id;
    // console.log(id);
    const filterRecipes = cheSpecialDishes.filter(d =>d.chef_id == id )
    res.send(filterRecipes)
    // res.send(cheSpecialDishes)
    
})

app.get('/favdishes', (req, res) =>{
    res.send(favDishes);
})

app.get('/:id', (req, res)=>{
    const id = req.params.id;
    // console.log(id);
    const selectedChef = chefData.find(c => c._id == id);
    res.send(selectedChef)
}) 
app.listen(5000, () =>{
    console.log('Port is running here on 5000');
})
import express from "express";
import morgan from "morgan";

const app = express()

app.get("/greetings/:username",(req,res)=>{
    const { username } = req.params
    console.log(username)
    res.send(`<h1> hello ${username}`)
})

app.get("/roll/:number",(req,res)=>{
    const {number} = req.params
    if (isNaN(parseInt(number))){
        res.send(`<h1>please give me a number<h1>`)
    }
    else if (typeof parseInt(number) === "number"){
       const roll = Math.floor(Math.random() * parseInt(number))
        res.send(`<h1>you rolled a ${roll}`)
    }
})
app.get("/collectibles/:collectible",(req,res)=>{
    const {collectible} = req.params
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
      if (parseInt(collectible)>(collectibles.length-1)){
          res.send(`<h1>that item is not yet in stock<h1>`)
        }
       else {res.send(`<h1>so you want ${collectibles[parseInt(collectible)].name} it costs $${collectibles[parseInt(collectible)].price} </h1>`)}
})


app.get("/shoes",(req,res)=>{
    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];
    let count = 0
    let orderedShoes = []
  shoes.forEach((element,index)=>{
    if (req.query.minPrice<element.price){
        orderedShoes.push(element)
    }
    if (req.query.maxPrice>element.price){
        orderedShoes.push(element)
    }
    if (req.query.type === element.type)
        orderedShoes.push(element)
  })
  console.log(orderedShoes)
  res.send(orderedShoes)
})



app.listen(3000, () => {
    console.clear()
    console.log("Express app is running on port 3000...");
  });


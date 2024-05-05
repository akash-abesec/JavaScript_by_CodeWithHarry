
const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//For serving static foles

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');//setthe template engine as pug
app.set('views', path.join(__dirname, 'views'));//Set the views directory


//END POINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet " 
    const params = {'title':'Pubg is the best game', '"content"': con}
    res.status(200).render('index.pug',params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}"`);
});









//our pug demo endpoint
// app.get("/demo",(req, res)=>{
//     res.status(200).render('demo', { title: 'Hey Akash ', message: 'Hello there and thanks for telling me how to use pug!' })
// });

// app.get("/",(req, res)=>{
//     res.status(200).send("This is home page of my first express app with Harry");
// });

// app.get("/about",(req, res)=>{
//     res.send("This is about page of my first express app with Harry");
// });

// app.post("/about",(req, res)=>{
//     res.send("This is postrequest page of my first express app with Harry");
// });

// app.get("/This",(req, res)=>{
//     res.status(400).send("This port is not found");
// });
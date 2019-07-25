const path = require('path');
const express = require('express');
const hbs = require('hbs');


const app = express();

const port = process.env.PORT || 3000;

// creating path for the template and public files
const publicPath = path.join(__dirname, './public');
const handlebarsPath = path.join(__dirname, './views/partials');
const viewPath = path.join(__dirname, './view')

//registering the public folder
app.use(express.static(publicPath));

//registering hbs partials and setting view engine and view folder
hbs.registerPartials(handlebarsPath);
app.set('view engine', 'hbs');
app.set('views', viewPath);

// application routs
app.get("/", (req, res) => {
    return res.send("Home of Alpha project, by Haftamu and YkeAlo. Chill man, The order is Alphabetical... lolz")
});


// registering error handling middleware
app.use((err, req, res, next) => {
    res.status(500).send("Somthing just broke, Please reload the page.");
})

//registering 404 page error
app.use((req, res, next) => {
    res.status(404).send("Sorry we can not find the path");
})

app.listen(port, ()=> {
    console.log("The server listens to port " + port);
});
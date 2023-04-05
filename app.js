const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const adminRouter= require("./Routes/admin");
const shopRouter = require("./Routes/shop");
app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin', adminRouter);
app.use( '/shop', shopRouter);

app.use((req, res, next)=>{
    res.status(404).send('<p>Page not found<p>');
})


app.listen(4000, (req, res)=>{
    console.log("server is connected ");
})
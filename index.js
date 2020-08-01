const express= require('express');
const app=express();
const port=8900;
const expresslayouts=require('express-ejs-layouts');

app.use(express.static('./assets'));
app.use(expresslayouts);
app.use('/',require('./routes'));

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error:${err}`);
    }
    console.log('Server is running');
})

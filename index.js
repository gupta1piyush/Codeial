const express= require('express');
const app=express();
const port=8900;

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error:${err}`);
    }
    console.log('Server is running');
})

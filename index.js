const express= require('express');
const app=express();
const port=8900;



app.listen(port,function(err){
    if(err){
        console.log(`Error:${err}`);
    }
    console.log('Server is running');
})

const Post =require('../models/post');
const { post } = require('../routes');
module.exports.home=function(req,res){
    Post.find({},function(err,posts){
        return res.render('home',{
            title:"Codeial || Home",
            posts:posts
        });
    });
    
}
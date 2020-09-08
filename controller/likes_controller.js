const Like=require('../models/like');
const Post=require('../models/post');
const Comment=require('../models/comment');

module.exports.toggleLike=async function(req,res){
    try{
        let likeable;
        let deleted=false;

        if(req.query.type=='Post'){
            likeable= await Post.findById(req.query.id).populate('likes');
        }else{
            likeable=await (await Comment.findById(req.query.id)).populate('likes');
        }

        //check if a like already existed
        let existingLike=await Like.findOne({
            likeable:req.query.id,
            onModel:req.query.type,
            user:req.query._id
        })
        //check if the like already exists
        if(existingLike){
            likeable.likes.pull(existingLike._id);
            likeable.save();

            existingLike.remove();
            deleted=true;
        }else{
            //creating a new like 
            let newLike=await Like.create({
                user:req.query._id,
                likeable:req.query.id,
                onModel:req.query.type
            });
            likeable.likes.push(newLike._id);
            likeable.save();
        }

        return res.json(200,{
            message:"Request Succesfull",
            data:{
                deleted:deleted
            }
        })
    }catch(err){

        console.log(err);
        return res.json(500,{
            message:'Internal Server Error'
        })
    }
}
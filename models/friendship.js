const mongoose=require('mongoose');

const friendshipSchema =new mongoose.Schema({
    //from user who sent the request
    from_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //to the user to whom request is sent 
    to_user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{
    timestamps:true
});

const Friendship=mongoose.model('Friendship',friendshipSchema);
module.exports=Friendship;
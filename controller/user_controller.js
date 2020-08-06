const User=require('../models/user');
module.exports.profile=function(req,res){
    User.findById(req.params.id,function(err,user){
        res.render('user_profile',{
            title:"Profile",
            profile_user:user
        });
    });
    
}

module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }
    return res.render('user_sign_up',{
        title:"Codeial:SignUp"
    })
}

module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/profile');
    }
    res.render('user_sign_in',{
        title:"Codeial:SignIn"
    })
}

module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('Error in finding up user'); return}

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('error in creating User');return}
                return res.redirect('/user/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })
}
module.exports.createSession=function(req,res){
    return res.redirect('/');
}
module.exports.destroySession=function(req,res){
    req.logout();
    return res.redirect('/');
}
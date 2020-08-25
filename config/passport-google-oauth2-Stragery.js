const passport=require('passport');
const googleStrategy=require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../models/user');


passport.use(new googleStrategy({
    clientID:"482502551464-l43uv7dij79gdm2htret1a00ls4im4ee.apps.googleusercontent.com",
    clientSecret:"FyWYiClRQKis5uHS5HTrgp5n",
    callbackURL: "http://localhost:8900/users/auth/google/callback",
    
},function(accessToken,refreshToken,profile,done){
    User.findOne({email:profile.emails[0].value}).exec(function(err,user){
        if(err){console.log('Error in google strategy-passport',err);return;}
        console.log(accessToken,refreshToken);
        console.log(profile);
        if(user){
            return done(null,user);
        }else{
            User.create({
                name:profile.displayName,
                email:profile.emails[0].value,
                password:crypto.randomBytes(20).toString('hex')
            },function(err,user){
                if(err){console.log('Error in creating user google strategy-passport',err);return;}
                return done(null,user);
            });
        }
    })
}));
module.exports=passport;
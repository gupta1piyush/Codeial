const express=require('express');
const router=express.Router();
const passport=require('passport');

const userController=require('../controller/user_controller');
router.get('/profile',userController.profile);
router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);
router.post('/create',userController.create);

//use passport as a middle ware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/user/sign-in'},
), userController.createSession);

module.exports=router;
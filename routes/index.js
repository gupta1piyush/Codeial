const express=require('express');
const router=express.Router();
const homeController=require('../controller/home_controller');
const { route } = require('./comments');

router.get('/',homeController.home);
router.use('/user',require('./user'));
router.use('/posts',require('./posts'));
router.use('/comments',require('./comments'));

module.exports=router;
const nodeMailer=require('../config/nodemailer');


exports.newComment=(comment)=>{
    let htmlString=nodeMailer.renderTemplate({comment:comment},'/comments/new_comment.ejs');
    nodeMailer.transporter.sendMail({
        from:'gupta1piyush@gmail.com',
        to:comment.user.email,
        subject:"New comment Published!",
        html:htmlString
    },(err,info)=>{
        if(err){
            console.log('Error in sending emails',err);
            return;
        }
       // console.log("message sent",info);
        return;
    });
}
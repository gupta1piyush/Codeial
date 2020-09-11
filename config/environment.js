const development={
    name:'development',
    asset_path:'./assets',
    session_cookie_key:'blah sometihing',
    db:'codeial_development',
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:'gupta1piyush',
            pass:'piyush@123!'
        }
    },
    google_client_id:"482502551464-l43uv7dij79gdm2htret1a00ls4im4ee.apps.googleusercontent.com",
    google_client_secret:"FyWYiClRQKis5uHS5HTrgp5n",
    google_call_back_url: "http://localhost:8900/users/auth/google/callback",
    jwt_secret:'codeial',
    
}

const production={
    name:'production',
    asset_path:process.env.CODEIAL_ASSET_PATH,
    session_cookie_key:process.env.CODEIAL_SESSION_COOKIE,
    db:process.env.CODEIAL_DATABASE,
    smtp:{
        service:'gmail',
        host:'smtp.gmail.com',
        port:587,
        secure:false,
        auth:{
            user:process.env.CODEIAL_GMAIL_USERNAME,
            pass:process.env.CODEIAL_GMAIL_PASSWORD
        }
    },
    google_client_id:process.env.CODEIAL_CLIENT_ID,
    google_client_secret:process.env.CODEIAL_CLIENT_SECRET,
    google_call_back_url: process.env.CODEIAL_CALL_BACK_URL,
    jwt_secret:process.env.CODEIAL_JWT,
    
}

module.exports=development;
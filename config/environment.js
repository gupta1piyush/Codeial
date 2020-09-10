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
}

module.exports=development;
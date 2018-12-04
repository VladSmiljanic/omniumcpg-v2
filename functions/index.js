const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin:'http://localhost:3000'});

const API = process.env.MAIL_API;
const DOMAIN = process.env.DOMAIN;

const mailgun = require('mailgun-js')({apiKey:API, domain:DOMAIN, testMode:true});

admin.initializeApp();

exports.addMessage = functions.https.onRequest((req,res)=>{
  const message = req.body.message;
  
  cors(req,res, ()=>{
    return admin.database()
                .ref('/messages')
                .push({message:message})
                .then(()=>{
                  res.send("it works!")
                })
    });
});


exports.sendContactFormEmail = functions.database.ref('messages/{pushId}').onCreate((snapshot, context) => {
  const data = snapshot.val();
  
  const email = {
    from: 'contact@omniumcpg.com',
    to: 'vladsmiljanic@gmail.com',
    subject:`New Contact form from ${data.name}`,
    text:'Test'
  };

  mailgun.messages().send(email, function(error,body){
    console.log(body);
    console.log(error);
  })
});
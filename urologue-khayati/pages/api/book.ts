// export default function book(req:any, res:any){
//     res.status(200).json(req.body)
// }


const nodemailer = require("nodemailer");

require('dotenv').config();

const { google } = require('googleapis');


export default function book(req: any, res: any) {
  const message = req.body;

  // Load environment variables from .env file
  const { CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;

  // Create an OAuth2 client
  const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  async function sendEmail() {
    try {
      // Generate an access token
      const accessToken = await oAuth2Client.getAccessToken();

      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_ADDRESS,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });


  // Prepare the email options
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.RECEIVER_EMAIL_ADDRESS,
    subject: 'ORDINATION',
    text: JSON.stringify(message),
  };

// Send the email
const info = await transporter.sendMail(mailOptions);
console.log('Email sent:', info.response);
res.status(200).json({ message: 'Email sent successfully.' });
} catch (error) {
console.error('Error:', error);
res.status(500).json({ error: 'An error occurred while sending the email.' });
}
}

// Call the sendEmail function
sendEmail();
}
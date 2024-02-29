const twilio = require('twilio');
const TWILLIO_ACCOUNT_SID = process.env.TWILLIO_ACCOUNT_SID;
const TWILLIO_AUTH_TOKEN= process.env.TWILLIO_AUTH_TOKEN;
const TWILLIO_PHONE_NUMBER = process.env.TWILLIO_PHONE_NUMBER;
const express = require('express');
//const isAdmin = require('../utils/isAdmin');
const router = express.Router();

const client = twilio(TWILLIO_ACCOUNT_SID, TWILLIO_AUTH_TOKEN);

router.post('/send-message-to-all', (req, res) => {
    const { message } = req.body;

    client.messages.create({
        body: message,
        to: 7739370347,
        from: process.env.TWILLIO_PHONE_NUMBER
    })
    .then((message) => {
        console.log(message.sid);
        res.json({ success: true, message: 'Message was successfully sent', sid: message.sid});
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({success: false, message:' Message Failed to send', error: error.message});
    });
});

module.exports = router;
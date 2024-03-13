const VoiceResponse = require('twilio').twiml.VoiceResponse;

export default function handler(req, res) {
    res.redirect(307, 'tel:' + req.query.p)
}

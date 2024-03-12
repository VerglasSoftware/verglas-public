const VoiceResponse = require('twilio').twiml.VoiceResponse;

export default function handler(req, res) {
    const twiml = new VoiceResponse();
    
    twiml.dial({
        ringTone: "GB",
        timeout: 30,
    }, req.query.Digits);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

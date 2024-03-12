const VoiceResponse = require('twilio').twiml.VoiceResponse;

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    if (req.query.DialCallStatus === 'busy') {
        twiml.say({
            language: 'en-UK',
            voice: 'Google.en-GB-Neural2-A'
        }, 'Sorry, our lines are very busy right now. Please call back later.');
    }

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

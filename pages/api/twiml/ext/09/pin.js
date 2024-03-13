const VoiceResponse = require('twilio').twiml.VoiceResponse;

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    if (req.query.Digits == "36690707") {
        twiml.redirect({
            method: 'GET'
        }, 'https://master.d3d0xgyfdqler4.amplifyapp.com/api/twiml/ext/09/gather');
    }

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

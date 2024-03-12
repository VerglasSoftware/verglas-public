import { Twilio } from 'twilio';

const VoiceResponse = require('twilio').twiml.VoiceResponse;

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    const dial = twiml.dial({
        ringTone: "uk",
    });
    dial.conference({
        endConferenceOnExit: true
    }, "+" + req.query.From.replace(' ', ''));

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

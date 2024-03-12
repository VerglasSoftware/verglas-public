const VoiceResponse = require('twilio').twiml.VoiceResponse;

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    const gather = twiml.gather({
        input: 'dtmf',
        timeout: 20,
        finishOnKey: '#',
        action: '/api/twiml/ext/09/dial',
        method: 'GET'
    });
    gather.say({
        language: 'en-UK',
        voice: 'Google.en-GB-Neural2-B'
    }, 'Dial the number you wish to call, followed by the hash key.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

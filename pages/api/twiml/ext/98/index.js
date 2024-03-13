const VoiceResponse = require('twilio').twiml.VoiceResponse;

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    const gather = twiml.gather({
        input: 'dtmf',
        timeout: 20,
        finishOnKey: '#',
        action: 'https://verglas-public.vercel.app/api/twiml/ext/98/dial',
        method: 'GET'
    });
    gather.say({
        language: 'en-UK',
        voice: 'Google.en-GB-Neural2-A'
    }, 'Dial the extension number you wish to coach, then key hash.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

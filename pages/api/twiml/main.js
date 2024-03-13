const VoiceResponse = require('twilio').twiml.VoiceResponse;

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    const gather = twiml.gather({
        input: 'dtmf',
        timeout: 20,
        numDigits: 2,
        finishOnKey: '#',
        action: 'https://verglas-public.vercel.app/api/twiml/menu',
        method: 'GET'
    });
    gather.say({
        language: 'en-UK',
        voice: 'Google.en-GB-Neural2-A'
    }, 'Thanks for calling Verr glass. If you know the extension you wish to call, please dial it now. If not, key hash.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

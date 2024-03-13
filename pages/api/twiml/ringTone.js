const VoiceResponse = require('twilio').twiml.VoiceResponse;

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    twiml.play({
        loop: 0
    }, 'https://master.d3d0xgyfdqler4.amplifyapp.com/UK_ringback_tone.mp3');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

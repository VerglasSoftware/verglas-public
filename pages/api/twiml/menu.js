const VoiceResponse = require('twilio').twiml.VoiceResponse;

const extensions = {
    "09": {
        name: 'Outside line',
        type: 'service'
    },
    "10": {
        name: 'Secretary\'s office',
        type: 'forward',
        number: '+447845171811'
    },
    "11": {
        name: 'Daniel Adams',
        type: 'forward',
        number: '+447858284939'
    },
    "12": {
        name: 'Jake Gillman',
        type: 'forward',
        number: '+447944016178'
    },
    "13": {
        name: 'Bevin Bell',
        type: 'forward',
        number: '+447845171811'
    },
    "14": {
        name: 'Matthew Hoey',
        type: 'forward',
        number: '+447387852336'
    }
}

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    const ext = extensions[req.query.Digits];

    twiml.say({
        language: 'en-UK',
        voice: 'Google.en-GB-Neural2-B'
    }, `Extension ${req.query.Digits}. ${ext.name}.`);

    if (ext.type === 'forward') {
        twiml.dial({
            ringTone: "GB",
            timeout: 30,
            action: '/api/twiml/connectionEnded',
            method: 'GET'
        }, ext.number);
    }

    if (ext.type === 'service') {
        twiml.redirect({
            method: 'GET'
        }, '/api/twiml/ext/' + req.query.Digits);
    }

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

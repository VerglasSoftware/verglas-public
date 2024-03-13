const VoiceResponse = require('twilio').twiml.VoiceResponse;

var { extensions: extensions } = require('../../extensions');

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    const dial = twiml.dial({
        ringTone: "uk",
    });
    dial.conference({
        statusCallback: 'http://49.13.165.101:3000/api/twiml/ext/09/conferenceStatus?Cto=' + req.query.Digits,
        statusCallbackMethod: 'GET',
        statusCallbackEvent: 'join leave start end',
        endConferenceOnExit: true,
        waitUrl: 'http://49.13.165.101:3000/api/twiml/ringTone',
        waitMethod: 'GET',
        record: 'record-from-start'
    }, req.query.From);
    
    // twiml.dial({
    //     ringTone: "uk",
    //     timeout: 30,
    // }, req.query.Digits);
    
    fetch(process.env.WEBHOOK, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            embeds: [
                {
                    "title": "Outgoing call",
                    "color": 16426522,
                    "thumbnail": {
                        "url": "",
                    },
                    "fields": [
                        {
                            "name": "To",
                            "value": req.query.Digits
                        },
                        {
                            "name": "From",
                            "value": "Extension " + Object.keys(extensions).find(key => extensions[key].number == req.query.From) + " (" + extensions[Object.keys(extensions).find(key => extensions[key].number == req.query.From)].displayname + ")",
                        }
                    ]
                }
            ]
        })
    })

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

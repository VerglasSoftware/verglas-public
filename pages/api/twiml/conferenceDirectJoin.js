import { Twilio } from 'twilio';

const VoiceResponse = require('twilio').twiml.VoiceResponse;

var { extensions: extensions } = require('./extensions');

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    const dial = twiml.dial({
        ringTone: "uk",
    });
    dial.conference({
        endConferenceOnExit: true
    }, "+" + req.query.From.replace(' ', ''));

    fetch(process.env.WEBHOOK, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            embeds: [
                {
                    "title": "Line engaged",
                    "color": 15746887,
                    "thumbnail": {
                        "url": "",
                    },
                    "fields": [
                        {
                            "name": "Extension",
                            "value": Object.keys(extensions).find(key => extensions[key].number == ("+" + req.query.From.replace(' ', ''))) + " (" + extensions[Object.keys(extensions).find(key => extensions[key].number == ("+" + req.query.From.replace(' ', '')))].displayname + ")",
                        },
                        {
                            "name": "Coach service",
                            "value": `[028 9694 3669 ext 98 ext ${Object.keys(extensions).find(key => extensions[key].number == ("+" + req.query.From.replace(' ', '')))}#](http://49.13.165.101:3000/api/call?p=02896943669,98,,${Object.keys(extensions).find(key => extensions[key].number == ("+" + req.query.From.replace(' ', '')))}#)`,
                        }
                    ]
                }
            ]
        })
    })

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

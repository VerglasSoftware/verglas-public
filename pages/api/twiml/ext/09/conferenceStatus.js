import { Twilio } from 'twilio';

const VoiceResponse = require('twilio').twiml.VoiceResponse;

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

var { extensions: extensions } = require('../../extensions');

export default function handler(req, res) {
    const twiml = new VoiceResponse();
    
    console.log(req.query.StatusCallbackEvent + " in " + req.query.FriendlyName + " to " + req.query.Cto.replace("0", "+44"));

    if (req.query.StatusCallbackEvent === 'participant-join' && client.conferences.get(req.query.FriendlyName).participants.length == 1 && req.query.Cto.replace("0", "+44") != req.query.From) {
        client.calls.list().then(calls => {
            if (calls.filter(c=>c.to == req.query.Cto.replace("0", "+44") && ['in-progress', 'ringing'].includes(c.status)).length == 0)
                client.calls.create({
                    to: req.query.Cto.replace("0", "+44"),
                    from: "+442896943669",
                    url: 'http://49.13.165.101:3000/api/twiml/conferenceDirectJoin?From=' + req.query.FriendlyName,
                    statusCallback: 'http://49.13.165.101:3000/api/twiml/conferenceOutboundStatus',
                    statusCallbackMethod: 'GET',
                });
        })
    }

    if (req.query.StatusCallbackEvent === 'conference-end') {
        fetch(process.env.WEBHOOK, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                embeds: [
                    {
                        "title": "Line freed",
                        "color": 4437377,
                        "thumbnail": {
                            "url": "",
                        },
                        "fields": [
                            {
                                "name": "Extension",
                                "value": Object.keys(extensions).find(key => extensions[key].number == req.query.FriendlyName) + " (" + extensions[Object.keys(extensions).find(key => extensions[key].number == req.query.FriendlyName)].displayname + ")",
                            }
                        ]
                    }
                ]
            })
        })
    }

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

import { Twilio } from 'twilio';

const VoiceResponse = require('twilio').twiml.VoiceResponse;

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

var { extensions: extensions } = require('../../extensions');

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    const ext = extensions[req.query.Digits];

    client.conferences.list({ friendlyName: ext.number, status: 'in-progress' }).then(confs => {
        console.log(confs);
        if (confs.length != 0) {
            client.calls.list().then(calls => {
                const dial = twiml.dial({
                    ringTone: "uk",
                });
                dial.conference({
                    coach: calls.filter(c => c.to == ext.number)[0].sid
                }, ext.number);
                res.writeHead(200, { 'Content-Type': 'text/xml' });
                res.end(twiml.toString());
            });
        } else {
            twiml.say({
                language: 'en-UK',
                voice: 'Google.en-GB-Neural2-B',
            }, 'That extension is not currently on a call.');
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(twiml.toString());
        }
    });
}

import { Twilio } from 'twilio';

const VoiceResponse = require('twilio').twiml.VoiceResponse;

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

var { extensions: extensions } = require('./extensions');

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    const ext = extensions[req.query.Digits];

    twiml.say({
        language: 'en-UK',
        voice: 'Google.en-GB-Neural2-B'
    }, `Extension ${req.query.Digits}. ${ext.name}.`);

    if (ext.type === 'forward') {

        client.conferences.list({ friendlyName: ext.number, status: 'in-progress' }).then(confs => {
            console.log(confs);
            if (confs.length == 0) {
                const dial = twiml.dial({
                    ringTone: "uk",
                });
                dial.conference({
                    statusCallback: '/api/twiml/conferenceStatus',
                    statusCallbackMethod: 'GET',
                    statusCallbackEvent: 'join leave start end',
                    endConferenceOnExit: true,
                    waitUrl: '/api/twiml/ringTone',
                    waitMethod: 'GET'
                }, ext.number);
            } else {
                twiml.say({
                    language: 'en-UK',
                    voice: 'Google.en-GB-Neural2-B',
                }, 'Sorry, that extension is currently busy. Please call back later.');
            }
    
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(twiml.toString());
        });
    }

    if (ext.type === 'service') {
        twiml.redirect({
            method: 'GET'
        }, '/api/twiml/ext/' + req.query.Digits);

        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
    }
}

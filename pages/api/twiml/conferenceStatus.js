import { Twilio } from 'twilio';

const VoiceResponse = require('twilio').twiml.VoiceResponse;

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    console.log(req.query.StatusCallbackEvent + " in " + req.query.FriendlyName)

    if (req.query.StatusCallbackEvent === 'participant-join' && client.conferences.get(req.query.FriendlyName).participants.length == 1 && req.query.FriendlyName != req.query.From) {
        client.calls.list().then(calls => {
            if (calls.filter(c=>c.to == req.query.FriendlyName && ['in-progress', 'ringing'].includes(c.status)).length == 0)
                client.calls.create({
                    to: req.query.FriendlyName,
                    from: "+442896943669",
                    url: 'https://f7a7-149-50-166-81.ngrok-free.app/api/twiml/conferenceDirectJoin?From=' + req.query.FriendlyName,
                    statusCallback: '/api/twiml/conferenceOutboundStatus',
                    statusCallbackMethod: 'GET',
                });
        })
    }

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

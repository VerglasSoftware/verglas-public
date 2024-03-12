import { Twilio } from 'twilio';

const VoiceResponse = require('twilio').twiml.VoiceResponse;

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default function handler(req, res) {
    const twiml = new VoiceResponse();

    if (req.params.StatusCallbackEvent == 'completed') {
        client.conferences.get(req.query.to).participants.list().then(participants => {
            participants.forEach(p => {
                client.calls(p.callSid).update({
                    status: "completed"
                });
            });
        })
    }

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}

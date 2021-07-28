
import { sendEmail } from '../../utils/sendEmail';
export default (req, res) => {
    res.status(200).json({ name: 'John Doe' })

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API);
    const msg = {
        to: 'adambeatty86@gmail.com',
        from: 'optionformassistant@gmail.com', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'WORKING',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    //ES6
    sgMail
        .send(msg)
        .then(() => { }, error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });

    return res.end()
}

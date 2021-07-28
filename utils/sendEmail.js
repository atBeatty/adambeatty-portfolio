// import fetch from 'node-fetch'

// const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

// const sendEmail = async ({ name, email }) => {
//     await fetch(SENDGRID_API, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${process.env.SENDGRID_API}`
//         },
//         body: JSON.stringify({
//             personalizations: [
//                 {
//                     to: [
//                         {
//                             email: 'adambeatty86@gmail.com'
//                         }
//                     ],
//                     subject: 'Demo success :)'
//                 }
//             ],
//             from: {
//                 email: 'noreply@demo.com',
//                 name: 'Test SendGrid'
//             },
//             content: [
//                 {
//                     type: 'text/html',
//                     value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`
//                 }
//             ]
//         })
//     });
// }

// export { sendEmail };


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API)
const msg = {
    to: 'adambeatty86@gmail.com', // Change to your recipient
    from: 'optionformassistant@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
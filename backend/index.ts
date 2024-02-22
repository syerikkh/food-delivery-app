// import nodemailer from 'nodemailer';
// import Mail from 'nodemailer/lib/mailer';

// // const main = async () => {
// //     let hostname = "hostname";
// //     let username = "username";
// //     let password = "password";

// //     let transporter = nodemailer.createTransport({
// //         host: hostname,
// //         port: 587,
// //         secure: false,
// //         requireTLS: true,
// //         auth: {
// //             user: username,
// //             pass: password,
// //         },
// //         logger: true
// //     });

// //     let info = await transporter.sendMail({
// //         from: '"Sender" <from@blabla.com>',
// //         to: "khsyerik@gmail.com",
// //         subject: "Helloo",
// //         text: "Hello world?",
// //         html: "<strong> Hello world<strong>",
// //         headers: { 'x-cloudmta-class': 'standard' }
// //     });
// //     console.log("Message sent: asdasd", info.response);

// // };

// // main().catch(console.error)

// var app = require('express')(),
//     mailer = require('express-mailer');

// let hostname = "hostname";
// let username = "username";
// let password = "password";

// mailer.extend(app, {
//     from: 'from@baba.com'
//     host: hostname,
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//         user: username,
//         pass: password,
//     },
// })
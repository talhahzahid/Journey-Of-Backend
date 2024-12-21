import express from "express"
const app = express()
const port = 3000;

import nodemailer from "nodemailer";

app.get('/', (req, res) => {
    res.send("Hello")
})
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'vernie11@ethereal.email',
        pass: 'uUbGf8RkaR5QHZu8Zh'
    }
});

app.get('/sent', async (req, res) => {
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <vernie11@ethereal.email>', // sender address
        to: "talhazahid218@gmail.com", // list of receivers
        subject: "Hello Talha✔", // Subject line
        text: "Successfully Learn nodemailer", // plain text body
        html: "<b>Hello world salfgosagoasgvtoa?</b>", // html body
    });
})

app.listen(port, () => {
    console.log("SERVER IS RUNNING AT PORT", port);
})
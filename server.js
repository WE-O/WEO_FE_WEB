const http = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const HTTP_PORT = 3000;
const HTTPS_PORT = 443;

const DOMAIN = "https://siksikmulmul.shop/main";
const express = require('express');
const expressApp = express();

expressApp.use(function (request, response, next) {

    if (process.env.NODE_ENV != 'development' && !request.secure) {
        console.log("Redirect Testing ... ");
        console.log(request);
        return response.redirect("https://" + request.headers.host + request.url);
    }

    next();
})

app.prepare().then(() => {
    http
        .createServer((req, res) => {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url, true);
            handle(req, res, parsedUrl);
        })
        .listen(HTTP_PORT, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${HTTP_PORT}`);
        });


    const https = require("https");
    const fs = require("fs");
    const options = {
        key: fs.readFileSync('/etc/letsencrypt/live/siksikmulmul.shop/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/siksikmulmul.shop/cert.pem')
    };
    https
        .createServer(options, function (req, res) {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url, true);
            handle(req, res, parsedUrl);
        })
        .listen(HTTPS_PORT, (err) => {
            if (err) throw err;
            console.log(`> Ready on https://localhost:${HTTPS_PORT}`);
        });
});
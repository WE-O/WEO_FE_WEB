const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");

const hostname = "siksikmulmul.shop";
const port = 3000;

const dev = process.env.NODE_ENV !== "production";
console.log('dev>',dev);
const app = next({ dev, hostname, port });
console.log('1111');
const handle = app.getRequestHandler();
console.log('2222');

const httpsOptions = {
    // ca: fs.readFileSync('/etc/letsencrypt/live/siksikmulmul.shop/fullchain.pem'),
    key: fs.readFileSync("/etc/letsencrypt/live/siksikmulmul.shop/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/siksikmulmul.shop/cert.pem"),
};
console.log('33333');
console.log('httpsOptions>', httpsOptions);

app.prepare().then(() => {
    createServer(httpsOptions, async (req, res) => {
        try {
            const parsedUrl = parse(req.url, true);
            await handle(req, res, parsedUrl);
        } catch (err) {
            console.error("Error occurred handling", req.url, err);
            res.statusCode = 500;
            res.end("internal server error");
        }
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on https://${hostname}:${port}`);
    });
});
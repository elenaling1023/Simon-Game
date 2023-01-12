const express = require("express");

const connect = require("connect");
const serveStatic = require("serve-static");

const app = express();
const port = 3000;
const simonGamePort = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * sample hosting
 */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

/**
 * serve index.html
 */
connect()
  .use(serveStatic(__dirname, { index: ["index.html"] }))
  .listen(simonGamePort, () =>
    console.log(`Simon game listening at http://localhost:${simonGamePort}`)
  );

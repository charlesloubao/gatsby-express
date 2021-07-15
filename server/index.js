const path = require("path")
const express = require("express");
const cors = require("cors")

const isProduction = process.env.NODE_ENV === "production"
const PORT = process.env.PORT || 3000;

const app = express();

// Cors is enabled in development only
if (!isProduction) {
    app.use(cors())
}

app.get("/api/foo", ((req, res, next) => res.send({"foo": "bar"})))

if (isProduction) {
    app.use(express.static(path.resolve(__dirname, "../client/public")))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

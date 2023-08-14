const express = require('express');
const app = express();

app.get('/api/whoami/', (req, res) => {
    res.json({
       "ipaddress": req.ip,
       "language":req.headers['accept-language'],
       "software": req.headers['user-agent']})
});

app.use((req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.listen(3000, () => console.log("Listening"));
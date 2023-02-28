import express from 'express';
import path from 'node:path';
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

let port: number | undefined = 3456;

app.get('/api', function (req, res) {
    console.log(': get API');
    res.sendFile((path.join(__dirname, '../public/api.json')));
});

app.listen(port, () => {
        console.log(`running at http://localhost:${port}`);
});


import express from 'express';
const port = 3000;
const app = express();
app.get('*', (_req, res) => res.send('Hello team XXX!'));
app.listen(port, () => console.log('Listening on http://localhost:' + port));
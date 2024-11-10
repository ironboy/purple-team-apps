import express from 'express';
const port = 3001;
const app = express();
app.get('*', (_req, res) => res.send('Hello world!'));
app.listen(port, () => console.log('Listening on http://localhost:' + port));
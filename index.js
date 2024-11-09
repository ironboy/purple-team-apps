import express from 'express';
const app = express();
app.get('*', (_req, res) => res.send('Hello team!'));
app.listen(3000, () => console.log('Listening on http://localhost:80'));
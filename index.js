import path from 'path';
import express from 'express';
const port = 3001;
const app = express();
app.use(express.static('frontend'));
app.get('*', ((_req, res) => res.sendFile(path.join(import.meta.dirname, 'frontend', 'index.html'))));
app.listen(port, () => console.log('Listening on http://localhost:' + port));
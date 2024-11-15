import fs from 'fs';
import path from 'path';
import express from 'express';

const port = 3002;
const app = express();
app.use(express.static('frontend'));

app.get('/api/photolist/*', (req, res) => {
  const directory = req.url.split('photolist/')[1];
  const list = fs.readdirSync('/' + directory, { recursive: true });
  res.json(list);
});

app.get('/api/photo/*', (req, res) => {
  const photo = req.url.split('photo/')[1];
  res.sendFile('/' + photo);
});

app.get('*', ((_req, res) =>
  res.sendFile(path.join(import.meta.dirname, 'frontend', 'index.html'))));


app.listen(port, () => console.log('Listening on http://localhost:' + port));
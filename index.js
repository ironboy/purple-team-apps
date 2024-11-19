import fs from 'fs';
import path from 'path';
import express from 'express';

const port = 3002;
const app = express();
app.use(express.static('frontend'));

app.get('/api/photolist', (req, res) => {
  const folder = req.query.folder.replaceAll('.', '');
  const list = fs.readdirSync(path.join(import.meta.dirname, 'images', folder));
  res.json(list);
});

app.get('/api/photo', (req, res) => {
  const file = req.query.file.replaceAll('.', '');
  res.sendFile(path.join(import.meta.dirname, 'images', file));
});

app.get('*', ((_req, res) =>
  res.sendFile(path.join(import.meta.dirname, 'frontend', 'index.html'))));

app.listen(port, () => console.log('Listening on http://localhost:' + port));
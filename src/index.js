import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors())

app.get('/locales/:lang.json', (req, res) => {
  const lang = req.params.lang;
  const filePath = path.join(__dirname, 'locales', `${lang}.json`);
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({ error: 'File not found' });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

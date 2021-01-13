import * as express from 'express';
import * as path from 'path';

const app = express();

const pagesDir = path.join(__dirname, '/1-hello-world-pages');
app.use(express.static(pagesDir));

app.get('/api/date', sendDate);

function sendDate(req: express.Request, res: express.Response<string>) {
  res.send(Date());
}

app.listen(8080, () => {
  console.log('server running');
});

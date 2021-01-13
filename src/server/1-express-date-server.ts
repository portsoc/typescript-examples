import * as express from 'express';

const app = express();

app.get('/', sendDate);

function sendDate(req: express.Request, res: express.Response<string>) {
  res.send(Date());
}

app.listen(8080, () => {
  console.log('server running');
});

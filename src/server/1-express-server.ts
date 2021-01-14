import express from 'express';
import { pick } from '../simple-examples/13b-generic-pick';

const app = express();

app.get('/person', sendPerson);

app.listen(8080, () => {
  console.log('server running');
});


// application code


interface Person {
  name: string,
  age: number,
  height: number,
}

const people: Person[] = [
  { name: 'Jack', age: 18, height: 180 },
  { name: 'Rich', age: 18.5, height: 200 },
];

function sendPerson(req: express.Request, res: express.Response<Person>) {
  res.json(pick(people));
}

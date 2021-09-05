import express from 'express';
import { insertField, Field, getField } from './db';

const filedRouter = express.Router();

filedRouter.post('/', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  const field: Field = req.body;
  console.log(field);
  try {
    insertField(field).then(() => {
      res.status(200).json({ message: 'OK', status: 200 });
    });
  } catch (error) {
    res.status(400).json({ message: error.message, status: 404 });
  }
});

filedRouter.get('/:id', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    getField(req.params.id).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { filedRouter };

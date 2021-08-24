import express from 'express';
import { insertUser, User } from './db';

const userRouter = express.Router();

userRouter.post('/', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  const user: User = req.body;
  try {
    insertUser(user).then((result) => {
      if(result === 200){
        res.status(200).json({ message: 'OK', status: 200 });
      }else{
        res.status(200).json({ message: 'NO', status: 500 });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

export { userRouter };

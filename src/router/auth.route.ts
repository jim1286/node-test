import { json } from 'stream/consumers';
import { Router } from 'express';

const router = Router();

router
  .post('/login', async (req, res) => {
    const { email, password } = await req.body;

    console.log(email, password);

    res.send('login');
  })
  .delete('/logout');

export default router;

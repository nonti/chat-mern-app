import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  // Handle login logic here
  res.send('login route')
});


export default router;
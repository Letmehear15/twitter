import dotenv from 'dotenv';
dotenv.config();

import './core/db';
import express from 'express';
import { userController } from './controllers/UserController';
import { registerValidations } from './validator/register';
import { passport } from './core/passport';
import { twitterController } from './controllers/TwitterController';
import { tweetValidations } from './validator/createTweet';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(cors());

app.get('/users', userController.index);
app.get('/user/:id', userController.show);
app.get('/auth/verify', userController.verify);
app.post('/auth/register', registerValidations, userController.create);
app.post(
  '/auth/login',
  passport.authenticate('local'),
  userController.afterLogin
);
app.get('/auth/me', passport.authenticate('jwt'), userController.getUserInfo);

app.delete(
  '/tweets/:id',
  passport.authenticate('jwt'),
  twitterController.delete
);
app.get('/tweets', twitterController.index);
app.get('/tweets/:id', twitterController.show);
app.post(
  '/tweets',
  passport.authenticate('jwt'),
  tweetValidations,
  twitterController.create
);
app.put('/tweet', passport.authenticate('jwt'), twitterController.update);

app.listen(process.env.PORT, () => {
  console.log('SERVER IS RUNNING AT PORT:' + process.env.PORT);
});

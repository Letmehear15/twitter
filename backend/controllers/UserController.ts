import express from 'express';
import { validationResult } from 'express-validator';
import {
  UserModelDocumentInterface,
  UserModelInterface,
  UserSchema,
} from '../models/UserModel';
import { cryptoHash } from '../utils/CryptoHash';
import { sendMessage } from '../utils/Mailer';
import jwt from 'jsonwebtoken';
import { isValidId } from '../utils/isValidateObjectId';

// declare module 'express' {
//   export interface Request {
//     user: any;
//   }
// }
class UserController {
  async index(_: any, res: express.Response) {
    try {
      const users = await UserSchema.find({}).exec();
      res.json({
        status: 'success',
        data: users,
      });
    } catch (error) {
      res.json({
        status: 'Error',
        message: error,
      });
    }
  }
  async show(req: express.Request, res: express.Response) {
    try {
      const id = req.params.id;

      if (!isValidId(id)) {
        res.status(410).send();
        return;
      }

      const user = await UserSchema.findById({ _id: id });

      res.json({
        status: 'success',
        data: user,
      });
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }
  }
  async create(req: express.Request, res: express.Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const data: UserModelInterface = {
        email: req.body.email,
        fullName: req.body.fullName,
        username: req.body.username,
        password: cryptoHash(req.body.password + process.env.SECURITY_PASS),
        confirmHash: cryptoHash(
          process.env.SECURITY_PASS || Math.random().toString()
        ),
      };

      const user = await UserSchema.create(data);

      sendMessage({
        mailTo: 'testMail@gmail.com',
        mailFrom: 'sanya.nesterov666@gmail.com',
        mailSubject: 'Hello it is a mail from clone of Twitter',
        mailText: 'Confirm your email address',
        mailHtml: `Please confirm your mail address to click on <a href='http://localhost:8888/user/verify?hash=${user.confirmHash}'>this link</a>`,
        callback(err: Error | null) {
          if (err) {
            return res.send();
          } else {
            res.status(201).json({
              status: 'success',
              data: user,
            });
          }
        },
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        message: error,
      });
    }
  }
  async verify(req: express.Request, res: express.Response) {
    try {
      const hash = req.query.hash;
      const user = await UserSchema.findOne({ confirmHash: `${hash}` }).exec();
      if (user) {
        user.confirmed = true;
        user.save();
        res.json({
          status: 'success',
        });
      } else {
        res.send();
      }
    } catch (error) {
      res.json({
        status: 'error',
        message: error,
      });
    }
  }
  async afterLogin(req: express.Request, res: express.Response) {
    try {
      const user = (req.user as UserModelDocumentInterface).toJSON();

      return res.json({
        ...user,
        token: jwt.sign(
          { data: req.user },
          process.env.SECURITY_PASS || '123',
          { expiresIn: '30d' }
        ),
      });
    } catch (error) {
      res.status(400).json({
        status: 'error',
        error,
      });
    }
  }
  async getUserInfo(req: express.Request, res: express.Response) {
    try {
      const user = (req.user as UserModelDocumentInterface).toJSON();
      return res.json({
        status: 'success',
        data: user,
      });
    } catch (error) {
      res.status(404).json({
        status: 'error',
        error,
      });
    }
  }
}

export const userController = new UserController();

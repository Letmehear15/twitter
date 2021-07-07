import express from 'express';
import { validationResult } from 'express-validator';
import { TwitterModelInterface, TwitterSchema } from '../models/TwitterModel';
import { UserModelInterface } from '../models/UserModel';
import { isValidId } from '../utils/isValidateObjectId';

class TwitterController {
  async index(_: any, res: express.Response) {
    try {
      const tweets = await TwitterSchema.find({})
        .sort({ createdAt: '-1' })
        .populate('user');

      if (tweets) {
        res.json({
          status: 'success',
          data: tweets,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: error,
        message: error,
      });
    }
  }

  async create(req: express.Request, res: express.Response) {
    try {
      const user = req.user as UserModelInterface;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      if (user?._id) {
        const data: TwitterModelInterface = {
          text: req.body.text,
          user: user._id,
        };

        let tweet = await TwitterSchema.create(data);
        tweet = await tweet.populate('user').execPopulate();

        if (tweet) {
          res.json({
            status: 'success',
            data: tweet,
          });
        } else {
          res.status(500).send();
        }
      } else
        res.status(400).json({
          status: 'error',
        });
    } catch (error) {
      res.status(404).json({
        status: error,
        message: error,
      });
    }
  }

  async delete(req: express.Request, res: express.Response) {
    try {
      const tweetId = req.params.id;
      const user = req.user as UserModelInterface;

      if (!isValidId(tweetId)) {
        res.status(410).send();
        return;
      }

      if (user) {
        const tweet = await TwitterSchema.findById({ _id: tweetId });
        if (tweet) {
          if (String(tweet.user) === String(user._id)) {
            tweet.remove();
            res.send();
          } else {
            res.status(500).send();
          }
        }
      }
    } catch (error) {
      res.status(404).json({
        status: error,
        message: error,
      });
    }
  }

  async show(req: express.Request, res: express.Response) {
    try {
      const tweetId = req.params.id;

      if (!isValidId(tweetId)) {
        res.status(410).send();
        return;
      }
      const tweet = await TwitterSchema.findById({ _id: tweetId });

      if (tweet) {
        res.json({
          status: 'success',
          data: await tweet.populate('user').execPopulate(),
        });
      } else {
        res.status(500).send();
      }
    } catch (error) {
      res.status(404).json({
        status: error,
        message: error,
      });
    }
  }
  async update(req: express.Request, res: express.Response) {
    try {
      const id = req.body.id;
      const user = req.user as UserModelInterface;

      if (user) {
        const tweet = await TwitterSchema.findById(id);
        if (tweet) {
          if (String(user._id) === String(tweet.user)) {
            const updatedTweet = await TwitterSchema.findByIdAndUpdate(
              id,
              {
                text: req.body.text,
              },
              { new: true }
            );

            res.json({
              status: 'success',
              data: updatedTweet,
            });
          } else {
            res.status(500).send();
          }
        }
      }
    } catch (error) {
      res.status(500).json({
        status: 'error',
        message: error,
      });
    }
  }
}

export const twitterController = new TwitterController();

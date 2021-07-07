import { body } from 'express-validator';

export const tweetValidations = [
  body('text').isString().isLength({
    max: 250,
  }),
];

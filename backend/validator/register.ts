import { body } from 'express-validator'

export const registerValidations = [
    body('email')
    .isEmail()
    .withMessage('Write the correct email address')
    .isLength({
        max: 40,
        min: 11
    })
    .withMessage('Maximal length is 40, minimal length is 11'),
    body('fullName')
    .isLength({
        max: 40,
        min: 2
    }),
    body('username')
    .isLength({
        max: 40,
        min: 2
    }),
    body('password')
    .isLength({
        min: 6
    })
    .withMessage('Minimal 6 symbols')
    .custom((value, { req }) => {
        if (value !== req.body.password2) {
            throw new Error('Password confirmation does not match password');
        }
        return true;
    })
]
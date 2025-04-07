import { Router } from 'express';
import { body } from 'express-validator';
import { login, register } from '../controllers/user.controller.js';

const router = Router();

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Email is not valid'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('firstname')
      .isLength({ min: 3 })
      .withMessage('First name must be at least 3 characters long'),
    body('lastname')
      .isLength({ min: 3 })
      .withMessage('Last name must be at least 3 characters long'),
  ],
  register
);

router.post('/login',[
  body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],login)

export default router;

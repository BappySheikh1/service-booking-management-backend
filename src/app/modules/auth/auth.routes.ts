import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './auth.controller';

const router = express.Router();

router.post('/register', UserController.userRegister);

router.post(
  '/super_admin/users',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.createAdmin
);

router.post(
  '/admin/users',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.addNewUser
);

router.post('/login', UserController.loginUser);

export const AuthRouter = router;

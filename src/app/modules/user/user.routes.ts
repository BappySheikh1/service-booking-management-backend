import express from 'express';

import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { UserController } from './user.controller';

const router = express.Router();

router.get(
  '/users/all',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.getAllFromDB
);

router.get(
  '/user/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.getByIdFromDB
);

router.patch(
  '/super_admin/users/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.updateAdminRoles
);

router.delete(
  '/user/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  UserController.deleteFromDB
);
router.patch(
  '/profile/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER, ENUM_USER_ROLE.SUPER_ADMIN),
  UserController.updateIntoDB
);


export const UserRouter = router;

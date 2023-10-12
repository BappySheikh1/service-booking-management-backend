import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { UserService } from './auth.service';

const userRegister: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.userRegister(req.body);
    // console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  }
);

const createAdmin: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.createAdmin(req.body);
    // console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  }
);

const addNewUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.addNewUser(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  }
);

const loginUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { ...loginData } = req.body;

    const result = await UserService.loginUser(loginData);

    // set refresh token into cookie

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'User logged in successfully !',
      token: result,
    });
  }
);

export const UserController = {
  userRegister,
  loginUser,
  createAdmin,
  addNewUser,
};

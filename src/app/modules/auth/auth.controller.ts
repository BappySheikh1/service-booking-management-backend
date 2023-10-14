import { Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';

import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';

const createRegister: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AuthService.createRegister(req.body);
    console.log(req.body);
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
    const result = await AuthService.createAdmin(req.body);
    console.log(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    });
  }
);

const createNewUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AuthService.createNewUser(req.body);
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

    const result = await AuthService.loginUser(loginData);

    // set refresh token into cookie

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'User logged in successfully !',
      token: result,
    });
  }
);

export const AuthController = {
  createRegister,
  loginUser,
  createAdmin,
  createNewUser,
};

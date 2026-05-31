import { Request, Response, NextFunction } from 'express';

export class BaseController {
  protected sendResponse(res: Response, status: number, data: any, message: string = 'Success') {
    return res.status(status).json({
      success: true,
      message,
      data
    });
  }

  protected handleError(next: NextFunction, error: any) {
    next(error);
  }
}

import { Request, Response, NextFunction } from 'express';
import { BaseController } from '../common/controllers/base.controller';
import { AuthService } from './auth.service';

export class AuthController extends BaseController {
  private authService: AuthService;

  constructor() {
    super();
    this.authService = new AuthService();
  }

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      const result = await this.authService.register(userData);
      this.sendResponse(res, 201, result, 'User registered successfully');
    } catch (error) {
      this.handleError(next, error);
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      const result = await this.authService.login(userData);
      this.sendResponse(res, 200, result, 'User logged in successfully');
    } catch (error) {
      this.handleError(next, error);
    }
  };
}

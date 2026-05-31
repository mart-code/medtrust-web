import { Request, Response, NextFunction } from 'express';
import { BaseController } from '../common/controllers/base.controller';
import { UsersService } from './users.service';

export class UsersController extends BaseController {
  private usersService: UsersService;

  constructor() {
    super();
    this.usersService = new UsersService();
  }

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.usersService.findAllUsers();
      this.sendResponse(res, 200, users, 'findAll');
    } catch (error) {
      this.handleError(next, error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = String(req.params.id);
      const findOneUserData = await this.usersService.findUserById(userId);
      this.sendResponse(res, 200, findOneUserData, 'findOne');
    } catch (error) {
      this.handleError(next, error);
    }
  };
}

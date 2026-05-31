import { Router } from 'express';
import { AuthController } from './auth.controller';
import { Routes } from '../common/interfaces/routes.interface';

export class AuthRoute implements Routes {
  public path = '/auth';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/register`, this.authController.register);
    this.router.post(`${this.path}/login`, this.authController.login);
  }
}

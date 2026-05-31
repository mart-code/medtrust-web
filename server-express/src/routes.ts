import { Router } from 'express';
import { Routes } from './common/interfaces/routes.interface';
import { AuthRoute } from './auth/auth.route';
import { UsersRoute } from './users/users.route';

export class AppRoutes implements Routes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const routes = [
      new AuthRoute(),
      new UsersRoute()
    ];

    routes.forEach((route) => {
      this.router.use('/', route.router);
    });
  }
}

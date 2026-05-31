import { HttpException } from '../common/middlewares/error.middleware';

export class UsersService {
  public async findAllUsers(): Promise<any[]> {
    return [{ id: '1', email: 'test@medtrust.com', role: 'admin' }];
  }

  public async findUserById(userId: string): Promise<any> {
    if (!userId) throw new HttpException(400, 'UserId is required');
    
    return { id: userId, email: 'test@medtrust.com', role: 'admin' };
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RefreshToken } from './entities/refresh-token.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(RefreshToken)
    private refreshTokenRepo: Repository<RefreshToken>,
  ) {}

  findById(id: string) {
    return this.userRepo.findOne({ where: { id } });
  }

  findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  async saveRefreshToken(userId: string, token: string, expiresAt: Date) {
    const rt = this.refreshTokenRepo.create({ userId, token, expiresAt });
    return this.refreshTokenRepo.save(rt);
  }

  async findRefreshToken(token: string) {
    return this.refreshTokenRepo.findOne({ where: { token } });
  }

  async revokeRefreshToken(token: string) {
    await this.refreshTokenRepo.update({ token }, { revokedAt: new Date() });
  }

  async revokeAllUserRefreshTokens(userId: string) {
    await this.refreshTokenRepo.update(
      { userId, revokedAt: undefined },
      { revokedAt: new Date() },
    );
  }
}

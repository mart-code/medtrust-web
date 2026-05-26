"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const refresh_token_entity_1 = require("./entities/refresh-token.entity");
let UsersService = class UsersService {
    userRepo;
    refreshTokenRepo;
    constructor(userRepo, refreshTokenRepo) {
        this.userRepo = userRepo;
        this.refreshTokenRepo = refreshTokenRepo;
    }
    findById(id) {
        return this.userRepo.findOne({ where: { id } });
    }
    findByEmail(email) {
        return this.userRepo.findOne({ where: { email } });
    }
    async saveRefreshToken(userId, token, expiresAt) {
        const rt = this.refreshTokenRepo.create({ userId, token, expiresAt });
        return this.refreshTokenRepo.save(rt);
    }
    async findRefreshToken(token) {
        return this.refreshTokenRepo.findOne({ where: { token } });
    }
    async revokeRefreshToken(token) {
        await this.refreshTokenRepo.update({ token }, { revokedAt: new Date() });
    }
    async revokeAllUserRefreshTokens(userId) {
        await this.refreshTokenRepo.update({ userId, revokedAt: undefined }, { revokedAt: new Date() });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(refresh_token_entity_1.RefreshToken)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map
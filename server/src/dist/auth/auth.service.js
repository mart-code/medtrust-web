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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../users/entities/user.entity");
const patient_profile_entity_1 = require("../patients/entities/patient-profile.entity");
const doctor_profile_entity_1 = require("../doctors/entities/doctor-profile.entity");
const organisation_profile_entity_1 = require("../organisations/entities/organisation-profile.entity");
const medical_institution_entity_1 = require("../institutions/entities/medical-institution.entity");
const institution_profile_entity_1 = require("../institutions/entities/institution-profile.entity");
const super_admin_profile_entity_1 = require("../institutions/entities/super-admin-profile.entity");
const users_service_1 = require("../users/users.service");
const enums_1 = require("../common/enums");
let AuthService = class AuthService {
    dataSource;
    jwtService;
    config;
    usersService;
    userRepo;
    patientRepo;
    doctorRepo;
    orgRepo;
    institutionRepo;
    institutionProfileRepo;
    superAdminRepo;
    constructor(dataSource, jwtService, config, usersService, userRepo, patientRepo, doctorRepo, orgRepo, institutionRepo, institutionProfileRepo, superAdminRepo) {
        this.dataSource = dataSource;
        this.jwtService = jwtService;
        this.config = config;
        this.usersService = usersService;
        this.userRepo = userRepo;
        this.patientRepo = patientRepo;
        this.doctorRepo = doctorRepo;
        this.orgRepo = orgRepo;
        this.institutionRepo = institutionRepo;
        this.institutionProfileRepo = institutionProfileRepo;
        this.superAdminRepo = superAdminRepo;
    }
    async register(dto) {
        const existing = await this.usersService.findByEmail(dto.email);
        if (existing)
            throw new common_1.ConflictException('Email already registered');
        const passwordHash = await bcrypt.hash(dto.password, 12);
        const createdUser = await this.dataSource.transaction(async (manager) => {
            const user = manager.create(user_entity_1.User, {
                email: dto.email,
                passwordHash,
                role: dto.role,
            });
            await manager.save(user);
            switch (dto.role) {
                case enums_1.UserRole.PATIENT:
                    await manager.save(manager.create(patient_profile_entity_1.PatientProfile, {
                        userId: user.id,
                        firstName: dto.firstName ?? '',
                        lastName: dto.lastName ?? '',
                    }));
                    break;
                case enums_1.UserRole.DOCTOR:
                    if (!dto.licenseNumber)
                        throw new common_1.BadRequestException('License number required for doctors');
                    await manager.save(manager.create(doctor_profile_entity_1.DoctorProfile, {
                        userId: user.id,
                        firstName: dto.firstName ?? '',
                        lastName: dto.lastName ?? '',
                        specialisation: dto.specialisation ?? '',
                        licenseNumber: dto.licenseNumber,
                    }));
                    break;
                case enums_1.UserRole.ORGANISATION:
                    if (!dto.registrationNumber)
                        throw new common_1.BadRequestException('Registration number required for organisations');
                    await manager.save(manager.create(organisation_profile_entity_1.OrganisationProfile, {
                        userId: user.id,
                        name: dto.organisationName ?? '',
                        registrationNumber: dto.registrationNumber,
                    }));
                    break;
                case enums_1.UserRole.INSTITUTION: {
                    const institution = await manager.save(manager.create(medical_institution_entity_1.MedicalInstitution, {
                        name: dto.institutionName ?? '',
                        address: dto.institutionAddress ?? '',
                        latitude: dto.latitude ?? 0,
                        longitude: dto.longitude ?? 0,
                        createdByUserId: user.id,
                    }));
                    await manager.save(manager.create(institution_profile_entity_1.InstitutionProfile, {
                        userId: user.id,
                        institutionId: institution.id,
                    }));
                    break;
                }
                case enums_1.UserRole.SUPER_ADMIN:
                    await manager.save(manager.create(super_admin_profile_entity_1.SuperAdminProfile, {
                        userId: user.id,
                        firstName: dto.firstName ?? '',
                        lastName: dto.lastName ?? '',
                    }));
                    break;
            }
            return user;
        });
        return this.buildAuthResult(createdUser);
    }
    async login(dto) {
        const user = await this.usersService.findByEmail(dto.email);
        if (!user || !user.isActive)
            throw new common_1.UnauthorizedException('Invalid credentials');
        const valid = await bcrypt.compare(dto.password, user.passwordHash);
        if (!valid)
            throw new common_1.UnauthorizedException('Invalid credentials');
        return this.buildAuthResult(user);
    }
    async refresh(refreshToken) {
        const stored = await this.usersService.findRefreshToken(refreshToken);
        if (!stored || stored.revokedAt || stored.expiresAt < new Date()) {
            throw new common_1.UnauthorizedException('Invalid or expired refresh token');
        }
        await this.usersService.revokeRefreshToken(refreshToken);
        const user = await this.userRepo.findOne({ where: { id: stored.userId } });
        if (!user)
            throw new common_1.UnauthorizedException();
        return this.buildAuthResult(user);
    }
    async logout(refreshToken) {
        await this.usersService.revokeRefreshToken(refreshToken);
    }
    async getMe(userId) {
        return this.buildAuthenticatedUser(userId);
    }
    async buildAuthenticatedUser(userId) {
        const user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user)
            throw new common_1.UnauthorizedException();
        let profile = null;
        switch (user.role) {
            case enums_1.UserRole.PATIENT:
                profile = await this.patientRepo.findOne({ where: { userId } });
                break;
            case enums_1.UserRole.DOCTOR:
                profile = await this.doctorRepo.findOne({
                    where: { userId },
                    relations: ['institution'],
                });
                break;
            case enums_1.UserRole.ORGANISATION:
                profile = await this.orgRepo.findOne({ where: { userId } });
                break;
            case enums_1.UserRole.INSTITUTION:
                profile = await this.institutionProfileRepo.findOne({
                    where: { userId },
                    relations: ['institution'],
                });
                break;
            case enums_1.UserRole.SUPER_ADMIN:
                profile = await this.superAdminRepo.findOne({ where: { userId } });
                break;
        }
        const { passwordHash: _, ...safeUser } = user;
        return {
            ...safeUser,
            name: this.resolveUserDisplayName(user, profile),
            isAdmin: user.role === enums_1.UserRole.SUPER_ADMIN,
            profile,
        };
    }
    async buildAuthResult(user) {
        const tokens = await this.generateTokens(user);
        const authenticatedUser = await this.buildAuthenticatedUser(user.id);
        return { user: authenticatedUser, tokens };
    }
    async generateTokens(user) {
        const payload = { sub: user.id, email: user.email, role: user.role };
        const jwtOpts = {
            secret: this.config.get('jwt.secret'),
            expiresIn: this.config.get('jwt.expiresIn') ?? '15m',
        };
        const jwtRefreshOpts = {
            secret: this.config.get('jwt.refreshSecret'),
            expiresIn: this.config.get('jwt.refreshExpiresIn') ?? '7d',
        };
        const accessToken = this.jwtService.sign(payload, jwtOpts);
        const refreshToken = this.jwtService.sign(payload, jwtRefreshOpts);
        const refreshExpiresInDays = 7;
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + refreshExpiresInDays);
        await this.usersService.saveRefreshToken(user.id, refreshToken, expiresAt);
        return { accessToken, refreshToken };
    }
    resolveUserDisplayName(user, profile) {
        if (!profile) {
            return user.email;
        }
        if (this.hasFirstAndLastName(profile)) {
            const fullName = `${profile.firstName} ${profile.lastName}`.trim();
            return fullName || user.email;
        }
        if (this.hasName(profile)) {
            return profile.name || user.email;
        }
        if (this.hasInstitution(profile)) {
            return profile.institution?.name || user.email;
        }
        return user.email;
    }
    hasFirstAndLastName(profile) {
        return (typeof profile === 'object' &&
            profile !== null &&
            'firstName' in profile &&
            'lastName' in profile);
    }
    hasName(profile) {
        return typeof profile === 'object' && profile !== null && 'name' in profile;
    }
    hasInstitution(profile) {
        return (typeof profile === 'object' &&
            profile !== null &&
            'institution' in profile);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(5, (0, typeorm_1.InjectRepository)(patient_profile_entity_1.PatientProfile)),
    __param(6, (0, typeorm_1.InjectRepository)(doctor_profile_entity_1.DoctorProfile)),
    __param(7, (0, typeorm_1.InjectRepository)(organisation_profile_entity_1.OrganisationProfile)),
    __param(8, (0, typeorm_1.InjectRepository)(medical_institution_entity_1.MedicalInstitution)),
    __param(9, (0, typeorm_1.InjectRepository)(institution_profile_entity_1.InstitutionProfile)),
    __param(10, (0, typeorm_1.InjectRepository)(super_admin_profile_entity_1.SuperAdminProfile)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        jwt_1.JwtService,
        config_1.ConfigService,
        users_service_1.UsersService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map
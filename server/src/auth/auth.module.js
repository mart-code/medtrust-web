"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const users_module_1 = require("../users/users.module");
const user_entity_1 = require("../users/entities/user.entity");
const patient_profile_entity_1 = require("../patients/entities/patient-profile.entity");
const doctor_profile_entity_1 = require("../doctors/entities/doctor-profile.entity");
const organisation_profile_entity_1 = require("../organisations/entities/organisation-profile.entity");
const medical_institution_entity_1 = require("../institutions/entities/medical-institution.entity");
const institution_profile_entity_1 = require("../institutions/entities/institution-profile.entity");
const super_admin_profile_entity_1 = require("../institutions/entities/super-admin-profile.entity");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({}),
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.User,
                patient_profile_entity_1.PatientProfile,
                doctor_profile_entity_1.DoctorProfile,
                organisation_profile_entity_1.OrganisationProfile,
                medical_institution_entity_1.MedicalInstitution,
                institution_profile_entity_1.InstitutionProfile,
                super_admin_profile_entity_1.SuperAdminProfile,
            ]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map
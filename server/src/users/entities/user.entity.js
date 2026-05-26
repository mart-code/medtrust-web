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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../../common/enums");
const patient_profile_entity_1 = require("../../patients/entities/patient-profile.entity");
const doctor_profile_entity_1 = require("../../doctors/entities/doctor-profile.entity");
const organisation_profile_entity_1 = require("../../organisations/entities/organisation-profile.entity");
const institution_profile_entity_1 = require("../../institutions/entities/institution-profile.entity");
const super_admin_profile_entity_1 = require("../../institutions/entities/super-admin-profile.entity");
let User = class User {
    id;
    email;
    passwordHash;
    role;
    isEmailVerified;
    isActive;
    emailVerificationToken;
    passwordResetToken;
    passwordResetExpiresAt;
    createdAt;
    updatedAt;
    patientProfile;
    doctorProfile;
    organisationProfile;
    institutionProfile;
    superAdminProfile;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.UserRole }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isEmailVerified", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "emailVerificationToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "passwordResetToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], User.prototype, "passwordResetExpiresAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => patient_profile_entity_1.PatientProfile, (p) => p.user),
    __metadata("design:type", patient_profile_entity_1.PatientProfile)
], User.prototype, "patientProfile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => doctor_profile_entity_1.DoctorProfile, (d) => d.user),
    __metadata("design:type", doctor_profile_entity_1.DoctorProfile)
], User.prototype, "doctorProfile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => organisation_profile_entity_1.OrganisationProfile, (o) => o.user),
    __metadata("design:type", organisation_profile_entity_1.OrganisationProfile)
], User.prototype, "organisationProfile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => institution_profile_entity_1.InstitutionProfile, (i) => i.user),
    __metadata("design:type", institution_profile_entity_1.InstitutionProfile)
], User.prototype, "institutionProfile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => super_admin_profile_entity_1.SuperAdminProfile, (s) => s.user),
    __metadata("design:type", super_admin_profile_entity_1.SuperAdminProfile)
], User.prototype, "superAdminProfile", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
//# sourceMappingURL=user.entity.js.map
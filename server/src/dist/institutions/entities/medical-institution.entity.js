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
exports.MedicalInstitution = void 0;
const typeorm_1 = require("typeorm");
const enums_1 = require("../../common/enums");
const doctor_profile_entity_1 = require("../../doctors/entities/doctor-profile.entity");
let MedicalInstitution = class MedicalInstitution {
    id;
    name;
    description;
    address;
    latitude;
    longitude;
    phoneNumber;
    email;
    logoUrl;
    institutionType;
    approvalStatus;
    approvedAt;
    approvedById;
    createdByUserId;
    doctors;
    createdAt;
    updatedAt;
};
exports.MedicalInstitution = MedicalInstitution;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 8 }),
    __metadata("design:type", Number)
], MedicalInstitution.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 11, scale: 8 }),
    __metadata("design:type", Number)
], MedicalInstitution.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "logoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.InstitutionType,
        default: enums_1.InstitutionType.CLINIC,
    }),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "institutionType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.ApprovalStatus,
        default: enums_1.ApprovalStatus.PENDING,
    }),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "approvalStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], MedicalInstitution.prototype, "approvedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "approvedById", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicalInstitution.prototype, "createdByUserId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => doctor_profile_entity_1.DoctorProfile, (d) => d.institution),
    __metadata("design:type", Array)
], MedicalInstitution.prototype, "doctors", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], MedicalInstitution.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], MedicalInstitution.prototype, "updatedAt", void 0);
exports.MedicalInstitution = MedicalInstitution = __decorate([
    (0, typeorm_1.Entity)('medical_institutions')
], MedicalInstitution);
//# sourceMappingURL=medical-institution.entity.js.map
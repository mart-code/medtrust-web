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
exports.DoctorProfile = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const enums_1 = require("../../common/enums");
const medical_institution_entity_1 = require("../../institutions/entities/medical-institution.entity");
const patient_doctor_connection_entity_1 = require("../../connections/entities/patient-doctor-connection.entity");
const programme_enrollment_entity_1 = require("../../programmes/entities/programme-enrollment.entity");
let DoctorProfile = class DoctorProfile {
    id;
    user;
    userId;
    firstName;
    lastName;
    specialisation;
    licenseNumber;
    phoneNumber;
    bio;
    avatarUrl;
    yearsOfExperience;
    expertiseTags;
    approvalStatus;
    approvedAt;
    approvedById;
    institution;
    institutionId;
    connections;
    enrollments;
};
exports.DoctorProfile = DoctorProfile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], DoctorProfile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (u) => u.doctorProfile, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], DoctorProfile.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorProfile.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorProfile.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorProfile.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorProfile.prototype, "specialisation", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], DoctorProfile.prototype, "licenseNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DoctorProfile.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], DoctorProfile.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DoctorProfile.prototype, "avatarUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], DoctorProfile.prototype, "yearsOfExperience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-array', nullable: true }),
    __metadata("design:type", Array)
], DoctorProfile.prototype, "expertiseTags", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.ApprovalStatus,
        default: enums_1.ApprovalStatus.PENDING,
    }),
    __metadata("design:type", String)
], DoctorProfile.prototype, "approvalStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], DoctorProfile.prototype, "approvedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DoctorProfile.prototype, "approvedById", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medical_institution_entity_1.MedicalInstitution, (i) => i.doctors, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'institutionId' }),
    __metadata("design:type", medical_institution_entity_1.MedicalInstitution)
], DoctorProfile.prototype, "institution", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], DoctorProfile.prototype, "institutionId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => patient_doctor_connection_entity_1.PatientDoctorConnection, (c) => c.doctor),
    __metadata("design:type", Array)
], DoctorProfile.prototype, "connections", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => programme_enrollment_entity_1.ProgrammeEnrollment, (e) => e.doctor),
    __metadata("design:type", Array)
], DoctorProfile.prototype, "enrollments", void 0);
exports.DoctorProfile = DoctorProfile = __decorate([
    (0, typeorm_1.Entity)('doctor_profiles')
], DoctorProfile);
//# sourceMappingURL=doctor-profile.entity.js.map
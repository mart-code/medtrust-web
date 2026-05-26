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
exports.ProgrammeEnrollment = void 0;
const typeorm_1 = require("typeorm");
const programme_entity_1 = require("./programme.entity");
const patient_profile_entity_1 = require("../../patients/entities/patient-profile.entity");
const doctor_profile_entity_1 = require("../../doctors/entities/doctor-profile.entity");
const enums_1 = require("../../common/enums");
let ProgrammeEnrollment = class ProgrammeEnrollment {
    id;
    programme;
    programmeId;
    enrolledByRole;
    patient;
    patientId;
    doctor;
    doctorId;
    enrolledAt;
    status;
};
exports.ProgrammeEnrollment = ProgrammeEnrollment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProgrammeEnrollment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => programme_entity_1.Programme, (p) => p.enrollments, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'programmeId' }),
    __metadata("design:type", programme_entity_1.Programme)
], ProgrammeEnrollment.prototype, "programme", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProgrammeEnrollment.prototype, "programmeId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: enums_1.EnrolledByRole }),
    __metadata("design:type", String)
], ProgrammeEnrollment.prototype, "enrolledByRole", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_profile_entity_1.PatientProfile, (p) => p.enrollments, { nullable: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", patient_profile_entity_1.PatientProfile)
], ProgrammeEnrollment.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProgrammeEnrollment.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_profile_entity_1.DoctorProfile, (d) => d.enrollments, { nullable: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'doctorId' }),
    __metadata("design:type", doctor_profile_entity_1.DoctorProfile)
], ProgrammeEnrollment.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProgrammeEnrollment.prototype, "doctorId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], ProgrammeEnrollment.prototype, "enrolledAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.EnrollmentStatus,
        default: enums_1.EnrollmentStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], ProgrammeEnrollment.prototype, "status", void 0);
exports.ProgrammeEnrollment = ProgrammeEnrollment = __decorate([
    (0, typeorm_1.Entity)('programme_enrollments')
], ProgrammeEnrollment);
//# sourceMappingURL=programme-enrollment.entity.js.map
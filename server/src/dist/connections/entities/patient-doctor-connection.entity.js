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
exports.PatientDoctorConnection = void 0;
const typeorm_1 = require("typeorm");
const patient_profile_entity_1 = require("../../patients/entities/patient-profile.entity");
const doctor_profile_entity_1 = require("../../doctors/entities/doctor-profile.entity");
const enums_1 = require("../../common/enums");
let PatientDoctorConnection = class PatientDoctorConnection {
    id;
    patient;
    patientId;
    doctor;
    doctorId;
    status;
    requestedAt;
    respondedAt;
    notes;
};
exports.PatientDoctorConnection = PatientDoctorConnection;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Object)
], PatientDoctorConnection.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_profile_entity_1.PatientProfile, (p) => p.connections, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'patientId' }),
    __metadata("design:type", Object)
], PatientDoctorConnection.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Object)
], PatientDoctorConnection.prototype, "patientId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => doctor_profile_entity_1.DoctorProfile, (d) => d.connections, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'doctorId' }),
    __metadata("design:type", Object)
], PatientDoctorConnection.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Object)
], PatientDoctorConnection.prototype, "doctorId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.ConnectionStatus,
        default: enums_1.ConnectionStatus.PENDING,
    }),
    __metadata("design:type", Object)
], PatientDoctorConnection.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Object)
], PatientDoctorConnection.prototype, "requestedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Object)
], PatientDoctorConnection.prototype, "respondedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", Object)
], PatientDoctorConnection.prototype, "notes", void 0);
exports.PatientDoctorConnection = PatientDoctorConnection = __decorate([
    (0, typeorm_1.Entity)('patient_doctor_connections')
], PatientDoctorConnection);
//# sourceMappingURL=patient-doctor-connection.entity.js.map
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
exports.Programme = void 0;
const typeorm_1 = require("typeorm");
const organisation_profile_entity_1 = require("../../organisations/entities/organisation-profile.entity");
const enums_1 = require("../../common/enums");
const programme_enrollment_entity_1 = require("./programme-enrollment.entity");
let Programme = class Programme {
    id;
    organisation;
    organisationId;
    title;
    description;
    category;
    bannerUrl;
    status;
    startDate;
    endDate;
    maxParticipants;
    approvalStatus;
    approvedAt;
    approvedById;
    enrollments;
    createdAt;
    updatedAt;
};
exports.Programme = Programme;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Programme.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => organisation_profile_entity_1.OrganisationProfile, (o) => o.programmes, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'organisationId' }),
    __metadata("design:type", organisation_profile_entity_1.OrganisationProfile)
], Programme.prototype, "organisation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Programme.prototype, "organisationId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Programme.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], Programme.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Programme.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Programme.prototype, "bannerUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.ProgrammeStatus,
        default: enums_1.ProgrammeStatus.DRAFT,
    }),
    __metadata("design:type", String)
], Programme.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Programme.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Programme.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Programme.prototype, "maxParticipants", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: enums_1.ApprovalStatus,
        default: enums_1.ApprovalStatus.PENDING,
    }),
    __metadata("design:type", String)
], Programme.prototype, "approvalStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', nullable: true }),
    __metadata("design:type", Date)
], Programme.prototype, "approvedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Programme.prototype, "approvedById", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => programme_enrollment_entity_1.ProgrammeEnrollment, (e) => e.programme),
    __metadata("design:type", Array)
], Programme.prototype, "enrollments", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Programme.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz' }),
    __metadata("design:type", Date)
], Programme.prototype, "updatedAt", void 0);
exports.Programme = Programme = __decorate([
    (0, typeorm_1.Entity)('programmes')
], Programme);
//# sourceMappingURL=programme.entity.js.map
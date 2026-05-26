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
exports.InstitutionProfile = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const medical_institution_entity_1 = require("./medical-institution.entity");
let InstitutionProfile = class InstitutionProfile {
    id;
    user;
    userId;
    institution;
    institutionId;
};
exports.InstitutionProfile = InstitutionProfile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InstitutionProfile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (u) => u.institutionProfile, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], InstitutionProfile.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InstitutionProfile.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => medical_institution_entity_1.MedicalInstitution, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'institutionId' }),
    __metadata("design:type", medical_institution_entity_1.MedicalInstitution)
], InstitutionProfile.prototype, "institution", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InstitutionProfile.prototype, "institutionId", void 0);
exports.InstitutionProfile = InstitutionProfile = __decorate([
    (0, typeorm_1.Entity)('institution_profiles')
], InstitutionProfile);
//# sourceMappingURL=institution-profile.entity.js.map
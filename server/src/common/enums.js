"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionType = exports.AiAnalysisType = exports.MessageChannel = exports.EnrolledByRole = exports.EnrollmentStatus = exports.ConnectionStatus = exports.Gender = exports.ProgrammeStatus = exports.ApprovalStatus = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["PATIENT"] = "patient";
    UserRole["DOCTOR"] = "doctor";
    UserRole["ORGANISATION"] = "organisation";
    UserRole["INSTITUTION"] = "institution";
    UserRole["SUPER_ADMIN"] = "super_admin";
})(UserRole || (exports.UserRole = UserRole = {}));
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus["PENDING"] = "pending";
    ApprovalStatus["APPROVED"] = "approved";
    ApprovalStatus["REJECTED"] = "rejected";
})(ApprovalStatus || (exports.ApprovalStatus = ApprovalStatus = {}));
var ProgrammeStatus;
(function (ProgrammeStatus) {
    ProgrammeStatus["DRAFT"] = "draft";
    ProgrammeStatus["ACTIVE"] = "active";
    ProgrammeStatus["CLOSED"] = "closed";
})(ProgrammeStatus || (exports.ProgrammeStatus = ProgrammeStatus = {}));
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["OTHER"] = "other";
})(Gender || (exports.Gender = Gender = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["PENDING"] = "pending";
    ConnectionStatus["ACCEPTED"] = "accepted";
    ConnectionStatus["REJECTED"] = "rejected";
})(ConnectionStatus || (exports.ConnectionStatus = ConnectionStatus = {}));
var EnrollmentStatus;
(function (EnrollmentStatus) {
    EnrollmentStatus["ACTIVE"] = "active";
    EnrollmentStatus["WITHDRAWN"] = "withdrawn";
    EnrollmentStatus["COMPLETED"] = "completed";
})(EnrollmentStatus || (exports.EnrollmentStatus = EnrollmentStatus = {}));
var EnrolledByRole;
(function (EnrolledByRole) {
    EnrolledByRole["PATIENT"] = "patient";
    EnrolledByRole["DOCTOR"] = "doctor";
})(EnrolledByRole || (exports.EnrolledByRole = EnrolledByRole = {}));
var MessageChannel;
(function (MessageChannel) {
    MessageChannel["DIRECT"] = "direct";
    MessageChannel["PROGRAMME"] = "programme";
})(MessageChannel || (exports.MessageChannel = MessageChannel = {}));
var AiAnalysisType;
(function (AiAnalysisType) {
    AiAnalysisType["SYMPTOM_TEXT"] = "symptom_text";
    AiAnalysisType["IMAGE_ANALYSIS"] = "image_analysis";
})(AiAnalysisType || (exports.AiAnalysisType = AiAnalysisType = {}));
var InstitutionType;
(function (InstitutionType) {
    InstitutionType["CLINIC"] = "clinic";
    InstitutionType["HOSPITAL"] = "hospital";
    InstitutionType["LAB"] = "lab";
    InstitutionType["PHARMACY"] = "pharmacy";
    InstitutionType["OTHER"] = "other";
})(InstitutionType || (exports.InstitutionType = InstitutionType = {}));
//# sourceMappingURL=enums.js.map
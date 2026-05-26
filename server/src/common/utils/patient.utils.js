"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizePatient = sanitizePatient;
function sanitizePatient(patient) {
    const firstInitial = patient.firstName?.[0]?.toUpperCase() ?? '?';
    const lastInitial = patient.lastName?.[0]?.toUpperCase() ?? '?';
    return {
        id: patient.id,
        initials: `${firstInitial}.${lastInitial}.`,
        gender: patient.gender,
        avatarUrl: patient.avatarUrl,
    };
}
//# sourceMappingURL=patient.utils.js.map
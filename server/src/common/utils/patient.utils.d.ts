import { PatientProfile } from '../../patients/entities/patient-profile.entity';
export declare function sanitizePatient(patient: PatientProfile): {
    id: string;
    initials: string;
    gender: import("../enums").Gender;
    avatarUrl: string;
};

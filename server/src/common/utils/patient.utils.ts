import { PatientProfile } from '../../patients/entities/patient-profile.entity';

/**
 * Returns a safe view of a patient profile for non-patient roles.
 * Only exposes initials — never the full name.
 */
export function sanitizePatient(patient: PatientProfile) {
  const firstInitial = patient.firstName?.[0]?.toUpperCase() ?? '?';
  const lastInitial = patient.lastName?.[0]?.toUpperCase() ?? '?';
  return {
    id: patient.id,
    initials: `${firstInitial}.${lastInitial}.`,
    gender: patient.gender,
    avatarUrl: patient.avatarUrl,
  };
}

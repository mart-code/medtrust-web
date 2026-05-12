export enum UserRole {
  PATIENT = 'patient',
  DOCTOR = 'doctor',
  ORGANISATION = 'organisation',
  INSTITUTION = 'institution',
  SUPER_ADMIN = 'super_admin',
}

export enum ApprovalStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

export enum ProgrammeStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  CLOSED = 'closed',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export enum ConnectionStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export enum EnrollmentStatus {
  ACTIVE = 'active',
  WITHDRAWN = 'withdrawn',
  COMPLETED = 'completed',
}

export enum EnrolledByRole {
  PATIENT = 'patient',
  DOCTOR = 'doctor',
}

export enum MessageChannel {
  DIRECT = 'direct',
  PROGRAMME = 'programme',
}

export enum AiAnalysisType {
  SYMPTOM_TEXT = 'symptom_text',
  IMAGE_ANALYSIS = 'image_analysis',
}

export enum InstitutionType {
  CLINIC = 'clinic',
  HOSPITAL = 'hospital',
  LAB = 'lab',
  PHARMACY = 'pharmacy',
  OTHER = 'other',
}

export type UserRole =
  | 'patient'
  | 'doctor'
  | 'organisation'
  | 'institution'
  | 'super_admin';

export type ApprovalStatus = 'pending' | 'approved' | 'rejected';
export type ProgrammeStatus = 'draft' | 'active' | 'closed';
export type ConnectionStatus = 'pending' | 'accepted' | 'rejected';
export type Gender = 'male' | 'female' | 'other';

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isAdmin: boolean;
  isEmailVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  profile:
    | PatientProfile
    | DoctorProfile
    | OrganisationProfile
    | InstitutionProfile
    | SuperAdminProfile
    | null;
}

export interface PatientProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  gender?: Gender;
  phoneNumber?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  avatarUrl?: string;
  medicalHistory?: string;
  allergies?: string;
}

export interface DoctorProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  specialisation: string;
  licenseNumber: string;
  phoneNumber?: string;
  bio?: string;
  avatarUrl?: string;
  yearsOfExperience?: number;
  expertiseTags?: string[];
  approvalStatus: ApprovalStatus;
  institutionId?: string;
  institution?: MedicalInstitution;
}

export interface OrganisationProfile {
  id: string;
  userId: string;
  name: string;
  description?: string;
  website?: string;
  logoUrl?: string;
  registrationNumber: string;
  phoneNumber?: string;
  address?: string;
  approvalStatus: ApprovalStatus;
}

export interface MedicalInstitution {
  id: string;
  name: string;
  description?: string;
  address: string;
  latitude: number;
  longitude: number;
  phoneNumber?: string;
  email?: string;
  logoUrl?: string;
  institutionType: string;
  approvalStatus: ApprovalStatus;
}

export interface InstitutionProfile {
  id: string;
  userId: string;
  institutionId: string;
  institution: MedicalInstitution;
}

export interface SuperAdminProfile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
}

export interface Programme {
  id: string;
  organisationId: string;
  title: string;
  description: string;
  category?: string;
  bannerUrl?: string;
  status: ProgrammeStatus;
  startDate?: string;
  endDate?: string;
  maxParticipants?: number;
  approvalStatus: ApprovalStatus;
  createdAt: string;
}

export interface PatientDoctorConnection {
  id: string;
  patientId: string;
  doctorId: string;
  status: ConnectionStatus;
  requestedAt: string;
  respondedAt?: string;
  notes?: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  attachmentUrl?: string;
  isAnnouncement: boolean;
  readAt?: string;
  createdAt: string;
}

export interface Conversation {
  id: string;
  channel: 'direct' | 'programme';
  patientId?: string;
  doctorId?: string;
  programmeId?: string;
  createdAt: string;
  messages?: Message[];
}

export interface Notification {
  id: string;
  type: string;
  title: string;
  body: string;
  isRead: boolean;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
}

export interface SanitizedPatient {
  id: string;
  initials: string;
  gender?: Gender;
  avatarUrl?: string;
}

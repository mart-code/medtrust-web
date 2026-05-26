import { UserRole } from '../../common/enums';
import { PatientProfile } from '../../patients/entities/patient-profile.entity';
import { DoctorProfile } from '../../doctors/entities/doctor-profile.entity';
import { OrganisationProfile } from '../../organisations/entities/organisation-profile.entity';
import { InstitutionProfile } from '../../institutions/entities/institution-profile.entity';
import { SuperAdminProfile } from '../../institutions/entities/super-admin-profile.entity';
export declare class User {
    id: string;
    email: string;
    passwordHash: string;
    role: UserRole;
    isEmailVerified: boolean;
    isActive: boolean;
    emailVerificationToken: string;
    passwordResetToken: string;
    passwordResetExpiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    patientProfile: PatientProfile;
    doctorProfile: DoctorProfile;
    organisationProfile: OrganisationProfile;
    institutionProfile: InstitutionProfile;
    superAdminProfile: SuperAdminProfile;
}

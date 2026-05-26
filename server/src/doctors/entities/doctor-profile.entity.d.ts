import { User } from '../../users/entities/user.entity';
import { ApprovalStatus } from '../../common/enums';
import { MedicalInstitution } from '../../institutions/entities/medical-institution.entity';
import { PatientDoctorConnection } from '../../connections/entities/patient-doctor-connection.entity';
import { ProgrammeEnrollment } from '../../programmes/entities/programme-enrollment.entity';
export declare class DoctorProfile {
    id: string;
    user: User;
    userId: string;
    firstName: string;
    lastName: string;
    specialisation: string;
    licenseNumber: string;
    phoneNumber: string;
    bio: string;
    avatarUrl: string;
    yearsOfExperience: number;
    expertiseTags: string[];
    approvalStatus: ApprovalStatus;
    approvedAt: Date;
    approvedById: string;
    institution: MedicalInstitution;
    institutionId: string;
    connections: PatientDoctorConnection[];
    enrollments: ProgrammeEnrollment[];
}

import { ApprovalStatus, InstitutionType } from '../../common/enums';
import { DoctorProfile } from '../../doctors/entities/doctor-profile.entity';
export declare class MedicalInstitution {
    id: string;
    name: string;
    description: string;
    address: string;
    latitude: number;
    longitude: number;
    phoneNumber: string;
    email: string;
    logoUrl: string;
    institutionType: InstitutionType;
    approvalStatus: ApprovalStatus;
    approvedAt: Date;
    approvedById: string;
    createdByUserId: string;
    doctors: DoctorProfile[];
    createdAt: Date;
    updatedAt: Date;
}

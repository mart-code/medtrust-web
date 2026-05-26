import { User } from '../../users/entities/user.entity';
import { MedicalInstitution } from './medical-institution.entity';
export declare class InstitutionProfile {
    id: string;
    user: User;
    userId: string;
    institution: MedicalInstitution;
    institutionId: string;
}

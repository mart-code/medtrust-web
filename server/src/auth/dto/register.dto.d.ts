import { UserRole } from '../../common/enums';
export declare class RegisterDto {
    email: string;
    password: string;
    role: UserRole;
    firstName?: string;
    lastName?: string;
    specialisation?: string;
    licenseNumber?: string;
    organisationName?: string;
    registrationNumber?: string;
    institutionName?: string;
    institutionAddress?: string;
    latitude?: number;
    longitude?: number;
}

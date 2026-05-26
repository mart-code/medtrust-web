import { User } from '../../users/entities/user.entity';
import { ApprovalStatus } from '../../common/enums';
import { Programme } from '../../programmes/entities/programme.entity';
export declare class OrganisationProfile {
    id: string;
    user: User;
    userId: string;
    name: string;
    description: string;
    website: string;
    logoUrl: string;
    registrationNumber: string;
    phoneNumber: string;
    address: string;
    approvalStatus: ApprovalStatus;
    approvedAt: Date;
    approvedById: string;
    programmes: Programme[];
}

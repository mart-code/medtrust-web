import { OrganisationProfile } from '../../organisations/entities/organisation-profile.entity';
import { ApprovalStatus, ProgrammeStatus } from '../../common/enums';
import { ProgrammeEnrollment } from './programme-enrollment.entity';
export declare class Programme {
    id: string;
    organisation: OrganisationProfile;
    organisationId: string;
    title: string;
    description: string;
    category: string;
    bannerUrl: string;
    status: ProgrammeStatus;
    startDate: Date;
    endDate: Date;
    maxParticipants: number;
    approvalStatus: ApprovalStatus;
    approvedAt: Date;
    approvedById: string;
    enrollments: ProgrammeEnrollment[];
    createdAt: Date;
    updatedAt: Date;
}

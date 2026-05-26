import { Programme } from './programme.entity';
import { PatientProfile } from '../../patients/entities/patient-profile.entity';
import { DoctorProfile } from '../../doctors/entities/doctor-profile.entity';
import { EnrolledByRole, EnrollmentStatus } from '../../common/enums';
export declare class ProgrammeEnrollment {
    id: string;
    programme: Programme;
    programmeId: string;
    enrolledByRole: EnrolledByRole;
    patient: PatientProfile;
    patientId: string;
    doctor: DoctorProfile;
    doctorId: string;
    enrolledAt: Date;
    status: EnrollmentStatus;
}

import { User } from '../../users/entities/user.entity';
import { Gender } from '../../common/enums';
import { PatientDoctorConnection } from '../../connections/entities/patient-doctor-connection.entity';
import { ProgrammeEnrollment } from '../../programmes/entities/programme-enrollment.entity';
export declare class PatientProfile {
    id: string;
    user: User;
    userId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: Gender;
    phoneNumber: string;
    address: string;
    latitude: number;
    longitude: number;
    avatarUrl: string;
    medicalHistory: string;
    allergies: string;
    connections: PatientDoctorConnection[];
    enrollments: ProgrammeEnrollment[];
}

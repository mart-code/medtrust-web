import { PatientProfile } from '../../patients/entities/patient-profile.entity';
import { DoctorProfile } from '../../doctors/entities/doctor-profile.entity';
import { ConnectionStatus } from '../../common/enums';
export declare class PatientDoctorConnection {
    id?: string | null;
    patient?: PatientProfile | null;
    patientId?: string | null;
    doctor?: DoctorProfile | null;
    doctorId?: string | null;
    status?: ConnectionStatus | null;
    requestedAt?: Date | null;
    respondedAt?: Date | null;
    notes?: string | null;
}

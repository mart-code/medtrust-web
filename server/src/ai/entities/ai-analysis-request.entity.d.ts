import { User } from '../../users/entities/user.entity';
import { AiAnalysisType } from '../../common/enums';
export declare class AiAnalysisRequest {
    id: string;
    user: User;
    userId: string;
    type: AiAnalysisType;
    inputText: string;
    imageUrl: string;
    imageCategory: string;
    response: Record<string, unknown>;
    tokensUsed: number;
    processingTimeMs: number;
    createdAt: Date;
}

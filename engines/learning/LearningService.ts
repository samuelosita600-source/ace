import learningEngine from "./LearningEngine";
import { ReflectionResult } from "@/engines/reflection/ReflectionEngine";

export class LearningService {
  public async process(
    reflection: ReflectionResult
  ): Promise<void> {
    await learningEngine.process(reflection);
  }
}

const learningService = new LearningService();

export default learningService;
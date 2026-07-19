import emotionEngine, { EmotionAnalysis } from "./EmotionEngine";

export class EmotionService {
  public analyze(text: string): EmotionAnalysis {
    return emotionEngine.analyze(text);
  }
}

const emotionService = new EmotionService();

export default emotionService;

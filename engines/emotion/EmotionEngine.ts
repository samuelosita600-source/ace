import { EmotionState } from "./EmotionTypes";

import emotionDetector from "./EmotionDetector";

export class EmotionEngine {

  public async analyze(
      message: string
        ): Promise<EmotionState> {

            return emotionDetector.detect(message);

              }

              }

              const emotionEngine = new EmotionEngine();

              export default emotionEngine;
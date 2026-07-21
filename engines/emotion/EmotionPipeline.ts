import { EmotionState } from "./EmotionTypes";

import emotionEngine from "./EmotionEngine";

export class EmotionPipeline {

  public async execute(
      message: string
        ): Promise<EmotionState> {

            return emotionEngine.analyze(message);

              }

              }

              const emotionPipeline = new EmotionPipeline();

              export default emotionPipeline;
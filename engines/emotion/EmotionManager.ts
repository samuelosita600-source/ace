import { EmotionState } from "./EmotionTypes";

import emotionPipeline from "./EmotionPipeline";

export class EmotionManager {

  public async analyze(
      message: string
        ): Promise<EmotionState> {

            return emotionPipeline.execute(message);

              }

              }

              const emotionManager = new EmotionManager();

              export default emotionManager;
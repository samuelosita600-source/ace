import { Emotion, EmotionState } from "./EmotionTypes";

export class EmotionDetector {

  public async detect(
      message: string
        ): Promise<EmotionState> {

            const text = message.toLowerCase();

                let primary = Emotion.Neutral;

                    if (
                          text.includes("happy") ||
                                text.includes("great") ||
                                      text.includes("awesome")
                                          ) {

                                                primary = Emotion.Happy;

                                                    }

                                                        if (
                                                              text.includes("sad") ||
                                                                    text.includes("depressed")
                                                                        ) {

                                                                              primary = Emotion.Sad;

                                                                                  }

                                                                                      if (
                                                                                            text.includes("angry") ||
                                                                                                  text.includes("annoyed")
                                                                                                      ) {

                                                                                                            primary = Emotion.Angry;

                                                                                                                }

                                                                                                                    return {

                                                                                                                          primary,

                                                                                                                                confidence: 0.95,

                                                                                                                                      intensity: 0.7,

                                                                                                                                            timestamp: new Date()

                                                                                                                                                };

                                                                                                                                                  }

                                                                                                                                                  }

                                                                                                                                                  const emotionDetector = new EmotionDetector();

                                                                                                                                                  export default emotionDetector;
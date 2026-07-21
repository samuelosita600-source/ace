export enum Emotion {

      Neutral = "neutral",

        Happy = "happy",

          Excited = "excited",

            Calm = "calm",

              Curious = "curious",

                Confident = "confident",

                  Sad = "sad",

                    Angry = "angry",

                      Frustrated = "frustrated",

                        Worried = "worried"

                        }

                        export interface EmotionState {

                          primary: Emotion;

                            confidence: number;

                              intensity: number;

                                timestamp: Date;

                                }
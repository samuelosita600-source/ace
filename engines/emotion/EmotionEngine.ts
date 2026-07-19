export enum EmotionState {
  Neutral = "neutral",
  Happy = "happy",
  Excited = "excited",
  Curious = "curious",
  Confused = "confused",
  Frustrated = "frustrated",
  Sad = "sad",
  Angry = "angry",
}

export interface EmotionAnalysis {
  state: EmotionState;
  confidence: number;
}

export class EmotionEngine {
  public analyze(text: string): EmotionAnalysis {
    console.log(`Analyzing emotion: ${text}`);

    return {
      state: EmotionState.Neutral,
      confidence: 1,
    };
  }
}

const emotionEngine = new EmotionEngine();

export default emotionEngine;

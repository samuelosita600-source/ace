import { ReasoningContext } from "@/engines/reasoning/ReasoningTypes";
import { AIResponse } from "@/engines/ai/interfaces/AIResponse";

export interface BrainInput {
  context: ReasoningContext;
  }

  export interface BrainOutput {
    response: AIResponse;
      context: ReasoningContext;
      }

      export interface BrainState {
        initialized: boolean;
          ready: boolean;
          }
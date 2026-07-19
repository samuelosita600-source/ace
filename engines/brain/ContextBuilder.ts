import memoryService from "@/engines/memory";
import identityService from "@/engines/identity";
import personalityService from "@/engines/personality";
import relationshipService from "@/engines/relationship";
import emotionService from "@/engines/emotion";
import type { ReasoningContext } from "@/engines/reasoning/ReasoningContext";

export class ContextBuilder {
  public async build(
    userId: string,
    message: string,
    architectureIntent?: string,
  ): Promise<ReasoningContext> {
    void identityService.getProfile();
    void personalityService.getProfile();
    const relationship = relationshipService.getProfile(userId);
    const emotion = emotionService.analyze(message);
    const memories = await memoryService.search(message);

    return {
      userId,
      message,
      normalizedMessage: message.toLowerCase().trim(),
      timestamp: new Date(),
      architectureIntent,
      contextAwareness: {
        userId,
        message,
        timestamp: new Date(),
        hasMemory: Array.isArray(memories)
          ? memories.length > 0
          : Boolean(memories),
        relationshipStage: relationship ? "established" : undefined,
        emotionalState: emotion ? "detected" : undefined,
        activeWorkflow: undefined,
        activeTask: undefined,
        architectureIntent,
      },
    };
  }
}

const contextBuilder = new ContextBuilder();

export default contextBuilder;

import type { ReasoningContext } from "@/engines/reasoning/ReasoningContext";
import { reasoningPipeline } from "@/engines/reasoning";
import promptBuilder from "./PromptBuilder";
import aiGateway from "@/engines/ai";
import criticService from "@/engines/critic";
import reflectionService from "@/engines/reflection/ReflectionService";
import learningService from "@/engines/learning";

export class BrainPipeline {
  public async execute(context: ReasoningContext): Promise<ReasoningContext> {
    const reasoningResult = reasoningPipeline.execute(context);

    const prompt = promptBuilder.build(
      {
        userId: reasoningResult.userId,
        message: reasoningResult.message,
        architectureIntent: reasoningResult.architectureIntent,
      },
      reasoningResult,
    );

    const response = await aiGateway.generate({ prompt });

    const reviewed = await criticService.review({
      prompt,
      response: response.text,
    });

    await reflectionService.reflect({
      userId: reasoningResult.userId,
      prompt,
      response: response.text,
    });

    await learningService.process({
      success: reviewed.approved,
      timestamp: new Date(),
      summary: reviewed.feedback,
    });

    return reasoningResult;
  }
}

const brainPipeline = new BrainPipeline();

export default brainPipeline;

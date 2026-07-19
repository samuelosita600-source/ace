import type { ReasoningContext } from "@/engines/reasoning/ReasoningContext";
import contextBuilder from "./ContextBuilder";
import brainPipeline from "./BrainPipeline";

export interface BrainRequest {
  userId: string;
  message: string;
  architectureIntent?: string;
}

export class ACEBrain {
  public async think(request: BrainRequest): Promise<ReasoningContext> {
    const context = await contextBuilder.build(
      request.userId,
      request.message,
      request.architectureIntent,
    );
    return brainPipeline.execute(context);
  }
}

const aceBrain = new ACEBrain();

export default aceBrain;

import emotionEngine from "@/engines/emotion/EmotionEngine";
import goalService from "@/engines/goal";
import intentService from "@/engines/intent";
import planningService from "@/engines/planning";
import priorityService from "@/engines/priority";
import riskService from "@/engines/risk";
import executionService from "@/engines/execution";
import type { ReasoningContext, ReasoningResult } from "./ReasoningTypes";
import reasoningExecutor from "./ReasoningExecutor";

export class ReasoningPipeline {
  /** Executes ACE's deterministic reasoning stages before model reasoning. */
  public async execute(context: ReasoningContext): Promise<ReasoningResult> {
    try {
      const classifiedContext = riskService.execute(
        priorityService.execute(
          intentService.execute(goalService.execute(context)),
        ),
      );
      const plannedContext = planningService.execute(classifiedContext);
      const executableContext = executionService.execute(plannedContext);
      const emotion = await emotionEngine.analyze(executableContext.message);

      return reasoningExecutor.execute({ ...executableContext, emotion });
    } catch (error) {
      console.error("[ReasoningPipeline]", error);
      throw error;
    }
  }

  /** Checks whether the deterministic reasoning pipeline is available. */
  public async isReady(): Promise<boolean> {
    return true;
  }
}

const reasoningPipeline = new ReasoningPipeline();

export default reasoningPipeline;
                                                                                              

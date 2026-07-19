import type { ReasoningContext } from "./ReasoningContext";

import { intentService } from "@/engines/intent";
import { goalService } from "@/engines/goal";
import { taskService } from "@/engines/task";
import { planningService } from "@/engines/planning";
import { executionService } from "@/engines/execution";
import { workflowService } from "@/engines/workflow";
import { priorityService } from "@/engines/priority";
import { riskService } from "@/engines/risk";

type ReasoningStage = {
  execute(context: ReasoningContext): ReasoningContext;
};

export class ReasoningPipeline {
  public execute(context: ReasoningContext): ReasoningContext {
    const normalizedContext = {
      ...context,
      normalizedMessage:
        context.normalizedMessage || context.message.toLowerCase().trim(),
      timestamp: context.timestamp || new Date(),
    };

    const pipeline: ReasoningStage[] = [
      intentService,
      goalService,
      taskService,
      planningService,
      executionService,
      workflowService,
      priorityService,
      riskService,
    ];

    return pipeline.reduce<ReasoningContext>(
      (currentContext, stage) => stage.execute(currentContext),
      normalizedContext,
    );
  }
}

const reasoningPipeline = new ReasoningPipeline();

export default reasoningPipeline;

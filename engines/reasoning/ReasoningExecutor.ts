import { ReasoningContext, ReasoningResult } from "./ReasoningTypes";

import reasoningAnalyzer from "./ReasoningAnalyzer";
import reasoningPlanner from "./ReasoningPlanner";

export class ReasoningExecutor {
  /**
   * Execute the reasoning process.
   */
  public async execute(context: ReasoningContext): Promise<ReasoningResult> {
    // Analyze the request
    const analysis = await reasoningAnalyzer.analyze(context);

    // Build a reasoning plan
    const reasoningPlan = await reasoningPlanner.plan(context, analysis);

    // Return the reasoning result
    return {
      ...context,
      analysis,
      reasoningPlan,
    } as ReasoningResult;
  }
}

const reasoningExecutor = new ReasoningExecutor();

export default reasoningExecutor;

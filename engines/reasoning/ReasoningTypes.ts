import type { ExecutionResult } from "@/engines/execution/ExecutionTypes";
import type { EmotionState } from "@/engines/emotion/EmotionTypes";
import type { GoalResult } from "@/engines/goal/GoalTypes";
import type { IntentResult } from "@/engines/intent/IntentTypes";
import type { PlanningResult } from "@/engines/planning/PlanningTypes";
import type { PriorityResult } from "@/engines/priority/PriorityTypes";
import type { RiskResult } from "@/engines/risk/RiskTypes";
import type { TaskResult } from "@/engines/task/TaskTypes";
import type { WorkflowResult } from "@/engines/workflow/WorkflowTypes";

export interface ReasoningContext {
  userId: string;
  message: string;

  conversationId?: string;

  memories?: unknown[];

  architectureIntent?: string;

  /** Enrichments produced by orchestration engines. */
  goal?: GoalResult;
  intent?: IntentResult;
  plan?: PlanningResult;
  priority?: PriorityResult;
  risk?: RiskResult;
  execution?: ExecutionResult;
  emotion?: EmotionState;
  task?: TaskResult;
  workflow?: WorkflowResult;
}

export interface ReasoningAnalysis {
  intent: string;

  confidence: number;

  sentiment?: string;
}

export interface ReasoningPlan {
  strategy: string;

  steps: string[];

  confidence: number;
}

export interface ReasoningResult extends ReasoningContext {
  analysis: ReasoningAnalysis;

  reasoningPlan: ReasoningPlan;
}

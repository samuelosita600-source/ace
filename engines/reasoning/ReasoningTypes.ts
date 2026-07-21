import type { TaskResult } from "@/engines/task/TaskTypes";
import type { WorkflowResult } from "@/engines/workflow/WorkflowTypes";

export interface ReasoningContext {
  userId: string;
  message: string;

  conversationId?: string;

  memories?: unknown[];

  architectureIntent?: string;

  /** Enrichments produced by the task and workflow engines. */
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

  plan: ReasoningPlan;
}

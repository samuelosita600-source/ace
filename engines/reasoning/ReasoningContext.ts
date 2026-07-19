import type { IntentResult } from "@/engines/intent";
import type { GoalResult } from "@/engines/goal";
import type { TaskResult } from "@/engines/task";
import type { PlanningResult } from "@/engines/planning";
import type { ExecutionResult } from "@/engines/execution";
import type { WorkflowResult } from "@/engines/workflow";
import type { PriorityResult } from "@/engines/priority";
import type { RiskResult } from "@/engines/risk";
import type { ContextSnapshot } from "@/engines/context-awareness/ContextAwarenessTypes";

export interface ReasoningContext {
  userId: string;
  message: string;
  normalizedMessage: string;
  timestamp: Date;

  problem?: string;
  architectureIntent?: string;

  intent?: IntentResult;
  goal?: GoalResult;
  task?: TaskResult;
  priority?: PriorityResult;
  risk?: RiskResult;
  workflow?: WorkflowResult;
  plan?: PlanningResult;
  execution?: ExecutionResult;
  contextAwareness?: ContextSnapshot;
}

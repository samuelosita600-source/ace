import type { ReasoningContext } from "@/engines/reasoning";
import workflowEngine from "./WorkflowEngine";
import type { WorkflowResult } from "./WorkflowTypes";

export class WorkflowService {
  public createWorkflow(message: string): WorkflowResult {
    return workflowEngine.createWorkflow(message);
  }

  public execute(context: ReasoningContext): ReasoningContext {
    return {
      ...context,
      workflow: this.createWorkflow(context.message),
    };
  }
}

export const workflowService = new WorkflowService();
export default workflowService;

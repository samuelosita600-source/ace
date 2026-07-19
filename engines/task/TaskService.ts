import type { ReasoningContext } from "@/engines/reasoning";
import taskEngine from "./TaskEngine";
import type { TaskResult } from "./TaskTypes";

export class TaskService {
  public identify(message: string): TaskResult {
    return taskEngine.identify(message);
  }

  public execute(context: ReasoningContext): ReasoningContext {
    context.task = this.identify(context.message);
    return context;
  }
}

export const taskService = new TaskService();
export default taskService;

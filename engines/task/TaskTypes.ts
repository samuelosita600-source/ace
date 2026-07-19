export enum TaskType {
      OneTime = "one_time",
        MultiStep = "multi_step",
          Project = "project",
            Recurring = "recurring",
            }

            export interface TaskResult {
              task: TaskType;
                confidence: number;
                  reason: string;
                  }
              
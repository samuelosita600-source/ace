export interface WorkflowTask {
      id: number;
        title: string;
          completed: boolean;
          }

          export interface WorkflowResult {
            workflowName: string;
              tasks: WorkflowTask[];
                progress: number;
                  confidence: number;
                  }

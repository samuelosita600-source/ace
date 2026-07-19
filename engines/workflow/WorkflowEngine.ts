import { ReasoningContext } from "@/engines/reasoning";
import {
  WorkflowResult,
    WorkflowTask,
    } from "./WorkflowTypes";

    export class WorkflowEngine {

      public execute(
          context: ReasoningContext
            ): ReasoningContext {

                context.workflow = this.createWorkflow(
                      context.message
                          );

                              return context;
                                }

                                  public createWorkflow(
                                      message: string
                                        ): WorkflowResult {

                                            const tasks = this.buildWorkflow(message);

                                                const completed = tasks.filter(
                                                      task => task.completed
                                                          ).length;

                                                              const progress =
                                                                    tasks.length === 0
                                                                            ? 0
                                                                                    : completed / tasks.length;

                                                                                        return {
                                                                                              workflowName: this.getWorkflowName(message),
                                                                                                    tasks,
                                                                                                          progress,
                                                                                                                confidence: 0.95,
                                                                                                                    };
                                                                                                                      }

                                                                                                                        private getWorkflowName(
                                                                                                                            message: string
                                                                                                                              ): string {

                                                                                                                                  const text = message.toLowerCase();

                                                                                                                                      if (
                                                                                                                                            text.includes("ace") ||
                                                                                                                                                  text.includes("project") ||
                                                                                                                                                        text.includes("system")
                                                                                                                                                            ) {
                                                                                                                                                                  return "Software Development";
                                                                                                                                                                      }

                                                                                                                                                                          if (
                                                                                                                                                                                text.includes("study") ||
                                                                                                                                                                                      text.includes("learn")
                                                                                                                                                                                          ) {
                                                                                                                                                                                                return "Learning";
                                                                                                                                                                                                    }

                                                                                                                                                                                                        return "General Workflow";
                                                                                                                                                                                                          }

                                                                                                                                                                                                            private buildWorkflow(
                                                                                                                                                                                                                message: string
                                                                                                                                                                                                                  ): WorkflowTask[] {

                                                                                                                                                                                                                      const text = message.toLowerCase();

                                                                                                                                                                                                                          if (
                                                                                                                                                                                                                                text.includes("build") ||
                                                                                                                                                                                                                                      text.includes("project") ||
                                                                                                                                                                                                                                            text.includes("system")
                                                                                                                                                                                                                                                ) {
                                                                                                                                                                                                                                                      return [
                                                                                                                                                                                                                                                              {
                                                                                                                                                                                                                                                                        id: 1,
                                                                                                                                                                                                                                                                                  title: "Design",
                                                                                                                                                                                                                                                                                            completed: false,
                                                                                                                                                                                                                                                                                                    },
                                                                                                                                                                                                                                                                                                            {
                                                                                                                                                                                                                                                                                                                      id: 2,
                                                                                                                                                                                                                                                                                                                                title: "Development",
                                                                                                                                                                                                                                                                                                                                          completed: false,
                                                                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                                                                          {
                                                                                                                                                                                                                                                                                                                                                                    id: 3,
                                                                                                                                                                                                                                                                                                                                                                              title: "Testing",
                                                                                                                                                                                                                                                                                                                                                                                        completed: false,
                                                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                                                                                                                                                                                                  id: 4,
                                                                                                                                                                                                                                                                                                                                                                                                                            title: "Deployment",
                                                                                                                                                                                                                                                                                                                                                                                                                                      completed: false,
                                                                                                                                                                                                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                                                                                                                                                                                                    ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                            return [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          id: 1,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  title: "Complete Request",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          completed: false,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      const workflowEngine = new WorkflowEngine();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      export default workflowEngine;
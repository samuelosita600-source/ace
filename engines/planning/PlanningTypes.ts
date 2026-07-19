export interface PlanningStep {
      id: number;
        title: string;
          completed: boolean;
          }

          export interface PlanningResult {
            steps: PlanningStep[];
              confidence: number;
              }

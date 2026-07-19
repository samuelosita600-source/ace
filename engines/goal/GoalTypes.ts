export enum GoalType {
  CREATE = "create",
  LEARN = "learn",
  IMPROVE = "improve",
  GENERAL = "general",
}

export interface GoalResult {
  type: GoalType;
  confidence: number;
  reason?: string;
}

export interface ContextSnapshot {
  userId: string;
  message: string;
  timestamp: Date;
  hasMemory: boolean;
  relationshipStage?: string;
  emotionalState?: string;
  activeWorkflow?: string;
  activeTask?: string;
  architectureIntent?: string;
}

export enum MemoryType {
  Conversation = "conversation",

  Preference = "preference",

  Relationship = "relationship",

  Goal = "goal",

  Fact = "fact",

  Event = "event",

  Reflection = "reflection",
}

export interface MemoryMetadata {
  importance: number;

  confidence: number;

  source: string;

  tags: string[];
}

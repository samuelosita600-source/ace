export enum MemoryType {
      Conversation = "conversation",
          Preference = "preference",
              Relationship = "relationship",
                  Goal = "goal",
                      Fact = "fact",
                          Event = "event",
                              Reflection = "reflection",
                                  Personality = "personality",
                                      Project = "project",
                                          Task = "task",
                                          }

                                          export enum MemoryScope {
                                              ShortTerm = "short-term",
                                                  LongTerm = "long-term",
                                                  }

                                                  export interface MemoryMetadata {
                                                      importance: number;
                                                          confidence: number;
                                                              source: string;
                                                                  tags: string[];
                                                                      createdAt: Date;
                                                                          updatedAt: Date;
                                                                              lastAccessedAt: Date;
                                                                                  accessCount: number;
                                                                                  }

                                                                                  export interface MemoryRecord {
                                                                                      id: string;
                                                                                          userId: string;
                                                                                              type: MemoryType;
                                                                                                  scope: MemoryScope;
                                                                                                      title: string;
                                                                                                          content: string;
                                                                                                              metadata: MemoryMetadata;
                                                                                                              }

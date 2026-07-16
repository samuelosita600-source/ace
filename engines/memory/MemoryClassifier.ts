export type MemoryCategory =
  | "profile"
    | "relationship"
      | "goal"
        | "event"
          | "preference"
            | "conversation"
              | "advice"
                | "other";

                export interface ClassifiedMemory {
                  category: MemoryCategory;
                    confidence: number;
                    }

                    export class MemoryClassifier {
                      public classify(text: string): ClassifiedMemory {
                          const content = text.toLowerCase();

                              if (
                                    content.includes("girlfriend") ||
                                          content.includes("boyfriend") ||
                                                content.includes("friend") ||
                                                      content.includes("wife") ||
                                                            content.includes("husband")
                                                                ) {
                                                                      return {
                                                                              category: "relationship",
                                                                                      confidence: 0.95,
                                                                                            };
                                                                                                }

                                                                                                    if (
                                                                                                          content.includes("goal") ||
                                                                                                                content.includes("want to") ||
                                                                                                                      content.includes("plan to")
                                                                                                                          ) {
                                                                                                                                return {
                                                                                                                                        category: "goal",
                                                                                                                                                confidence: 0.90,
                                                                                                                                                      };
                                                                                                                                                          }

                                                                                                                                                              if (
                                                                                                                                                                    content.includes("birthday") ||
                                                                                                                                                                          content.includes("tomorrow") ||
                                                                                                                                                                                content.includes("today") ||
                                                                                                                                                                                      content.includes("next week")
                                                                                                                                                                                          ) {
                                                                                                                                                                                                return {
                                                                                                                                                                                                        category: "event",
                                                                                                                                                                                                                confidence: 0.90,
                                                                                                                                                                                                                      };
                                                                                                                                                                                                                          }

                                                                                                                                                                                                                              if (
                                                                                                                                                                                                                                    content.includes("favorite") ||
                                                                                                                                                                                                                                          content.includes("prefer") ||
                                                                                                                                                                                                                                                content.includes("like")
                                                                                                                                                                                                                                                    ) {
                                                                                                                                                                                                                                                          return {
                                                                                                                                                                                                                                                                  category: "preference",
                                                                                                                                                                                                                                                                          confidence: 0.85,
                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                        return {
                                                                                                                                                                                                                                                                                              category: "other",
                                                                                                                                                                                                                                                                                                    confidence: 0.50,
                                                                                                                                                                                                                                                                                                        };
                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                          const memoryClassifier = new MemoryClassifier();

                                                                                                                                                                                                                                                                                                          export default memoryClassifier;
export interface Entity {
      type: string;
        value: string;
        }

        export class EntityEngine {
          public extract(text: string): Entity[] {
              const entities: Entity[] = [];

                  const lower = text.toLowerCase();

                      if (lower.includes("birthday")) {
                            entities.push({
                                    type: "event",
                                            value: "Birthday",
                                                  });
                                                      }

                                                          if (lower.includes("dad")) {
                                                                entities.push({
                                                                        type: "person",
                                                                                value: "Dad",
                                                                                      });
                                                                                          }

                                                                                              if (lower.includes("mom")) {
                                                                                                    entities.push({
                                                                                                            type: "person",
                                                                                                                    value: "Mom",
                                                                                                                          });
                                                                                                                              }

                                                                                                                                  if (lower.includes("girlfriend")) {
                                                                                                                                        entities.push({
                                                                                                                                                type: "relationship",
                                                                                                                                                        value: "Girlfriend",
                                                                                                                                                              });
                                                                                                                                                                  }

                                                                                                                                                                      if (lower.includes("friend")) {
                                                                                                                                                                            entities.push({
                                                                                                                                                                                    type: "relationship",
                                                                                                                                                                                            value: "Friend",
                                                                                                                                                                                                  });
                                                                                                                                                                                                      }

                                                                                                                                                                                                          return entities;
                                                                                                                                                                                                            }
                                                                                                                                                                                                            }

                                                                                                                                                                                                            const entityEngine = new EntityEngine();

                                                                                                                                                                                                            export default entityEngine;

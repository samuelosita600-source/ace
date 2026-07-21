import {
        MemoryRecord,
            MemoryScope,
            } from "./MemoryTypes";

            import memoryStore from "./MemoryStore";

            export class MemoryConsolidation {

                /**
                     * Move a short-term memory into long-term memory.
                          */
                              public async consolidate(
                                      memory: MemoryRecord
                                          ): Promise<MemoryRecord> {

                                                  if (memory.scope === MemoryScope.LongTerm) {
                                                              return memory;
                                                                      }

                                                                              const updatedMemory: MemoryRecord = {
                                                                                          ...memory,
                                                                                                      scope: MemoryScope.LongTerm,
                                                                                                                  metadata: {
                                                                                                                                  ...memory.metadata,
                                                                                                                                                  updatedAt: new Date(),
                                                                                                                                                              },
                                                                                                                                                                      };

                                                                                                                                                                              await memoryStore.update(updatedMemory);

                                                                                                                                                                                      return updatedMemory;
                                                                                                                                                                                          }

                                                                                                                                                                                              /**
                                                                                                                                                                                                   * Consolidate all memories that meet the requirements.
                                                                                                                                                                                                        */
                                                                                                                                                                                                            public async consolidateAll(): Promise<void> {

                                                                                                                                                                                                                    const memories = await memoryStore.findAll();

                                                                                                                                                                                                                            for (const memory of memories) {

                                                                                                                                                                                                                                        if (
                                                                                                                                                                                                                                                        memory.scope === MemoryScope.ShortTerm &&
                                                                                                                                                                                                                                                                        this.shouldConsolidate(memory)
                                                                                                                                                                                                                                                                                    ) {

                                                                                                                                                                                                                                                                                                    await this.consolidate(memory);

                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                /**
                                                                                                                                                                                                                                                                                                                                     * Decide whether a memory should become long-term.
                                                                                                                                                                                                                                                                                                                                          */
                                                                                                                                                                                                                                                                                                                                              private shouldConsolidate(
                                                                                                                                                                                                                                                                                                                                                      memory: MemoryRecord
                                                                                                                                                                                                                                                                                                                                                          ): boolean {

                                                                                                                                                                                                                                                                                                                                                                  if (memory.metadata.importance >= 8) {
                                                                                                                                                                                                                                                                                                                                                                              return true;
                                                                                                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                                                                                                              if (memory.metadata.accessCount >= 5) {
                                                                                                                                                                                                                                                                                                                                                                                                          return true;
                                                                                                                                                                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                                                                                                                                                                          if (memory.metadata.confidence >= 0.9) {
                                                                                                                                                                                                                                                                                                                                                                                                                                      return true;
                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                                                                                                                      return false;

                                                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                                                          const memoryConsolidation = new MemoryConsolidation();

                                                                                                                                                                                                                                                                                                                                                                                                                                                          export default memoryConsolidation;

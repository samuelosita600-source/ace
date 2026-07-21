import { MemoryRecord } from "./MemoryTypes";

import memoryStore from "./MemoryStore";
import memoryRetriever from "./MemoryRetriever";
import memoryRanking from "./MemoryRanking";
import memoryScorer from "./MemoryScorer";
import memoryConsolidation from "./MemoryConsolidation";
import memorySummarizer from "./MemorySummarizer";

export class MemoryEngine {

    /**
         * Save a memory.
              */
                  public async save(
                          memory: MemoryRecord
                              ): Promise<void> {

                                      const score = memoryScorer.score(memory);

                                              console.log(`[MemoryEngine] Score: ${score}`);

                                                      const existing = await memoryStore.findById(memory.id);

                                                              if (existing) {

                                                                          await memoryStore.update(memory);

                                                                                  } else {

                                                                                              await memoryStore.create(memory);

                                                                                                      }

                                                                                                          }

                                                                                                              /**
                                                                                                                   * Search memories.
                                                                                                                        */
                                                                                                                            public async search(
                                                                                                                                    query: string,
                                                                                                                                            limit: number = 10
                                                                                                                                                ): Promise<MemoryRecord[]> {

                                                                                                                                                        const memories =
                                                                                                                                                                    await memoryRetriever.search(query);

                                                                                                                                                                            return memoryRanking.top(
                                                                                                                                                                                        memories,
                                                                                                                                                                                                    query,
                                                                                                                                                                                                                limit
                                                                                                                                                                                                                        );

                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                /**
                                                                                                                                                                                                                                     * Get recent memories.
                                                                                                                                                                                                                                          */
                                                                                                                                                                                                                                              public async recent(
                                                                                                                                                                                                                                                      limit: number = 10
                                                                                                                                                                                                                                                          ): Promise<MemoryRecord[]> {

                                                                                                                                                                                                                                                                  return memoryRetriever.recent(limit);

                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                          /**
                                                                                                                                                                                                                                                                               * Get important memories.
                                                                                                                                                                                                                                                                                    */
                                                                                                                                                                                                                                                                                        public async important(
                                                                                                                                                                                                                                                                                                limit: number = 10
                                                                                                                                                                                                                                                                                                    ): Promise<MemoryRecord[]> {

                                                                                                                                                                                                                                                                                                            return memoryRetriever.important(limit);

                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                    /**
                                                                                                                                                                                                                                                                                                                         * Consolidate memories.
                                                                                                                                                                                                                                                                                                                              */
                                                                                                                                                                                                                                                                                                                                  public async consolidate(): Promise<void> {

                                                                                                                                                                                                                                                                                                                                          await memoryConsolidation.consolidateAll();

                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                  /**
                                                                                                                                                                                                                                                                                                                                                       * Summarize all memories.
                                                                                                                                                                                                                                                                                                                                                            */
                                                                                                                                                                                                                                                                                                                                                                public async summarize() {

                                                                                                                                                                                                                                                                                                                                                                        const memories =
                                                                                                                                                                                                                                                                                                                                                                                    await memoryStore.findAll();

                                                                                                                                                                                                                                                                                                                                                                                            return memorySummarizer.summarize(memories);

                                                                                                                                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                                                                                                                                    /**
                                                                                                                                                                                                                                                                                                                                                                                                         * Delete a memory.
                                                                                                                                                                                                                                                                                                                                                                                                              */
                                                                                                                                                                                                                                                                                                                                                                                                                  public async delete(
                                                                                                                                                                                                                                                                                                                                                                                                                          id: string
                                                                                                                                                                                                                                                                                                                                                                                                                              ): Promise<void> {

                                                                                                                                                                                                                                                                                                                                                                                                                                      await memoryStore.delete(id);

                                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                                              /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Get every memory.
                                                                                                                                                                                                                                                                                                                                                                                                                                                        */
                                                                                                                                                                                                                                                                                                                                                                                                                                                            public async getAll(): Promise<MemoryRecord[]> {

                                                                                                                                                                                                                                                                                                                                                                                                                                                                    return memoryStore.findAll();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        const memoryEngine = new MemoryEngine();

                                                                                                                                                                                                                                                                                                                                                                                                                                                                        export default memoryEngine;
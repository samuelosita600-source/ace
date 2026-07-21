import { MemoryRecord } from "./MemoryTypes";

export class MemoryStore {

    private readonly memories = new Map<string, MemoryRecord>();

        /**
             * Create a new memory.
                  */
                      public async create(memory: MemoryRecord): Promise<void> {
                              this.memories.set(memory.id, memory);
                                  }

                                      /**
                                           * Update an existing memory.
                                                */
                                                    public async update(memory: MemoryRecord): Promise<void> {
                                                            this.memories.set(memory.id, memory);
                                                                }

                                                                    /**
                                                                         * Delete a memory.
                                                                              */
                                                                                  public async delete(id: string): Promise<void> {
                                                                                          this.memories.delete(id);
                                                                                              }

                                                                                                  /**
                                                                                                       * Find a memory by ID.
                                                                                                            */
                                                                                                                public async findById(
                                                                                                                        id: string
                                                                                                                            ): Promise<MemoryRecord | null> {

                                                                                                                                    return this.memories.get(id) ?? null;
                                                                                                                                        }

                                                                                                                                            /**
                                                                                                                                                 * Return all memories.
                                                                                                                                                      */
                                                                                                                                                          public async findAll(): Promise<MemoryRecord[]> {
                                                                                                                                                                  return Array.from(this.memories.values());
                                                                                                                                                                      }

                                                                                                                                                                          /**
                                                                                                                                                                               * Return all memories belonging to a user.
                                                                                                                                                                                    */
                                                                                                                                                                                        public async findByUser(
                                                                                                                                                                                                userId: string
                                                                                                                                                                                                    ): Promise<MemoryRecord[]> {

                                                                                                                                                                                                            return Array.from(this.memories.values()).filter(
                                                                                                                                                                                                                        memory => memory.userId === userId
                                                                                                                                                                                                                                );
                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                        /**
                                                                                                                                                                                                                                             * Remove every stored memory.
                                                                                                                                                                                                                                                  */
                                                                                                                                                                                                                                                      public async clear(): Promise<void> {
                                                                                                                                                                                                                                                              this.memories.clear();
                                                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                                  const memoryStore = new MemoryStore();

                                                                                                                                                                                                                                                                  export default memoryStore;
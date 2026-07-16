import { BaseEngine } from "../core";

export interface Memory {
  id: string;
    type: string;
      title: string;
        content: string;
          importance: number;
            createdAt: Date;
            }

            export class MemoryEngine extends BaseEngine {
              private memories: Memory[] = [];

                constructor() {
                    super("Memory Engine", "1.0.0");
                      }

                        public add(memory: Memory): void {
                            this.memories.push(memory);
                              }

                                public getAll(): Memory[] {
                                    return this.memories;
                                      }

                                        public getById(id: string): Memory | undefined {
                                            return this.memories.find(memory => memory.id === id);
                                              }

                                                public delete(id: string): void {
                                                    this.memories = this.memories.filter(memory => memory.id !== id);
                                                      }

                                                        public clear(): void {
                                                            this.memories = [];
                                                              }
                                                              }

                                                              const memoryEngine = new MemoryEngine();

                                                              export default memoryEngine;
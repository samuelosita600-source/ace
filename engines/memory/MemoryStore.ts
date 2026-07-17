import { MemoryRecord } from "@/types";

export class MemoryStore {
  public async create(memory: MemoryRecord): Promise<void> {
      console.log("Creating memory:", memory);
        }

          public async update(memory: MemoryRecord): Promise<void> {
              console.log("Updating memory:", memory);
                }

                  public async delete(id: string): Promise<void> {
                      console.log("Deleting memory:", id);
                        }

                          public async findById(id: string): Promise<MemoryRecord | null> {
                              console.log("Finding memory:", id);

                                  return null;
                                    }

                                      public async findAll(): Promise<MemoryRecord[]> {
                                          return [];
                                            }
                                            }

                                            const memoryStore = new MemoryStore();

                                            export default memoryStore;
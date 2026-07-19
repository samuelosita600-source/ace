import { MemoryRecord } from "@/types";

export class MemoryIndexer {
  public async index(memory: MemoryRecord): Promise<void> {
    console.log(`Indexing memory: ${memory.id}`);
  }

  public async reindex(): Promise<void> {
    console.log("Reindexing all memories");
  }

  public async remove(memoryId: string): Promise<void> {
    console.log(`Removing indexed memory: ${memoryId}`);
  }
}

const memoryIndexer = new MemoryIndexer();

export default memoryIndexer;

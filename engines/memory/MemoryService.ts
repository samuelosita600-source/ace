import { MemoryRecord } from "@/types";

export class MemoryService {
  public async save(memory: MemoryRecord): Promise<void> {
    console.log("Saving memory:", memory);
  }

  public async search(query: string): Promise<MemoryRecord[]> {
    console.log("Searching memories:", query);
    return [];
  }

  public async getAll(): Promise<MemoryRecord[]> {
    return [];
  }

  public async delete(id: string): Promise<void> {
    console.log("Deleting memory:", id);
  }
}

const memoryService = new MemoryService();

export default memoryService;

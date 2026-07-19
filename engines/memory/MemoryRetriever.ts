import { MemoryRecord } from "@/types";

export class MemoryRetriever {
  public async search(query: string): Promise<MemoryRecord[]> {
    console.log(`Searching memories for: ${query}`);

    return [];
  }

  public async recent(limit: number = 10): Promise<MemoryRecord[]> {
    console.log(`Getting ${limit} recent memories`);

    return [];
  }

  public async important(limit: number = 10): Promise<MemoryRecord[]> {
    console.log(`Getting ${limit} important memories`);

    return [];
  }
}

const memoryRetriever = new MemoryRetriever();

export default memoryRetriever;

import { MemoryRecord } from "@/types";

import memoryStore from "./MemoryStore";
import memoryRetriever from "./MemoryRetriever";
import memoryIndexer from "./MemoryIndexer";
import memoryScorer from "./MemoryScorer";
import memoryLifecycle from "./MemoryLifecycle";

export class MemoryEngine {
  public async save(memory: MemoryRecord): Promise<void> {
    if (!memoryLifecycle.shouldStore(memory)) {
      return;
    }

    const score = memoryScorer.score(memory);

    console.log(`Memory score: ${score}`);

    await memoryStore.create(memory);

    await memoryIndexer.index(memory);
  }

  public async search(query: string): Promise<MemoryRecord[]> {
    return memoryRetriever.search(query);
  }

  public async recent(limit: number = 10): Promise<MemoryRecord[]> {
    return memoryRetriever.recent(limit);
  }

  public async important(limit: number = 10): Promise<MemoryRecord[]> {
    return memoryRetriever.important(limit);
  }
}

const memoryEngine = new MemoryEngine();

export default memoryEngine;

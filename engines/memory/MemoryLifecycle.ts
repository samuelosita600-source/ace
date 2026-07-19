import { MemoryRecord } from "@/types";

export class MemoryLifecycle {
  public shouldStore(memory: MemoryRecord): boolean {
    console.log(`Checking if memory should be stored: ${memory.id}`);
    return memory.content.trim().length > 0;
  }

  public shouldStrengthen(memory: MemoryRecord): boolean {
    console.log(`Checking if memory should be strengthened: ${memory.id}`);
    return memory.content.length > 100;
  }

  public shouldArchive(memory: MemoryRecord): boolean {
    console.log(`Checking if memory should be archived: ${memory.id}`);
    return false;
  }

  public shouldForget(memory: MemoryRecord): boolean {
    console.log(`Checking if memory should be forgotten: ${memory.id}`);
    return false;
  }
}

const memoryLifecycle = new MemoryLifecycle();

export default memoryLifecycle;

import { MemoryRecord } from "@/types";

export class MemoryScorer {
  public score(memory: MemoryRecord): number {
    let score = 50;

    const content = memory.content.toLowerCase();

    if (content.includes("goal")) {
      score += 20;
    }

    if (content.includes("important")) {
      score += 25;
    }

    if (content.includes("family")) {
      score += 15;
    }

    if (content.includes("friend")) {
      score += 10;
    }

    return Math.min(score, 100);
  }
}

const memoryScorer = new MemoryScorer();

export default memoryScorer;

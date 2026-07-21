import { BrainInput } from "./BrainTypes";

import memoryEngine from "@/engines/memory";

export class ContextBuilder {
  /**
   * Build the complete context for the Brain Engine.
   */
  public async build(input: BrainInput): Promise<BrainInput> {
    const memories = await memoryEngine.search(input.context.message);

    return {
      context: {
        ...input.context,
        memories,
      },
    };
  }

  /**
   * Update an existing context.
   */
  public async update(input: BrainInput): Promise<BrainInput> {
    return this.build(input);
  }
}

const contextBuilder = new ContextBuilder();

export default contextBuilder;

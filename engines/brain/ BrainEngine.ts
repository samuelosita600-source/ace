import { BrainInput, BrainOutput } from "./BrainTypes";

import reasoningEngine from "@/engines/reasoning";
import aiGateway from "@/engines/ai";

export class BrainEngine {

  /**
   * Process a user request through the Brain Engine.
   */
  public async process(
    input: BrainInput
  ): Promise<BrainOutput> {

    // Step 1 — Run reasoning
    const context =
      await reasoningEngine.process(input.context);

    // Step 2 — Generate AI response
    const response =
      await aiGateway.generate({
        prompt: context.message,
      });

    // Step 3 — Return result
    return {
      response,
      context,
    };

  }

  /**
   * Check whether the Brain Engine is ready.
   */
  public async isReady(): Promise<boolean> {

    try {

      return await aiGateway.isReady();

    } catch {

      return false;

    }

  }

}

const brainEngine = new BrainEngine();

export default brainEngine;
import { RuntimeRequest, RuntimeResponse } from "./RuntimeTypes";

import brainPipeline from "@/engines/brain";

export class RuntimeEngine {
  /**
   * Process a Runtime request.
   */
  public async process(request: RuntimeRequest): Promise<RuntimeResponse> {
    const result = await brainPipeline.execute({
      context: {
        userId: request.userId,

        message: request.message,

        conversationId: request.conversationId,
      },
    });

    return {
      response: result.response.text,

      success: true,

      timestamp: new Date(),
    };
  }

  /**
   * Health check.
   */
  public async isReady(): Promise<boolean> {
    return brainPipeline.isReady();
  }
}

const runtimeEngine = new RuntimeEngine();

export default runtimeEngine;

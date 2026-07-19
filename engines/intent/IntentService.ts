import type { ReasoningContext } from "@/engines/reasoning";
import { IntentEngine } from "./IntentEngine";
import type { IntentResult } from "./IntentTypes";

export class IntentService {
  private readonly engine = new IntentEngine();

  public identify(message: string): IntentResult {
    return this.engine.identify(message);
  }

  public execute(context: ReasoningContext): ReasoningContext {
    context.intent = this.identify(context.message);
    return context;
  }
}

export const intentService = new IntentService();
export default intentService;

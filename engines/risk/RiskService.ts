import type { ReasoningContext } from "@/engines/reasoning";
import riskEngine from "./RiskEngine";
import type { RiskResult } from "./RiskTypes";

export class RiskService {
  public assess(message: string): RiskResult {
    return riskEngine.assess(message);
  }

  public execute(context: ReasoningContext): ReasoningContext {
    context.risk = this.assess(context.message);
    return context;
  }
}

export const riskService = new RiskService();
export default riskService;

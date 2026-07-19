import strategyEngine, {
    StrategyResult,
    } from "./StrategyEngine";

    export class StrategyService {
      public choose(message: string): StrategyResult {
          return strategyEngine.choose(message);
            }
            }

            const strategyService = new StrategyService();

            export default strategyService;
        
import decisionEngine, {
      DecisionResult,
      } from "./DecisionEngine";

      export class DecisionService {
        public decide(message: string): DecisionResult {
            return decisionEngine.decide(message);
              }
              }

              const decisionService = new DecisionService();

              export default decisionService;
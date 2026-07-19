import responseCritic, {
      CriticRequest,
        CriticResult,
        } from "./ResponseCritic";

        export class CriticService {
          public async review(
              request: CriticRequest
                ): Promise<CriticResult> {
                    return responseCritic.review(request);
                      }
                      }

                      const criticService = new CriticService();

                      export default criticService;

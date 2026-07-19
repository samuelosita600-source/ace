export interface CriticRequest {
      prompt: string;
        response: string;
        }

        export interface CriticResult {
          approved: boolean;
            score: number;
              feedback: string;
              }

              export class ResponseCritic {
                public async review(
                    request: CriticRequest
                      ): Promise<CriticResult> {

                          console.log("Reviewing response...");

                              return {
                                    approved: true,
                                          score: 100,
                                                feedback: "Response approved.",
                                                    };
                                                      }
                                                      }

                                                      const responseCritic = new ResponseCritic();

                                                      export default responseCritic;
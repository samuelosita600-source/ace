import promptOrchestrator from "@/engines/orchestrator";
import aiGateway from "@/engines/ai";

export class ACERuntime {
  public async chat(message: string): Promise<string> {
      // Step 1: Build the AI prompt
          const prompt = await promptOrchestrator.generatePrompt(message);

              // Step 2: Send the prompt to the AI Gateway
                  const response = await aiGateway.generate({
                        prompt,
                            });

                                // Step 3: Return the AI's response
                                    return response.text;
                                      }
                                      }

                                      // Create a single shared instance of the runtime
                                      const ace = new ACERuntime();

                                      export default ace;
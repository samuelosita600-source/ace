import identityEngine from "../identity";
import userEngine from "../user";
import memoryEngine from "../memory";

export class PromptOrchestrator {
  public buildPrompt(userMessage: string) {
      return {
            identity: identityEngine.getAll(),
                  user: userEngine.getProfile(),
                        memories: memoryEngine.getAll(),
                              message: userMessage,
                                  };
                                    }
                                    }

                                    const promptOrchestrator = new PromptOrchestrator();

                                    export default promptOrchestrator;
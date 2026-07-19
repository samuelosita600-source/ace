import identityEngine from "../identity";
import userEngine from "../user";
import memoryEngine from "../memory";

export class PromptOrchestrator {
  public buildPrompt(userMessage: string): string {
    const data = {
      identity: identityEngine.getAll(),
      user: userEngine.getProfile(),
      memories: memoryEngine.getAll(),
      message: userMessage,
    };

    return JSON.stringify(data, null, 2);
  }
  public async generatePrompt(userMessage: string): Promise<string> {
    return this.buildPrompt(userMessage);
  }
}
const promptOrchestrator = new PromptOrchestrator();

export default promptOrchestrator;

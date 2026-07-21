import { BrainInput, BrainOutput } from "./BrainTypes";
import contextBuilder from "./ContextBuilder";
import promptBuilder from "./PromptBuilder";
import reasoningEngine from "@/engines/reasoning";
import aiGateway from "@/engines/ai";
import memoryEngine, { MemoryScope, MemoryType } from "@/engines/memory";
import reflectionService from "@/engines/reflection";
import learningService from "@/engines/learning";

/** The single orchestration boundary for an ACE interaction. */
export class BrainPipeline {
  public async execute(input: BrainInput): Promise<BrainOutput> {
    const enrichedInput = await contextBuilder.build(input);
    const reasoning = await reasoningEngine.execute(enrichedInput.context);
    const prompt = promptBuilder.build({ context: reasoning });
    const response = await aiGateway.generate({
      prompt,
      systemPrompt: promptBuilder.buildSystemPrompt(),
      temperature: 0.7,
      maxTokens: 2048,
    });

    await memoryEngine.save({
      id: crypto.randomUUID(),
      userId: reasoning.userId,
      type: MemoryType.Conversation,
      scope: MemoryScope.ShortTerm,
      title: "User message",
      content: reasoning.message,
      metadata: {
        importance: 0.5,
        confidence: 1,
        source: "brain-pipeline",
        tags: ["conversation"],
        createdAt: new Date(),
        updatedAt: new Date(),
        lastAccessedAt: new Date(),
        accessCount: 0,
      },
    });

    const reflection = await reflectionService.reflect({
      userId: reasoning.userId,
      prompt: reasoning.message,
      response: response.text,
    });
    await learningService.process(reflection);

    return { response, context: reasoning };
  }

  public async isReady(): Promise<boolean> {
    return aiGateway.isReady();
  }
}

const brainPipeline = new BrainPipeline();

export default brainPipeline;

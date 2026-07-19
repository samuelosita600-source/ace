import type { BrainRequest } from "./ACEbrain";
import type { ReasoningContext } from "@/engines/reasoning/ReasoningContext";

export class PromptBuilder {
  public build(request: BrainRequest, context: ReasoningContext): string {
    return `
Identity:
${JSON.stringify(context.identity, null, 2)}

Personality:
${JSON.stringify(context.personality, null, 2)}

Relationship:
${JSON.stringify(context.relationship, null, 2)}

Emotion:
${JSON.stringify(context.emotion, null, 2)}

Intent:
${JSON.stringify(context.intent, null, 2)}

Goal:
${JSON.stringify(context.goal, null, 2)}

Task:
${JSON.stringify(context.task, null, 2)}

Priority:
${JSON.stringify(context.priority, null, 2)}

Risk:
${JSON.stringify(context.risk, null, 2)}

Workflow:
${JSON.stringify(context.workflow, null, 2)}

Planning:
${JSON.stringify(context.planning, null, 2)}

Execution:
${JSON.stringify(context.execution, null, 2)}

Decision:
${JSON.stringify(context.decision, null, 2)}

Strategy:
${JSON.stringify(context.strategy, null, 2)}

Architecture Intent:
${context.architectureIntent}

Context Awareness:
${JSON.stringify(context.contextAwareness, null, 2)}

Relevant Memories:
${JSON.stringify(context.memories, null, 2)}

User:
${request.message}
`;
  }
}

const promptBuilder = new PromptBuilder();

export default promptBuilder;

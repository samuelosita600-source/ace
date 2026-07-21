import { Context } from "./ContextTypes";
import contextManager from "./ContextManager";

export class ContextPipeline {

  public async execute(
      context: Context
        ): Promise<Context> {

            return contextManager.getContext(context);

              }

              }

              const contextPipeline = new ContextPipeline();

              export default contextPipeline;
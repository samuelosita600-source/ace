import { Context } from "./ContextTypes";
import contextEngine from "./ContextEngine";

export class ContextManager {

  public async getContext(
      context: Context
        ): Promise<Context> {

            return contextEngine.create(context);

              }

              }

              const contextManager = new ContextManager();

              export default contextManager;
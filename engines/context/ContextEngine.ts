import { Context } from "./ContextTypes";
import contextBuilder from "./ContextBuilder";

export class ContextEngine {

  public async create(
      context: Context
        ): Promise<Context> {

            return contextBuilder.build(context);

              }

              }

              const contextEngine = new ContextEngine();

              export default contextEngine;
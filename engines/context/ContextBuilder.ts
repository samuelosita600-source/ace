import { Context } from "./ContextTypes";

export class ContextBuilder {

  public async build(
      context: Context
        ): Promise<Context> {

            return {
                  ...context,
                        timestamp: new Date(),
                            };

                              }

                              }

                              const contextBuilder = new ContextBuilder();

                              export default contextBuilder;
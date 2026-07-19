import contextAwarenessEngine from "./ContextAwarenessEngine";
import { ContextSnapshot } from "./ContextAwarenessTypes";

export class ContextAwarenessService {

  public build(
      userId: string,
          message: string
            ): ContextSnapshot {

                return contextAwarenessEngine.build(
                      userId,
                            message
                                );
                                  }
                                  }

                                  const contextAwarenessService =
                                    new ContextAwarenessService();

                                    export default contextAwarenessService;
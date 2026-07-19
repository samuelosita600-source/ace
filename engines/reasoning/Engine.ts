import { ReasoningContext } from "./ReasoningContext";

export interface Engine {

    execute(

            context: ReasoningContext

                ): ReasoningContext;

                }
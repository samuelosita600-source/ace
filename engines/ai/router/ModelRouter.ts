 import { AIRequest } from "../interfaces/AIRequest";
 import { AIResponse } from "../interfaces/AIResponse";

 import providerRegistry from "./ProviderRegistry";
 import providerHealth from "./ProviderHealth";
 import modelSelector from "./ModelSelector";

 export class ModelRouter {

     /**
          * Routes an AI request to the best provider and model.
               */
                   public async generate(
                           request: AIRequest
                               ): Promise<AIResponse> {

                                       // Get the highest-priority available provider.
                                               const provider = await providerRegistry.getPrimaryProvider();

                                                       // Verify the provider is healthy.
                                                               const health = await providerHealth.check(provider);

                                                                       if (!health.available) {
                                                                                   throw new Error(
                                                                                                   `AI provider "${provider.name}" is currently unavailable.`
                                                                                                               );
                                                                                                                       }

                                                                                                                               // Select the most suitable model.
                                                                                                                                       const model = modelSelector.select(request);

                                                                                                                                               try {

                                                                                                                                                           const response = await provider.generate({
                                                                                                                                                                           ...request,
                                                                                                                                                                                           model,
                                                                                                                                                                                                       });

                                                                                                                                                                                                                   // Record successful request.
                                                                                                                                                                                                                               providerHealth.recordSuccess(provider);

                                                                                                                                                                                                                                           return response;

                                                                                                                                                                                                                                                   } catch (error) {

                                                                                                                                                                                                                                                               // Record provider failure.
                                                                                                                                                                                                                                                                           providerHealth.recordFailure(provider);

                                                                                                                                                                                                                                                                                       throw error;

                                                                                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                                                       /**
                                                                                                                                                                                                                                                                                                            * Returns the active provider.
                                                                                                                                                                                                                                                                                                                 */
                                                                                                                                                                                                                                                                                                                     public async getCurrentProvider() {
                                                                                                                                                                                                                                                                                                                             return providerRegistry.getPrimaryProvider();
                                                                                                                                                                                                                                                                                                                                 }

                                                                                                                                                                                                                                                                                                                                     /**
                                                                                                                                                                                                                                                                                                                                          * Returns whether the active provider is healthy.
                                                                                                                                                                                                                                                                                                                                               */
                                                                                                                                                                                                                                                                                                                                                   public async isHealthy(): Promise<boolean> {

                                                                                                                                                                                                                                                                                                                                                           const provider = await providerRegistry.getPrimaryProvider();

                                                                                                                                                                                                                                                                                                                                                                   const health = await providerHealth.check(provider);

                                                                                                                                                                                                                                                                                                                                                                           return health.available;
                                                                                                                                                                                                                                                                                                                                                                               }

                                                                                                                                                                                                                                                                                                                                                                                   /**
                                                                                                                                                                                                                                                                                                                                                                                        * Returns every registered provider.
                                                                                                                                                                                                                                                                                                                                                                                             */
                                                                                                                                                                                                                                                                                                                                                                                                 public getProviders() {
                                                                                                                                                                                                                                                                                                                                                                                                         return providerRegistry.getProviders();
                                                                                                                                                                                                                                                                                                                                                                                                             }
                                                                                                                                                                                                                                                                                                                                                                                                             }

                                                                                                                                                                                                                                                                                                                                                                                                             const modelRouter = new ModelRouter();

                                                                                                                                                                                                                                                                                                                                                                                                             export default modelRouter;
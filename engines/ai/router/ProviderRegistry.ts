import { AIProvider } from "../interfaces/AIProvider";
import openRouterProvider from "../providers/OpenRouterProvider";

export class ProviderRegistry {
    private readonly providers: AIProvider[] = [
            openRouterProvider,
                ];

                    /**
                         * Returns all registered AI providers.
                              */
                                  public getProviders(): AIProvider[] {
                                          return this.providers;
                                              }

                                                  /**
                                                       * Returns the highest-priority available provider.
                                                            */
                                                                public async getPrimaryProvider(): Promise<AIProvider> {
                                                                        const sortedProviders = [...this.providers].sort(
                                                                                    (a, b) => a.priority - b.priority
                                                                                            );

                                                                                                    for (const provider of sortedProviders) {
                                                                                                                try {
                                                                                                                                if (await provider.isAvailable()) {
                                                                                                                                                    return provider;
                                                                                                                                                                    }
                                                                                                                                                                                } catch {
                                                                                                                                                                                                // Ignore failed providers and continue.
                                                                                                                                                                                                            }
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                            throw new Error("No AI providers are currently available.");
                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                    /**
                                                                                                                                                                                                                                         * Register a new provider.
                                                                                                                                                                                                                                              * (Useful later when adding Gemini, Claude, Kimi, Grok, etc.)
                                                                                                                                                                                                                                                   */
                                                                                                                                                                                                                                                       public register(provider: AIProvider): void {
                                                                                                                                                                                                                                                               this.providers.push(provider);
                                                                                                                                                                                                                                                                   }
                                                                                                                                                                                                                                                                   }

                                                                                                                                                                                                                                                                   const providerRegistry = new ProviderRegistry();

                                                                                                                                                                                                                                                                   export default providerRegistry;
import { AIProvider } from "../interfaces/AIProvider";

export interface ProviderStatus {
    provider: string;
        available: boolean;
            responseTime: number;
                successCount: number;
                    failureCount: number;
                        lastChecked: Date;
                        }

                        export class ProviderHealth {

                            private readonly status = new Map<string, ProviderStatus>();

                                public async check(provider: AIProvider): Promise<ProviderStatus> {

                                        const start = Date.now();

                                                let available = false;

                                                        try {
                                                                    available = await provider.isAvailable();
                                                                            } catch {
                                                                                        available = false;
                                                                                                }

                                                                                                        const previous = this.status.get(provider.name);

                                                                                                                const result: ProviderStatus = {
                                                                                                                            provider: provider.name,
                                                                                                                                        available,
                                                                                                                                                    responseTime: Date.now() - start,
                                                                                                                                                                successCount: previous?.successCount ?? 0,
                                                                                                                                                                            failureCount: previous?.failureCount ?? 0,
                                                                                                                                                                                        lastChecked: new Date()
                                                                                                                                                                                                };

                                                                                                                                                                                                        this.status.set(provider.name, result);

                                                                                                                                                                                                                return result;
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                        public recordSuccess(provider: AIProvider): void {

                                                                                                                                                                                                                                const current = this.status.get(provider.name);

                                                                                                                                                                                                                                        if (!current) return;

                                                                                                                                                                                                                                                current.successCount++;
                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                        public recordFailure(provider: AIProvider): void {

                                                                                                                                                                                                                                                                const current = this.status.get(provider.name);

                                                                                                                                                                                                                                                                        if (!current) return;

                                                                                                                                                                                                                                                                                current.failureCount++;
                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                        public get(providerName: string): ProviderStatus | undefined {
                                                                                                                                                                                                                                                                                                return this.status.get(providerName);
                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                        public getAll(): ProviderStatus[] {
                                                                                                                                                                                                                                                                                                                return [...this.status.values()];
                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                    const providerHealth = new ProviderHealth();

                                                                                                                                                                                                                                                                                                                    export default providerHealth;
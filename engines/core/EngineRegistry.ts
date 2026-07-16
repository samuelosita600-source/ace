import { BaseEngine } from "./BaseEngine";

export class EngineRegistry {
  private engines: Map<string, BaseEngine>;

    constructor() {
        this.engines = new Map();
          }

            public register(engine: BaseEngine): void {
                this.engines.set(engine.getName(), engine);
                  }

                    public get(name: string): BaseEngine | undefined {
                        return this.engines.get(name);
                          }

                            public getAll(): BaseEngine[] {
                                return Array.from(this.engines.values());
                                  }

                                    public isRegistered(name: string): boolean {
                                        return this.engines.has(name);
                                          }

                                            public unregister(name: string): void {
                                                this.engines.delete(name);
                                                  }
                                                  }

                                                  const engineRegistry = new EngineRegistry();

                                                  export default engineRegistry;
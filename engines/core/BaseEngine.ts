export abstract class BaseEngine {
  protected name: string;
  protected version: string;
  protected status: string;

  constructor(name: string, version: string) {
    this.name = name;
    this.version = version;
    this.status = "stopped";
  }

  public start(): void {
    this.status = "running";
  }

  public stop(): void {
    this.status = "stopped";
  }

  public getStatus(): string {
    return this.status;
  }

  public getName(): string {
    return this.name;
  }

  public getVersion(): string {
    return this.version;
  }
}

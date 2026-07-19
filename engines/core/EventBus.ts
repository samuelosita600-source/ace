type EventHandler = (payload: unknown) => void;

export class EventBus {
  private listeners: Map<string, EventHandler[]> = new Map();

  public subscribe(event: string, handler: EventHandler): void {
    const handlers = this.listeners.get(event) || [];
    handlers.push(handler);
    this.listeners.set(event, handlers);
  }

  public publish(event: string, payload?: unknown): void {
    const handlers = this.listeners.get(event);

    if (!handlers) return;

    handlers.forEach((handler) => handler(payload));
  }

  public unsubscribe(event: string, handler: EventHandler): void {
    const handlers = this.listeners.get(event);

    if (!handlers) return;

    this.listeners.set(
      event,
      handlers.filter((h) => h !== handler),
    );
  }
}

const eventBus = new EventBus();

export default eventBus;

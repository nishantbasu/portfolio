export class EventBus {
  private _bus: EventTarget;
  private _events = new Map<string, EventListener[]>();

  constructor(description = "") {
    this._bus = document.appendChild(document.createComment(description));
  }

  subscribe(eventName: string, callBack: EventListener): void {
    this._bus.addEventListener(eventName, callBack);
    const currentListener = this._events.get(eventName) ?? [];
    currentListener.push(callBack);
    this._events.set(eventName, currentListener);
  }

  unsubscribe(eventName: string, callBack: EventListener): void {
    this._bus.removeEventListener(eventName, callBack);
  }

  publish(eventName: string, detail: CustomEventInit = {}): void {
    this._bus.dispatchEvent(new CustomEvent(eventName, detail));
  }

  reset() {
    this._events.forEach(
      (listeners: Array<EventListener>, eventName: string) => {
        listeners?.forEach((listener: EventListener) => {
          this._bus.removeEventListener(eventName, listener);
        });
      }
    );
    this._events.clear();
  }
}

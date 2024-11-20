declare global {
  interface Window {
    portfolio: any;
  }
}

window.portfolio = window.portfolio || {};
window.portfolio.provider = window.portfolio.provider || {};
const store = window.portfolio.provider;

function requestService(key: string): any {
  const event = new CustomEvent("request-service", {
    detail: { key, service: undefined },
    bubbles: true,
    cancelable: true,
  });
  document.dispatchEvent(event);
  return event.detail.service;
}

function initializeProvider() {
  store._services = new Map();
  document.addEventListener("request-service", (event: any) => {
    const { key } = event.detail;
    if (store._services.has(key)) {
      event.detail.service = store._services.get(key);
      event.stopPropagation();
    }
  });
}

function provideService(key: string, service: any, shouldFreeze = true) {
  if (shouldFreeze) {
    Object.freeze(service);
  }
  store._services.set(key, service);
}

initializeProvider();

const SERVICE_PROVIDER_ID = {
  EVENT_BUS: "event-bus",
  PORTFOLIO_ROUTER: "portfolio-router"
};

export { requestService, provideService, SERVICE_PROVIDER_ID };

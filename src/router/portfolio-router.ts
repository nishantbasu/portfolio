import { Route, Router } from "@vaadin/router";
import { inject } from "../utility/decorators/decorators";
import { SERVICE_PROVIDER_ID } from "../utility/service-provider/service-provider-utility";
import { EventBus } from "../service/event-bus/event-bus";

export class PortfolioRouter {

  @inject(SERVICE_PROVIDER_ID.EVENT_BUS)
  private eventBus: EventBus;

  private router = new Router();

  public get baseUrl(): string {
    return this.router.baseUrl;
  }

  public get path(): any {
    return this.router.location?.route?.path;
  }

  initializeRoute = () => {
    const outlet = document.querySelector("#outlet");
    this.router.setOutlet(outlet);
    this.router.setRoutes(this.getRoutes());
  };

  navigate = (route: string) => {
    const url = `${this.router.baseUrl}${route}`;
    window.history.pushState({}, route, url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  private getRoutes(): Route[] {
    const routes: Route[] = [
      {
        path: "/",
        component: "portfolio-home"
      },
    ];

    return routes;
  }
}

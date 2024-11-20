import {
  SERVICE_PROVIDER_ID,
  requestService,
} from "../../utility/service-provider/service-provider-utility";

export function bootstrap() {
  const routerInstance = requestService(SERVICE_PROVIDER_ID.PORTFOLIO_ROUTER);
  routerInstance.initializeRoute();
}

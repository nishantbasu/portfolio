import { PortfolioRouter } from "../../router/portfolio-router";
import {
  provideService,
  SERVICE_PROVIDER_ID,
} from "./service-provider-utility";

export function initializeServiceProvider() {
  provideService(SERVICE_PROVIDER_ID.PORTFOLIO_ROUTER, new PortfolioRouter());
}

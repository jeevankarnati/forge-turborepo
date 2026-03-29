import { type TrpcRouter } from "../../../apps/main/src/routers/index";

declare global {
  type AppRouter = TrpcRouter;
}

export {};

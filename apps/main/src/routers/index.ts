import { procedure, router } from "../trpc";

export const trpcRouter = router({
  hello: procedure.query(() => "Hello from the server!"),
});

export type TrpcRouter = typeof trpcRouter;

import { procedure, router } from "@/trpc";

export const trpcRouter = router({
  hello: procedure.query(() => "Hello, world!"),
});

export type TrpcRouter = typeof trpcRouter;

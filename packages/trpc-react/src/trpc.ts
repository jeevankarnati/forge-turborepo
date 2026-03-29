/* oxlint-disable triple-slash-reference */
/// <reference path="../types/global.d.ts" />

import { customUiBridgeLink } from "@toolsplus/forge-trpc-link";
import { createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";

export const trpc = createTRPCReact<AppRouter>();
export const trpcClient = trpc.createClient({
  links: [
    customUiBridgeLink({
      resolverFunctionKey: "trpc-forge-turborepo",
      transformer: superjson,
    }),
  ],
});

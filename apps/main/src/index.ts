import Resolver from "@forge/resolver";
import { forgeRequestHandler, ResolverFunction } from "@toolsplus/forge-trpc-adapter";
import { trpcRouter } from "./routers";
import { createContext } from "./trpc";

const trpcResolver: ResolverFunction = forgeRequestHandler({
  router: trpcRouter,
  createContext,
});

export const handler = new Resolver().define("trpc-forge-turborepo", trpcResolver).getDefinitions();

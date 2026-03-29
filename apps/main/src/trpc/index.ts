import { type FullContext } from "@forge/bridge";
import { CreateForgeContextOptions } from "@toolsplus/forge-trpc-adapter";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

export const createContext = ({ request }: CreateForgeContextOptions) => {
  return request.context as FullContext;
};

const t = initTRPC.context<FullContext>().create({
  transformer: superjson,
});

export const router = t.router;
export const procedure = t.procedure;
export const mergeRouters = t.mergeRouters;

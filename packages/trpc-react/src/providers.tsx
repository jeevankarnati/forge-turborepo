// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { trpcReact, trpcReactClient } from "./trpc";

// export default function Providers({ children }: { children: React.ReactNode }) {
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         staleTime: Infinity,
//         // Automatically throw errors to trigger ErrorBoundary
//         throwOnError: true,
//         // Retry failed queries once before throwing
//         retry: 1,
//       },
//     },
//   });

//   return (
//     <trpcReact.Provider client={trpcReactClient} queryClient={queryClient}>
//       <QueryClientProvider client={queryClient}>
//         {children}
//         <ReactQueryDevtools initialIsOpen={false} />
//       </QueryClientProvider>
//     </trpcReact.Provider>
//   );
// }

export const test = "";

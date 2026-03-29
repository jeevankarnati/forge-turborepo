import { trpc } from "@repo/trpc-react/trpc";

export default function App() {
  const { data: hello } = trpc.hello.useQuery();
  return (
    <div className="p-4">
      <h1>Hello World</h1>
      <p className="text-sm">{hello ?? "…"}</p>
    </div>
  );
}

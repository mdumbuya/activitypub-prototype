import { Layout, SetupForm } from "../src/views.tsx";
import { HandlerContext } from "$fresh/server.ts";

// export const handler = {
//   GET: (ctx: HandlerContext) => {
//     return ctx.render();
//   },
// };

export default function SetupPage() {
  return (
    <Layout>
      <SetupForm />
    </Layout>
  );
}
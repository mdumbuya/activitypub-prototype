// routes/users/[username].tsx

import type { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import db from "../../src/db.ts";
import { Layout, Profile } from "../../src/views.tsx";
// routes/users/[username].tsx

// Define the handler
export const handler: Handlers = {
  async GET(req, ctx) {
    const { username } = ctx.params;

    // Fetch the user from the database
    const userQuery = [...db.query("SELECT * FROM users WHERE username = ?", [username])];

    if (userQuery.length === 0) {
      return new Response("User not found", { status: 404 });
    }

    const user = userQuery[0];
    const url = new URL(req.url);
    const handle = `@${user[1]}@${url.host}`; // user[1] is the username

    // Pass the username and handle to the page
    return ctx.render({
      name: user[1],
      handle,
    });
  },
};

// Define the page component
export default function UserPage({ data }: PageProps) {
  return (
    <Layout>
      <Profile name={data.name} handle={data.handle} />
    </Layout>
  );
}

import { Layout, SetupForm } from "../src/views.tsx";
import type { HandlerContext } from "$fresh/server.ts";
import db from "../src/db.ts";

export const handler = {
  GET(_req: Request, _ctx: HandlerContext) {
    // Check if an account already exists
    const existingUser = [...db.query("SELECT * FROM users LIMIT 1")];
    if (existingUser.length > 0) {
      return new Response(null, {
        status: 302,
        headers: { location: "/" },
      });
    }

    // Render the SetupForm
    return _ctx.render();
  },
  
  async POST(req: Request, ctx: HandlerContext) {
    // Check if an account already exists
    const existingUser = [...db.query("SELECT * FROM users LIMIT 1")];
    if (existingUser.length > 0) {
      return new Response(null, {
        status: 302,
        headers: { location: "/" },
      });
    }

    const formData = await req.formData();
    const username = formData.get("username");

    if (typeof username !== "string" || !username.match(/^[a-z0-9_-]{1,50}$/)) {
      return new Response(null, {
        status: 302,
        headers: { location: "/setup" },
      });
    }

    // Insert the new user into the database
    db.query("INSERT INTO users (username) VALUES (?)", [username]);

    return new Response(null, {
      status: 302,
      headers: { location: "/" },
    });
  },
};


export default function SetupPage() {
  return (
    <Layout>
      <SetupForm />
    </Layout>
  );
}
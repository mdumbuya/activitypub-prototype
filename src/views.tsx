import type { JSX } from "preact/jsx-runtime";

export const Layout = ({ children }: { children: JSX.Element }) => (
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="color-scheme" content="light dark" />
      <title>Microblog</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
      />
    </head>
    <body>
      <main class="container">{children}</main>
    </body>
  </html>
);

export const SetupForm = () => (
  <>
    <h1>Set up your microblog</h1>
    <form method="post" action="/setup">
      <fieldset>
        <label>
          Username
          <input
            type="text"
            name="username"
            required
            maxlength={50}
            pattern="^[a-z0-9_-]+$"
          />
        </label>
      </fieldset>
      <input type="submit" value="Setup" />
    </form>
  </>
);

export interface ProfileProps {
  name: string;
  handle: string;
}

export const Profile = ({ name, handle }: ProfileProps) => (
  <>
    <hgroup>
      <h1>{name}</h1>
      <p style="user-select: all;">{handle}</p>
    </hgroup>
  </>
);
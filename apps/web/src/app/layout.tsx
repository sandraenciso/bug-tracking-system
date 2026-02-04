import type { Metadata } from "next";
import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import { AuthHydrator } from "../components/auth/AuthHydrator";
import { getCurrentUser } from "../get-current-user";
import "./global.css";

export const metadata: Metadata = {
  title: "Auth0 Next.js App",
  description: "Next.js app with Auth0 authentication",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <Auth0Provider>
          <AuthHydrator user={user}/>
          {children}
        </Auth0Provider>
      </body>
    </html>
  );
}
import { auth0 } from "@bug-tracking-system/auth";

export async function getCurrentUser() {
  const session = await auth0.getSession();

  if (!session?.user) return null;

  return {
    id: session.user.sub,
    email: session.user.email,
    name: session.user.name,
  };
}
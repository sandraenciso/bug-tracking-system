"use client";

export function LogoutButton() {
  return (
    <a
      href="/auth/logout"
      className="button logout"
    >
      Log Out
    </a>
  );
}
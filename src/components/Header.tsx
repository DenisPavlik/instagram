"use client";
import { signIn, signOut } from "next-auth/react";

export default async function Header({
  userName,
}: {
  userName: string | null | undefined;
}) {
  return (
    <div className="flex gap-6">
      <button
        className="rounded-md px-4 py-2 bg-cRed"
        onClick={() => signIn("google")}
      >
        Login
      </button>
      {userName}
      <button
        className="rounded-md px-4 py-2 bg-cOrange"
        onClick={() => signOut()}
      >
        Log out
      </button>
    </div>
  );
}

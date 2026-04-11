"use client";

import { useRouter } from "next/navigation";

export default function AdminLogoutButton({ className }) {
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ logout: true }),
    });
    router.replace("/admin/login");
    router.refresh();
  }

  const base = "text-sm font-medium text-slate-600 hover:text-slate-900 underline";
  return (
    <button type="button" onClick={logout} className={className ? `${base} ${className}` : base}>
      Sign out
    </button>
  );
}

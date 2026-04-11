"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/admin/dashboard";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Login failed.");
        setLoading(false);
        return;
      }
      router.replace(nextPath.startsWith("/admin") ? nextPath : "/admin/dashboard");
      router.refresh();
    } catch {
      setError("Network error.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-2rem)] flex items-center justify-center px-4 py-12 bg-[#f0f0f1]">
      <div className="w-full max-w-[400px] rounded-sm border border-slate-300 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="p-8 pb-6 border-b border-slate-100">
          <h1 className="text-center text-xl font-normal text-slate-800">San Diego Amazing Homes</h1>
          <p className="text-center text-xs text-slate-500 mt-1 uppercase tracking-wide">Admin sign in</p>
        </div>
        <form onSubmit={onSubmit} className="p-8 pt-6 space-y-4">
          <div>
            <label htmlFor="admin-user" className="block text-sm font-medium text-slate-700 mb-1">
              Username
            </label>
            <input
              id="admin-user"
              type="text"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-inner focus:border-sd-600 focus:outline-none focus:ring-1 focus:ring-sd-600"
            />
          </div>
          <div>
            <label htmlFor="admin-pass" className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              id="admin-pass"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-inner focus:border-sd-600 focus:outline-none focus:ring-1 focus:ring-sd-600"
              required
            />
          </div>
          {error && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-100 rounded px-3 py-2" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded border border-sd-700 bg-sd-600 text-white py-2.5 text-sm font-medium hover:bg-sd-700 disabled:opacity-50 shadow-sm"
          >
            {loading ? "Signing in…" : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<p className="text-center text-slate-500 mt-12 py-24 bg-[#f0f0f1]">Loading…</p>}>
      <LoginForm />
    </Suspense>
  );
}

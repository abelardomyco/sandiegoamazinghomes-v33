"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

function NavItem({ href, pathname, children }) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
        active ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

/**
 * WordPress-style admin chrome: dark sidebar, light content area.
 */
export default function AdminShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-100">
      <aside
        className="w-full md:w-56 shrink-0 bg-[#1d2327] text-slate-300 flex flex-col md:min-h-screen border-b md:border-b-0 md:border-r border-slate-800"
        aria-label="Admin menu"
      >
        <div className="p-4 border-b border-slate-700/80">
          <Link href="/admin/dashboard" className="block">
            <span className="font-semibold text-white text-sm tracking-tight">San Diego Amazing Homes</span>
            <span className="block text-[11px] text-slate-500 mt-0.5 uppercase tracking-wider">Administration</span>
          </Link>
        </div>
        <nav className="p-2 flex-1 space-y-0.5">
          <NavItem href="/admin/dashboard" pathname={pathname}>
            Dashboard
          </NavItem>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            View site ↗
          </a>
        </nav>
        <div className="p-3 border-t border-slate-700/80 text-xs text-slate-500">
          <AdminLogoutButton className="text-slate-400 hover:text-white underline-offset-2" />
        </div>
      </aside>
      <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8">{children}</main>
    </div>
  );
}

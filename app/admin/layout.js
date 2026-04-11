export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }) {
  return <div className="min-h-screen bg-slate-100">{children}</div>;
}

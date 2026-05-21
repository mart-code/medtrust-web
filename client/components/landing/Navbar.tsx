"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = ["Home", "Find Doctors", "Programs", "Institutions", "Security", "About"];
const ShieldCheckIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname.slice(1));

  return (
    <>
      {pathname === "/register" || pathname === "/login" ? (
        <header>
          <div className="max-w-7xl mx-auto px-6 h-14 flex flex-col items-center justify-center">
            <div className="flex items-center gap-1.5 text-teal-700 font-bold text-lg tracking-tight">
              <ShieldCheckIcon size={18} />
              MediLink
            </div>
          </div>
        </header>
      ) : (
        <header>
          {" "}
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-1.5 text-teal-700 font-bold text-lg tracking-tight">
                <ShieldCheckIcon size={18} />
                MediLink
              </div>
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`/${link === "Home" ? "" : link.replaceAll(" ", "-").toLowerCase()}`}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${link.toLowerCase() === pathname.slice(1) ? "text-teal-700 font-semibold border-b-2 border-teal-600 rounded-none pb-1 " : "text-gray-600 hover:text-teal-700 hover:bg-teal-50"}`}
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm text-gray-600 font-medium hover:text-teal-700">
                Sign In
              </Link>
              <Link href="/register" className="text-sm font-semibold bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

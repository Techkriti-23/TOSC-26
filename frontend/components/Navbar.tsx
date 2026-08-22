"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Menu, X, ArrowRight, } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/exam", label: "Exam" },
  { href: "/prepare", label: "Prepare" },
  { href: "/stories", label: "Stories" },
  { href: "/partners", label: "Partners" },
  { href: "/faq", label: "FAQ" },
  { href: "/results", label: "Results" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[94%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/20 bg-black/40 px-6 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-18 w-full items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span>TOSC<span className="font-light text-white/80">'26</span></span>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex h-10 items-center px-3.5 text-sm font-medium transition-colors ${isActive
                  ? "text-white"
                  : "text-white/70 hover:text-white"
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full bg-white transition-all shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Dashboard Direct link */}
          <Link href="/dashboard" className="hidden lg:inline-flex">
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 bg-white/10 text-xs font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-black"
            >
              Dashboard
            </Button>
          </Link>

          {/* User Menu Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/20 bg-white/10 text-white outline-none transition-all hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label="User Account"
            >
              <User className="h-4 w-4" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="min-w-44 rounded-[4px] border border-white/20 bg-black/90 p-1.5 text-white backdrop-blur-xl shadow-2xl"
            >
              <DropdownMenuItem
                render={<Link href="/auth" />}
                className="cursor-pointer rounded-[4px] text-white hover:bg-white/15 focus:bg-white/15 focus:text-white focus:[&_*]:text-white flex w-full items-center justify-between px-2 py-2 text-xs"
              >
                <span>Student Login</span>
                <ArrowRight className="h-3 w-3 text-white/60" />
              </DropdownMenuItem>

              <DropdownMenuItem
                render={<Link href="/auth?tab=register" />}
                className="cursor-pointer rounded-[4px] text-white hover:bg-white/15 focus:bg-white/15 focus:text-white focus:[&_*]:text-white flex w-full items-center justify-between px-2 py-2 text-xs"
              >
                <span>Register for TOSC</span>
                <ArrowRight className="h-3 w-3 text-white/60" />
              </DropdownMenuItem>

              <DropdownMenuItem
                render={<Link href="/dashboard" />}
                className="cursor-pointer rounded-[4px] text-white hover:bg-white/15 focus:bg-white/15 focus:text-white focus:[&_*]:text-white flex w-full items-center justify-between px-2 py-2 text-xs"
              >
                <span>Student Portal</span>
                <ArrowRight className="h-3 w-3 text-white/60" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/20 bg-white/10 text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-[4px] px-3 py-2 text-sm font-medium transition-colors ${isActive
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                </Link>
              );
            })}

            <div className="mt-3 grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
              <Link
                href="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-[4px] border border-white/20 bg-white/10 py-2 text-center text-xs font-semibold text-white"
              >
                Sign In
              </Link>
              <Link
                href="/auth?tab=register"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-[4px] bg-white py-2 text-center text-xs font-semibold text-black"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

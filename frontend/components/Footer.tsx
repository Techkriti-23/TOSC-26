import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink,  BookOpen, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/15 bg-black/80 px-6 pt-16 pb-12 text-white backdrop-blur-xl">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Col 1: Brand & Legacy */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block text-3xl font-bold tracking-tight text-white">
              TOSC<span className="font-light text-white/80">'26</span>
            </Link>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/60">
              Techkriti Open School Championship
            </p>
            <p className="max-w-sm text-sm text-white/70 leading-relaxed">
              India's premier competitive aptitude and scientific thinking championship organized by{" "}
              <span className="text-white font-medium">Techkriti, IIT Kanpur</span>. Empowering young minds in Classes 6–12 to question, reason, and innovate.
            </p>


          </div>

          {/* Col 2: Navigation & Subpages */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">About TOSC</Link>
              </li>
              <li>
                <Link href="/exam" className="transition-colors hover:text-white">Exam Pattern & Pools</Link>
              </li>
              <li>
                <Link href="/prepare" className="transition-colors hover:text-white">Preparation Hub</Link>
              </li>
              <li>
                <Link href="/prepare/pyqs" className="transition-colors hover:text-white">Previous Year Papers</Link>
              </li>
              <li>
                <Link href="/stories" className="transition-colors hover:text-white">Hall of Achievers</Link>
              </li>
              <li>
                <Link href="/partners" className="transition-colors hover:text-white">Schools & Partners</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Services */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Student Portal
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/auth?tab=register" className="transition-colors hover:text-white">Register for TOSC '26</Link>
              </li>
              <li>
                <Link href="/auth" className="transition-colors hover:text-white">Candidate Sign In</Link>
              </li>
              <li>
                <Link href="/dashboard" className="transition-colors hover:text-white">Student Dashboard</Link>
              </li>
              <li>
                <Link href="/results" className="transition-colors hover:text-white">Scorecard & Results</Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-white">Help & FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Helpdesk */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Contact Us
            </p>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-white/90" />
                <span>Techkriti Office, IIT Kanpur, Uttar Pradesh – 208016</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0 text-white/90" />
                <a href="mailto:tosc@techkriti.org" className="hover:text-white underline underline-offset-2">
                  tosc@techkriti.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 shrink-0 text-white/90" />
                <span>+91 512 259 7767</span>
              </li>
              <li className="pt-2">
                <a
                  href="https://techkriti.org"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-white/90 hover:text-white underline underline-offset-4"
                >
                  <span>Visit Techkriti Main Portal</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© 2026 TOSC, Techkriti (IIT Kanpur). All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-white">Terms & Conditions</Link>
            <Link href="/faq" className="hover:text-white">Privacy Policy</Link>
            <Link href="/faq" className="hover:text-white">Honor Code</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

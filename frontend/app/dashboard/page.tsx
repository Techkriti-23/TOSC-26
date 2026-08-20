"use client";

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  Sparkles,
  PlayCircle,
  FileText,
  Download,
  BookOpen,
  Award,
  Bell,
  Clock,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function DashboardPage() {
  const [candidate] = useState({
    name: "Aarav Sharma",
    rollNumber: "TOSC26-1001",
    pool: "Senior Pool (Classes 9-10)",
    grade: "Class 10",
    school: "Delhi Public School, R.K. Puram",
    city: "New Delhi",
    email: "aarav.sharma@example.com",
    examMode: "Online (AI Proctored)",
    status: "Verified & Exam Ready",
  });

  return (
    <PageShell>
      {/* CANDIDATE BANNER */}
      <section className="space-y-6">
        <div className="flex flex-col gap-6 border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center bg-black text-white text-xl font-bold shadow-xl">
              AS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                  {candidate.status}
                </span>
                <span className="font-mono text-xs text-black/50">ID: {candidate.rollNumber}</span>
              </div>
              <h1 className="mt-1 text-2xl font-bold sm:text-3xl text-black">
                Welcome back, {candidate.name}!
              </h1>
              <p className="text-xs text-black/70">
                {candidate.pool} • {candidate.school}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => alert("Downloading official admit card & exam instructions...")}
              size="sm"
              variant="outline"
              className="border-black/20 text-black hover:bg-black hover:text-white text-xs"
            >
              <Download className="mr-1.5 h-3.5 w-3.5" /> Download Hall Ticket
            </Button>
            <Link href="/prepare/pyqs">
              <Button size="sm" className="bg-black text-white hover:bg-black/90 text-xs">
                <BookOpen className="mr-1.5 h-3.5 w-3.5" /> Study Materials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* COUNTDOWN & ANNOUNCEMENTS */}
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {/* COUNTDOWN TILE */}
        <div className="border border-white/20 bg-white/10 p-6 backdrop-blur-md space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Stage 1 Countdown
            </span>
            <Clock className="h-4 w-4 text-yellow-300" />
          </div>
          <div>
            <p className="font-mono text-3xl font-bold text-white">94 Days</p>
            <p className="text-xs text-white/70 mt-1">November 22, 2026 • 10:00 AM IST</p>
          </div>
          <div className="pt-2">
            <span className="bg-white/10 px-2 py-1 text-[11px] font-medium text-white/80">
              Mode: {candidate.examMode}
            </span>
          </div>
        </div>

        {/* NOTIFICATIONS TILE */}
        <div className="md:col-span-2 border border-white/20 bg-white/10 p-6 backdrop-blur-md space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Recent Announcements
            </span>
            <Bell className="h-4 w-4 text-indigo-300" />
          </div>

          <div className="space-y-2.5 pt-1">
            <div className="flex items-start gap-3 border border-white/10 bg-black/30 p-3 text-xs">
              <Sparkles className="h-4 w-4 text-yellow-300 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">Official Mock Test 1 is now LIVE: </span>
                <span className="text-white/80">
                  Attempt the 90-minute full simulation test to test your camera setup and question speed.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 border border-white/10 bg-black/30 p-3 text-xs">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">System Compatibility Verified: </span>
                <span className="text-white/80">
                  Your browser and webcam proctoring check passed on candidate onboarding.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTION TILES */}
      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold text-white">Candidate Action Center</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-white/20 bg-white/90 p-6 text-black shadow-xl backdrop-blur-md space-y-4 flex flex-col justify-between transition-transform hover:-translate-y-1">
            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
                <PlayCircle className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-black">Take Mock Test</h3>
              <p className="text-xs text-black/70 leading-relaxed">
                Experience the real proctored exam UI, question timer, and +4/-1 scoring engine.
              </p>
            </div>
            <Button
              onClick={() => alert("Launching proctored mock exam simulator in new window...")}
              size="sm"
              className="w-full bg-black text-white hover:bg-black/90 text-xs"
            >
              Start Simulator
            </Button>
          </div>

          <div className="border border-white/20 bg-white/90 p-6 text-black shadow-xl backdrop-blur-md space-y-4 flex flex-col justify-between transition-transform hover:-translate-y-1">
            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-black">PYQ Question Bank</h3>
              <p className="text-xs text-black/70 leading-relaxed">
                Review solved papers from 2022 to 2025 with step-by-step logic proofs.
              </p>
            </div>
            <Link href="/prepare/pyqs">
              <Button size="sm" variant="outline" className="w-full border-black/20 text-black hover:bg-black hover:text-white text-xs">
                Open Question Bank
              </Button>
            </Link>
          </div>

          <div className="border border-white/20 bg-white/90 p-6 text-black shadow-xl backdrop-blur-md space-y-4 flex flex-col justify-between transition-transform hover:-translate-y-1">
            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-black">My Diagnostic Score</h3>
              <p className="text-xs text-black/70 leading-relaxed">
                View your detailed cognitive aptitude breakdown, All India Rank, and certificate.
              </p>
            </div>
            <Link href="/results">
              <Button size="sm" variant="outline" className="w-full border-black/20 text-black hover:bg-black hover:text-white text-xs">
                View Scorecard
              </Button>
            </Link>
          </div>

          <div className="border border-white/20 bg-white/90 p-6 text-black shadow-xl backdrop-blur-md space-y-4 flex flex-col justify-between transition-transform hover:-translate-y-1">
            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg text-black">Exam Guidelines</h3>
              <p className="text-xs text-black/70 leading-relaxed">
                Read system requirements, allowed materials, and Stage 2 IITK selection criteria.
              </p>
            </div>
            <Link href="/exam">
              <Button size="sm" variant="outline" className="w-full border-black/20 text-black hover:bg-black hover:text-white text-xs">
                Review Rules
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MOCK PERFORMANCE SUMMARY */}
      <section className="mt-12">
        <div className="border border-white/20 bg-white/10 p-8 backdrop-blur-xl space-y-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white">Mock Test Diagnostic Snapshot</h3>
              <p className="text-xs text-white/70">Performance from your latest practice session</p>
            </div>
            <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1">
              Estimated Percentile: 99.8%
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border border-white/10 bg-black/40 p-4 space-y-1">
              <p className="text-xs text-white/60 uppercase">Analytical & Logic</p>
              <p className="font-mono text-xl font-bold text-white">78 / 80</p>
              <p className="text-[11px] text-emerald-400 font-semibold">97.5% Accuracy</p>
            </div>

            <div className="border border-white/10 bg-black/40 p-4 space-y-1">
              <p className="text-xs text-white/60 uppercase">Mathematics & Modeling</p>
              <p className="font-mono text-xl font-bold text-white">80 / 80</p>
              <p className="text-[11px] text-emerald-400 font-semibold">100% Accuracy</p>
            </div>

            <div className="border border-white/10 bg-black/40 p-4 space-y-1">
              <p className="text-xs text-white/60 uppercase">Integrated Sciences</p>
              <p className="font-mono text-xl font-bold text-white">76 / 80</p>
              <p className="text-[11px] text-emerald-400 font-semibold">95.0% Accuracy</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { PYQ_PAPERS } from "@/data/pyqs";
import {
 
  FileText,
  Download,
  ArrowLeft,
  CheckCircle2,
  Clock,
  HelpCircle,
  Eye,
  EyeOff,
} from "lucide-react";

export default function PYQsPage() {
  const [selectedPool, setSelectedPool] = useState<"junior" | "senior" | "super-senior">("senior");
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const currentPaper =
    PYQ_PAPERS.find((p) => p.poolId === selectedPool) || PYQ_PAPERS[0];

  const toggleSolution = (qKey: string) => {
    setRevealedSolutions((prev) => ({
      ...prev,
      [qKey]: !prev[qKey],
    }));
  };

  return (
    <PageShell>
      {/* NAVIGATION CRUMB */}
      <div className="mb-6">
        <Link
          href="/prepare"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 h-3.5 w-3.5" /> Back to Preparation Hub
        </Link>
      </div>

      {/* HEADER HERO */}
      <section className="space-y-4 text-center">
        

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Previous Year Questions (PYQs)
        </h1>

        <p className="mx-auto max-w-2xl text-sm text-white/80 sm:text-base font-light leading-relaxed">
          Review authentic questions set by the IIT Kanpur academic team across previous editions.
          Solve them under timed conditions to gauge your exam readiness.
        </p>
      </section>

      {/* POOL SELECTION FILTER */}
      <section className="mt-12">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: "junior", name: "Junior Pool (Classes 6-8)" },
            { id: "senior", name: "Senior Pool (Classes 9-10)" },
            { id: "super-senior", name: "Super Senior Pool (Classes 11-12)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedPool(tab.id as any)}
              className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all cursor-pointer ${
                selectedPool === tab.id
                  ? "bg-white text-black shadow-lg"
                  : "border border-white/20 bg-black/40 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* PAPER HEADER CARD */}
        <div className="mt-8 rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-black/10 pb-6">
            <div>
              <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                Official Paper Archive • {currentPaper.year}
              </span>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                TOSC {currentPaper.year} — {currentPaper.pool}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-black/10 bg-black/[0.04] px-4 py-2 text-center text-xs">
                <span className="text-black/60 block">Time</span>
                <span className="font-bold font-mono">{currentPaper.duration}</span>
              </div>
              <div className="rounded-xl border border-black/10 bg-black/[0.04] px-4 py-2 text-center text-xs">
                <span className="text-black/60 block">Total Qs</span>
                <span className="font-bold font-mono">{currentPaper.questionsCount}</span>
              </div>
              <Button
                size="sm"
                onClick={() => alert("Official PDF download package generated! Check your browser downloads.")}
                className="bg-black text-white hover:bg-black/90 text-xs"
              >
                <Download className="mr-1.5 h-3.5 w-3.5" /> Download Paper PDF
              </Button>
            </div>
          </div>

          {/* QUESTIONS LIST */}
          <div className="mt-8 space-y-6">
            {currentPaper.sampleQuestions.map((q) => {
              const qKey = `${currentPaper.id}-q-${q.qNum}`;
              const isRevealed = !!revealedSolutions[qKey];

              return (
                <div
                  key={q.qNum}
                  className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-black/5 px-2.5 py-1 text-xs font-bold text-black/70">
                      Question {q.qNum} • {q.subject}
                    </span>
                    <span className="font-mono text-xs text-black/40">+4 / -1 Marks</span>
                  </div>

                  <p className="text-sm font-medium text-black leading-relaxed sm:text-base">
                    {q.question}
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {q.options.map((opt, oIdx) => (
                      <div
                        key={oIdx}
                        className="rounded-lg border border-black/10 bg-black/[0.02] p-3 text-xs font-medium text-black/90"
                      >
                        <strong className="mr-2 font-mono text-black/60">
                          {String.fromCharCode(65 + oIdx)}.
                        </strong>
                        {opt}
                      </div>
                    ))}
                  </div>

                  {/* REVEAL SOLUTION TOGGLE */}
                  <div className="border-t border-black/10 pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => toggleSolution(qKey)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:underline cursor-pointer"
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="h-3.5 w-3.5" /> Hide Detailed Solution
                        </>
                      ) : (
                        <>
                          <Eye className="h-3.5 w-3.5" /> View Answer & Step-by-Step Logic
                        </>
                      )}
                    </button>
                    {isRevealed && (
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                        Correct Answer: {q.correctAnswer}
                      </span>
                    )}
                  </div>

                  {isRevealed && (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs text-emerald-950 leading-relaxed">
                      <p className="font-bold text-emerald-900 mb-1">Conceptual Deduction:</p>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-black/10 bg-black/[0.03] p-6 text-center space-y-3">
            <p className="font-semibold text-sm text-black">Want to solve full-length 60-question mock tests under real exam conditions?</p>
            <Link href="/auth?tab=register">
              <Button className="bg-black text-white hover:bg-black/90">
                Launch Online Mock Simulator in Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

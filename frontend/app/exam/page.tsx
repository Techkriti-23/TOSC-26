"use client";

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EXAM_POOLS, EXAM_STAGES, EXAM_SCHEDULE, EXAM_RULES } from "@/data/exam";
import {

  Clock,
  HelpCircle,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  FileText,
  AlertCircle,
} from "lucide-react";

export default function ExamPage() {
  const [selectedPoolId, setSelectedPoolId] = useState<string>("junior");
  const currentPool = EXAM_POOLS.find((p) => p.id === selectedPoolId) || EXAM_POOLS[0];

  return (
    <PageShell>
      {/* HEADER HERO */}
      <section className="space-y-6 text-center">
      

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          The Examination Blueprint.
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl font-light leading-relaxed">
          TOSC '26 is engineered into three age-customized participant pools and two progressive stages
          to rigorously assess aptitude, scientific logic, and creative problem solving.
        </p>
      </section>

      {/* TWO-STAGE ARCHITECTURE */}
      <section className="mt-20">
        <div className="mb-10 text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Path to Glory
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Two-Stage Championship
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {EXAM_STAGES.map((stage) => (
            <div
              key={stage.stageNumber}
              className="border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-black/50 tracking-wider">
                    STAGE {stage.stageNumber}
                  </span>
                  <span className="bg-black/10 px-3 py-1 text-xs font-semibold text-black">
                    {stage.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold sm:text-3xl">{stage.title}</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-black/60">
                  Mode: {stage.mode}
                </p>
                <p className="text-sm text-black/80 leading-relaxed">
                  {stage.description}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-black/10">
                  {stage.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-black/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                {stage.stageNumber === "01" ? (
                  <Link href="/auth?tab=register">
                    <Button className="w-full bg-black text-white hover:bg-black/90">
                      Register for Stage 1 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Link href="/about">
                    <Button variant="outline" className="w-full border-black/30 text-black hover:bg-black hover:text-white">
                      Explore IITK Finals Experience
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POOLS TABBED EXPLORATION */}
      <section id="pools" className="mt-28">
        <div className="mb-10 text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Eligibility & Weightage
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Choose Your Pool
          </h2>
        </div>

        {/* Custom Pool Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {EXAM_POOLS.map((pool) => {
            const isSelected = pool.id === selectedPoolId;
            return (
              <button
                key={pool.id}
                type="button"
                onClick={() => setSelectedPoolId(pool.id)}
                className={`px-5 py-3 text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "border border-white/20 bg-black/40 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {pool.name} ({pool.classes})
              </button>
            );
          })}
        </div>

        {/* Selected Pool Details Card */}
        <div className="mt-8 border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-black/10 pb-6">
            <div>
              <div className="inline-flex bg-black px-3 py-1 text-xs font-semibold text-white">
                {currentPool.classes}
              </div>
              <h3 className="mt-2 text-3xl font-bold">{currentPool.name}</h3>
              <p className="text-sm font-medium text-black/70 italic">{currentPool.tagline}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-black/5 p-4 text-center">
              <div>
                <p className="text-xs text-black/60 uppercase">Duration</p>
                <p className="text-lg font-bold">{currentPool.durationMinutes} Mins</p>
              </div>
              <div>
                <p className="text-xs text-black/60 uppercase">Questions</p>
                <p className="text-lg font-bold">{currentPool.totalQuestions}</p>
              </div>
              <div>
                <p className="text-xs text-black/60 uppercase">Max Score</p>
                <p className="text-lg font-bold">{currentPool.totalMarks}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-base font-bold uppercase tracking-wider text-black/80">
                Eligibility & Focus
              </h4>
              <p className="text-sm text-black/80 leading-relaxed">
                {currentPool.description}
              </p>
              <div className="border border-black/10 bg-black/[0.03] p-4 text-xs text-black/80">
                <span className="font-semibold text-black">Eligibility Criteria:</span> {currentPool.eligibility}
              </div>
              <div className="border border-black/10 bg-black/[0.03] p-4 text-xs text-black/80">
                <span className="font-semibold text-black">Marking Scheme:</span> {currentPool.negativeMarking}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-base font-bold uppercase tracking-wider text-black/80">
                Subject & Question Distribution
              </h4>
              <div className="space-y-3">
                {currentPool.subjects.map((sub, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border border-black/10 bg-white p-4 shadow-sm"
                  >
                    <div>
                      <p className="font-semibold text-sm text-black">{sub.name}</p>
                      <p className="text-xs text-black/60">{sub.questions} Questions</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-bold text-base text-black">{sub.marks} Marks</p>
                      <p className="text-[10px] text-black/50 uppercase">Weightage</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
            <Link href="/prepare" className="text-xs font-semibold text-black underline underline-offset-4 flex items-center gap-1">
              <FileText className="h-4 w-4" /> View preparation materials for {currentPool.name}
            </Link>
            <Link href="/auth?tab=register">
              <Button className="bg-black text-white hover:bg-black/90">
                Register for {currentPool.name}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SCHEDULE & TIMELINE */}
      <section className="mt-28">
        <div className="mb-10 text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Roadmap 2026-27
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Key Dates & Milestones
          </h2>
        </div>

        <div className="space-y-4">
          {EXAM_SCHEDULE.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 border border-white/20 bg-white/10 p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between transition-all hover:bg-white/15"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 bg-white/10 font-mono text-sm font-bold text-white">
                  0{idx + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                      {item.stage}
                    </span>
                    {item.status === "active" && (
                      <span className="bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-bold text-emerald-300 uppercase">
                        Live Now
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">{item.title}</h3>
                  <p className="text-xs text-white/70 mt-1">{item.description}</p>
                </div>
              </div>

              <div className="shrink-0 border border-white/10 bg-black/40 px-4 py-2 text-right sm:text-right">
                <p className="font-semibold text-sm text-white">{item.date}</p>
                <p className="text-[11px] text-white/60">{item.mode}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RULES & GUIDELINES */}
      <section className="mt-28">
        <div className="border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12">
          <div className="flex items-center gap-2 text-black/60">
            <AlertCircle className="h-5 w-5 text-black" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em]">
              Examination Guidelines
            </p>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Rules & Code of Conduct
          </h2>

          <div className="mt-8 space-y-3">
            {EXAM_RULES.map((rule, idx) => (
              <div key={idx} className="flex items-start gap-3 border border-black/10 bg-white p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                <p className="text-xs text-black/85 leading-relaxed sm:text-sm">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="mt-24 text-center space-y-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Ready for Stage 1?
        </h2>
        <p className="mx-auto max-w-xl text-sm text-white/80">
          Prepare with Previous Year Papers and official mock tests on your student portal.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/prepare">
            <Button size="lg" className="bg-white text-black font-semibold hover:bg-white/90">
              Go to Preparation Hub
            </Button>
          </Link>
          <Link href="/auth?tab=register">
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black">
              Register Now
            </Button>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

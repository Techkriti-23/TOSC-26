"use client";

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
 
  BookOpen,
  HelpCircle,
  CheckCircle2,
  FileText,
  Lightbulb,
  ArrowRight,
  BrainCircuit,
  Compass,
  Check,
  X,
} from "lucide-react";

export default function PreparePage() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const sampleQuestion = {
    subject: "Logical Reasoning & Pattern Deduction",
    question:
      "A spherical droplet of oil with radius R is split into 1000 identical tiny spherical droplets. If surface energy is directly proportional to total surface area, what is the ratio of the total surface energy of all 1000 droplets to the original single droplet?",
    options: ["10 : 1", "100 : 1", "1000 : 1", "1 : 1"],
    correctIdx: 0,
    explanation:
      "The total volume remains conserved: V = 1000 * v => (4/3)π R³ = 1000 * (4/3)π r³ => r = R / 10. The initial surface area is 4πR². The total new surface area is 1000 * 4πr² = 1000 * 4π(R/10)² = 10 * (4πR²). Thus, the total surface area and surface energy increase by a factor of 10 : 1.",
  };

  return (
    <PageShell>
      {/* HEADER HERO */}
      <section className="space-y-6 text-center">
        

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          Master The Art of Problem Solving.
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl font-light leading-relaxed">
          TOSC questions reward deep conceptual clarity and lateral deduction. Explore syllabus breakdowns,
          sample interactive questions, and official past papers to fine-tune your preparation.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link href="/prepare/pyqs">
            <Button size="lg" className="bg-white text-black font-semibold hover:bg-white/90">
              <FileText className="mr-2 h-4 w-4" /> Browse PYQ Question Papers
            </Button>
          </Link>
          <Link href="/auth?tab=register">
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black">
              Take Free Mock Test
            </Button>
          </Link>
        </div>
      </section>

      {/* SYLLABUS TOPICS OVERVIEW */}
      <section className="mt-20">
        <div className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
            Syllabus Framework
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
            Core Assessment Pillars
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-black/80">
            The questions are not strictly bound to textbook definitions; rather, they test your ability to apply basic principles in novel scenarios.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-3 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
                <BrainCircuit className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-lg">Mental Ability & Logic</h3>
              <ul className="space-y-1.5 text-xs text-black/75">
                <li>• Pattern completion & sequence deduction</li>
                <li>• Coding-decoding & spatial orientation</li>
                <li>• Blood relations, seating arrangement, syllogisms</li>
                <li>• Logical fallacies & data sufficiency</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-3 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
                <Compass className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-lg">Mathematical Modeling</h3>
              <ul className="space-y-1.5 text-xs text-black/75">
                <li>• Number theory, primes, modular arithmetic</li>
                <li>• Geometric visualization & non-routine angles</li>
                <li>• Combinatorics, probability & game theory basics</li>
                <li>• Algebraic inequalities and graphical analysis</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 space-y-3 shadow-sm">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white">
                <Lightbulb className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-lg">Integrated Sciences</h3>
              <ul className="space-y-1.5 text-xs text-black/75">
                <li>• Everyday physics: optics, mechanics, fluid logic</li>
                <li>• Chemical reactions & elemental curiosities</li>
                <li>• Ecological systems, genetics & biological logic</li>
                <li>• Experimental design & error analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SAMPLE QUESTION */}
      <section className="mt-24">
        <div className="mb-8 text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Interactive Test Drive
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Sample TOSC Problem
          </h2>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl md:p-12 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              {sampleQuestion.subject}
            </span>
            <span className="text-xs font-mono text-white/60">+4 / -1 Scheme</span>
          </div>

          <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
            {sampleQuestion.question}
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {sampleQuestion.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setSelectedOption(idx);
                    setShowExplanation(false);
                  }}
                  className={`flex items-center justify-between rounded-xl border p-4 text-left text-sm font-medium transition-all cursor-pointer ${
                    isSelected
                      ? "border-white bg-white text-black shadow-lg"
                      : "border-white/15 bg-black/40 text-white/90 hover:bg-white/10"
                  }`}
                >
                  <span>
                    <strong className="mr-2 font-mono">{String.fromCharCode(65 + idx)}.</strong> {opt}
                  </span>
                  {isSelected && <Check className="h-4 w-4 text-black" />}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <Button
              disabled={selectedOption === null}
              onClick={() => setShowExplanation(true)}
              className="bg-white text-black hover:bg-white/90"
            >
              Verify Answer & Reveal Solution
            </Button>
            {selectedOption !== null && !showExplanation && (
              <p className="text-xs text-white/60">Click above to check correctness and detailed mathematical proof.</p>
            )}
          </div>

          {showExplanation && (
            <div className={`rounded-2xl border p-6 backdrop-blur-md ${
              selectedOption === sampleQuestion.correctIdx
                ? "border-emerald-500/40 bg-emerald-950/40 text-white"
                : "border-amber-500/40 bg-amber-950/40 text-white"
            }`}>
              <div className="flex items-center gap-2 font-bold text-sm">
                {selectedOption === sampleQuestion.correctIdx ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <span className="text-emerald-300">Spot on! Option A (10 : 1) is correct.</span>
                  </>
                ) : (
                  <>
                    <X className="h-5 w-5 text-amber-400" />
                    <span className="text-amber-300">Not quite! The correct answer is Option A (10 : 1).</span>
                  </>
                )}
              </div>
              <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed">
                {sampleQuestion.explanation}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* STRATEGY & TIPS */}
      <section className="mt-24">
        <div className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
            Preparation Playbook
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            How to Ace TOSC '26
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 space-y-2">
              <h3 className="font-bold text-base text-black">1. Master Boundary Values & Intuition</h3>
              <p className="text-xs text-black/75 leading-relaxed">
                Many complex problems can be simplified by testing extreme cases (e.g. radius approaches 0 or infinity) to instantly eliminate absurd options.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 space-y-2">
              <h3 className="font-bold text-base text-black">2. Practice Time Discipline (90 Mins)</h3>
              <p className="text-xs text-black/75 leading-relaxed">
                With 60 questions in 90 minutes, you have roughly 1.5 minutes per question. If a problem takes more than 2 minutes on first pass, flag it and move forward.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 space-y-2">
              <h3 className="font-bold text-base text-black">3. Avoid Random Guessing (-1 Penalty)</h3>
              <p className="text-xs text-black/75 leading-relaxed">
                The negative marking penalizes wild guesses. Only make calculated guesses if you have logically eliminated at least two choices.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 space-y-2">
              <h3 className="font-bold text-base text-black">4. Solve Previous Year Question Papers</h3>
              <p className="text-xs text-black/75 leading-relaxed">
                Familiarize yourself with the question syntax, diagram formats, and question patterns set by the IIT Kanpur academic committee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center space-y-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Start Practicing Today.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/prepare/pyqs">
            <Button size="lg" className="bg-white text-black font-semibold hover:bg-white/90">
              Explore All Past Papers (PYQs)
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black">
              Open Student Portal
            </Button>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

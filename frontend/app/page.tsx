"use client";

import Link from "next/link";
import { ArrowRight, Brain, Lightbulb, Compass, Award, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white selection:bg-white selection:text-black">
      {/* FIXED BACKGROUND VIDEO */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Layered Gradient Overlay */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.6)_60%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      {/* FLOATING HEADER */}
      <Navbar />

      <main className="relative">
        {/* HERO SECTION */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
          <div className="mx-auto max-w-4xl space-y-6">
         

            <h1 className="text-6xl font-bold tracking-tight sm:text-8xl md:text-9xl">
              TOSC<span className="font-normal text-white/80">'26</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-white/85 sm:text-xl md:text-2xl font-light leading-relaxed">
              The Ultimate Competitive Examination for School Students across India.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <Link href="/exam">
                <Button size="lg" className="gap-2 bg-white text-black font-semibold hover:bg-white/90">
                  <span>Explore Examination</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="/auth?tab=register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all"
                >
                  Register for TOSC'26
                </Button>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 rounded-2xl border border-white/15 bg-black/40 p-5 backdrop-blur-md sm:grid-cols-4">
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">10K+</p>
                <p className="text-xs text-white/60 uppercase tracking-wider">Students</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">500+</p>
                <p className="text-xs text-white/60 uppercase tracking-wider">Schools</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">₹5L+</p>
                <p className="text-xs text-white/60 uppercase tracking-wider">Prizes</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white sm:text-3xl">IITK</p>
                <p className="text-xs text-white/60 uppercase tracking-wider">Grand Finale</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="relative px-6 py-28 md:py-36">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-16">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                    About TOSC
                  </p>
                  <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                    Think.<br />Question.<br />Compete.
                  </h2>
                </div>
                <Link href="/about">
                  <Button variant="outline" className="border-black/30 text-black hover:bg-black hover:text-white">
                    Read Our Mission <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <p className="mt-8 max-w-3xl text-base sm:text-lg leading-relaxed text-black/80">
                TOSC is designed to challenge students beyond conventional classroom learning.
                It encourages first-principles reasoning, scientific curiosity, problem solving,
                and creative approaches to non-routine puzzles.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-3 border-t border-black/10 pt-8">
                <div className="space-y-2">
                  <h3 className="font-semibold text-black">National Stage</h3>
                  <p className="text-sm text-black/70">Compete with the sharpest minds from hundreds of cities across India.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-black">Cognitive Diagnostic</h3>
                  <p className="text-sm text-black/70">Receive an in-depth analytical scorecard showing topic-wise cognitive aptitude.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-black">IIT Kanpur Finale</h3>
                  <p className="text-sm text-black/70">Top 500 finalists win a sponsored 2-day immersion at IIT Kanpur during Techkriti.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS / EXPERIENCE */}
        <section className="relative px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                The Experience
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                Built to make<br />you think.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-white/20 bg-white/95 text-black shadow-xl backdrop-blur-md transition-transform hover:-translate-y-1">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-mono font-bold text-black/40">01</p>
                    <Lightbulb className="h-5 w-5 text-amber-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Curiosity</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-black/75">
                  Questions that make you stop, observe, and discover hidden elegance in familiar concepts and natural laws.
                </CardContent>
              </Card>

              <Card className="border-white/20 bg-white/95 text-black shadow-xl backdrop-blur-md transition-transform hover:-translate-y-1">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-mono font-bold text-black/40">02</p>
                    <Brain className="h-5 w-5 text-indigo-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Creativity</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-black/75">
                  Problems designed to reward out-of-the-box deduction and innovative intuition rather than rote memorization.
                </CardContent>
              </Card>

              <Card className="border-white/20 bg-white/95 text-black shadow-xl backdrop-blur-md transition-transform hover:-translate-y-1">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-mono font-bold text-black/40">03</p>
                    <Compass className="h-5 w-5 text-emerald-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Logic</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed text-black/75">
                  Deconstruct multi-layered, interconnected challenges into systematic, understandable reasoning steps.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* WHO CAN PARTICIPATE */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-16">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                    Who Can Participate
                  </p>
                  <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                    For young minds.
                  </h2>
                </div>
                <p className="text-sm text-black/70 max-w-md">
                  Divided into three distinct competitive pools to ensure fair, age-appropriate assessment.
                </p>
              </div>

              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 space-y-3">
                  <div className="inline-flex rounded-full bg-black text-white px-3 py-1 text-xs font-semibold">
                    Junior Pool
                  </div>
                  <h3 className="text-xl font-bold text-black">Classes 6, 7 & 8</h3>
                  <p className="text-xs text-black/70 leading-relaxed">
                    Foundation building: Puzzles, mental aptitude, observational physics, and everyday science questions.
                  </p>
                  <Link href="/exam#pools" className="inline-flex items-center text-xs font-semibold text-black underline underline-offset-4">
                    View Syllabus <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>

                <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 space-y-3">
                  <div className="inline-flex rounded-full bg-black text-white px-3 py-1 text-xs font-semibold">
                    Senior Pool
                  </div>
                  <h3 className="text-xl font-bold text-black">Classes 9 & 10</h3>
                  <p className="text-xs text-black/70 leading-relaxed">
                    Analytical rigor: Mathematics, modeling, deductive logic, and integrated physical sciences.
                  </p>
                  <Link href="/exam#pools" className="inline-flex items-center text-xs font-semibold text-black underline underline-offset-4">
                    View Syllabus <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>

                <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 space-y-3">
                  <div className="inline-flex rounded-full bg-black text-white px-3 py-1 text-xs font-semibold">
                    Super Senior Pool
                  </div>
                  <h3 className="text-xl font-bold text-black">Classes 11 & 12</h3>
                  <p className="text-xs text-black/70 leading-relaxed">
                    Advanced Olympiad level: Complex mechanics, combinatorics, algorithms, and deep physics problems.
                  </p>
                  <Link href="/exam#pools" className="inline-flex items-center text-xs font-semibold text-black underline underline-offset-4">
                    View Syllabus <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative px-6 py-28 text-center">
          <div className="mx-auto max-w-4xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Ready to test yourself?
            </p>
            <h2 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
              Take the<br />Challenge.
            </h2>
            <p className="mx-auto max-w-xl text-base text-white/80 sm:text-lg">
              Join thousands of aspiring scientists, mathematicians, and thinkers competing for the national title at IIT Kanpur.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link href="/auth?tab=register">
                <Button size="lg" className="bg-white text-black font-semibold hover:bg-white/90">
                  Register for TOSC '26
                </Button>
              </Link>
              <Link href="/prepare">
                <Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black">
                  Practice Sample PYQs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

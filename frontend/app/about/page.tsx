"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {

 
  Compass,
  Rocket,
  Atom,
  Users,
  Building2,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <PageShell>
      {/* HERO BANNER */}
      <section className="space-y-6 text-center">
       

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          Fostering The Next Generation of Thinkers.
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl font-light leading-relaxed">
          The Techkriti Open School Championship (TOSC) is the flagship school outreach initiative
          of <span className="font-semibold text-white">IIT Kanpur</span>, designed to spark scientific curiosity,
          lateral problem-solving, and cognitive brilliance in students from Classes 6 through 12.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="mt-20">
        <div className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                Our Vision
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Beyond Conventional Classrooms.
              </h2>
              <p className="text-base text-black/80 leading-relaxed">
                Standard academic curricula frequently reward memorization and routine pattern repetition.
                TOSC was born out of a simple conviction: the greatest scientists and innovators aren't those
                who memorize equations, but those who ask *why*, dismantle assumptions, and connect disparate ideas.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                Our Mission
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Democratizing Scientific Excellence.
              </h2>
              <p className="text-base text-black/80 leading-relaxed">
                To provide a transparent, merit-driven national platform where every curious student—regardless
                of their geography, schooling board, or background—can test their intellect, discover their true
                problem-solving potential, and experience the world-class research environment of IIT Kanpur.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-black/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                <Atom className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg">First-Principles Logic</h3>
              <p className="text-xs text-black/70 leading-relaxed">Questions derived from fundamentals rather than obscure coaching tricks.</p>
            </div>

            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
               
              </div>
              <h3 className="font-bold text-lg">National Benchmarking</h3>
              <p className="text-xs text-black/70 leading-relaxed">Detailed percentile and skill-map report across 50,000+ national peers.</p>
            </div>

            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg">IIT Kanpur Immersion</h3>
              <p className="text-xs text-black/70 leading-relaxed">Finalists visit and stay on the premier IIT Kanpur campus during Techkriti.</p>
            </div>

            <div className="space-y-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-lg">Lifelong Mentorship</h3>
              <p className="text-xs text-black/70 leading-relaxed">Direct interaction with IIT faculty, researchers, and tech industry pioneers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHKRITI LEGACY & NUMBERS */}
      <section className="mt-24 space-y-12">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Heritage & Scale
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            The Techkriti Legacy.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-white/70">
            Organized by the students of IIT Kanpur, Techkriti is one of Asia's largest annual technical and entrepreneurial festivals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-md">
            <CardHeader className="pb-2">
              <p className="text-3xl font-bold sm:text-4xl">30+ Years</p>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-white/70">Of pioneering science festivals & national student competitions at IIT Kanpur.</p>
            </CardContent>
          </Card>

          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-md">
            <CardHeader className="pb-2">
              <p className="text-3xl font-bold sm:text-4xl">100,000+</p>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-white/70">Students participate annually across 500+ schools in 50+ cities across India.</p>
            </CardContent>
          </Card>

          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-md">
            <CardHeader className="pb-2">
              <p className="text-3xl font-bold sm:text-4xl">₹5,00,000+</p>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-white/70">Total prize pool with scholarships, laptops, medals, and recognized certificates.</p>
            </CardContent>
          </Card>

          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-md">
            <CardHeader className="pb-2">
              <p className="text-3xl font-bold sm:text-4xl">Top 500</p>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-white/70">Finalists hosted on the IIT Kanpur campus for a 2-day hands-on experience.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WHAT HAPPENS AT FINALS */}
      <section className="mt-24">
        <div className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
            Grand Finale at IIT Kanpur
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
            A Glimpse into the IIT Experience.
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-black/80">
            For students who qualify Stage 1, Stage 2 is not just another test—it is an inspiring, full-immersion journey into India's top scientific institution.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-6 space-y-3">
              <div className="font-mono text-xs font-bold text-black/50">01</div>
              <h3 className="font-bold text-lg">Aeromodelling & Flight Lab</h3>
              <p className="text-xs text-black/70 leading-relaxed">
                Tour the national wind tunnel facility, witness supersonic wind simulations, and see real aircraft engineering in action.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-6 space-y-3">
              <div className="font-mono text-xs font-bold text-black/50">02</div>
              <h3 className="font-bold text-lg">Keynotes & Tech Exhibitions</h3>
              <p className="text-xs text-black/70 leading-relaxed">
                Attend keynote sessions by Nobel laureates, ISRO scientists, and global tech leaders during Techkriti festival.
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-black/[0.04] p-6 space-y-3">
              <div className="font-mono text-xs font-bold text-black/50">03</div>
              <h3 className="font-bold text-lg">Live Buzzer & Demo Rounds</h3>
              <p className="text-xs text-black/70 leading-relaxed">
                Compete on stage in live problem solving, science demonstrations, and experimental challenges before a grand audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="mt-24 text-center space-y-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Be Part of TOSC '26
        </h2>
        <p className="mx-auto max-w-xl text-sm text-white/80">
          Discover how the exam is structured or register your school and student profile today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/exam">
            <Button size="lg" className="bg-white text-black font-semibold hover:bg-white/90">
              <span>View Exam Structure</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/auth?tab=register">
            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black">
              Register Online
            </Button>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}

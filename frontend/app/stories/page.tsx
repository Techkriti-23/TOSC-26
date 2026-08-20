"use client";

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { STUDENT_STORIES } from "@/data/stories";
import {
 

  Quote,
  ArrowRight,
  GraduationCap,
  MapPin,
  Building,
  Star,
  CheckCircle2,
} from "lucide-react";

export default function StoriesPage() {
  const [filterPool, setFilterPool] = useState<string>("all");

  const filteredStories =
    filterPool === "all"
      ? STUDENT_STORIES
      : STUDENT_STORIES.filter((s) => s.pool.toLowerCase().includes(filterPool));

  return (
    <PageShell>
      {/* HEADER HERO */}
      <section className="space-y-6 text-center">
       

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          Inspiring Journeys to IIT Kanpur.
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl font-light leading-relaxed">
          Read real stories of students from across India who cracked TOSC, traveled to the prestigious
          IIT Kanpur campus, and unlocked their true academic potential.
        </p>
      </section>

      {/* FILTER BUTTONS */}
      <section className="mt-14">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: "all", name: "All Achievers" },
            { id: "junior", name: "Junior Pool (6-8)" },
            { id: "senior", name: "Senior Pool (9-10)" },
            { id: "super senior", name: "Super Senior (11-12)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilterPool(tab.id)}
              className={`rounded-xl px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filterPool === tab.id
                  ? "bg-white text-black shadow-lg"
                  : "border border-white/20 bg-black/40 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* STORIES GRID */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {filteredStories.map((story) => (
            <div
              key={story.slug}
              className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-10 space-y-6 flex flex-col justify-between transition-transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black font-bold text-white text-sm">
                      {story.avatar}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">{story.name}</h3>
                      <p className="text-xs text-black/60 font-medium">{story.pool}</p>
                    </div>
                  </div>

                  <div className="rounded-full bg-black px-3 py-1 text-xs font-bold text-white">
                    {story.rank} • {story.year}
                  </div>
                </div>

                <div className="space-y-1 text-xs text-black/65 border-t border-black/10 pt-3">
                  <p className="flex items-center gap-1.5">
                    <Building className="h-3.5 w-3.5" /> {story.school}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> {story.city}, {story.state}
                  </p>
                </div>

                <div className="relative rounded-2xl border border-black/10 bg-black/[0.03] p-5">
                  <Quote className="absolute right-4 top-4 h-6 w-6 text-black/10" />
                  <p className="italic text-xs sm:text-sm text-black/85 leading-relaxed">
                    "{story.quote}"
                  </p>
                </div>

                <p className="text-xs text-black/75 line-clamp-3 leading-relaxed">
                  {story.fullStory}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-black/10 pt-4">
                <span className="font-mono text-xs font-bold text-black/60">
                  Score: {story.score}
                </span>
                <Link href={`/stories/${story.slug}`}>
                  <Button size="sm" className="bg-black text-white hover:bg-black/90 text-xs">
                    Read Full Journey <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEACHER & PRINCIPAL REVIEWS */}
      <section className="mt-24">
        <div className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
            Educator Endorsements
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            What Schools Say About TOSC
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 space-y-3">
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500" />
                ))}
              </div>
              <p className="italic text-xs sm:text-sm text-black/80 leading-relaxed">
                "TOSC is by far the most intellectually stimulating competition for our students. The questions make them think from ground up rather than repeating formulas. The trip to IIT Kanpur was life-changing for our finalist."
              </p>
              <div className="pt-2">
                <p className="font-bold text-xs text-black">Dr. Sunita Mukherjee</p>
                <p className="text-[11px] text-black/60">Senior Science Coordinator, DPS R.K. Puram</p>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 space-y-3">
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500" />
                ))}
              </div>
              <p className="italic text-xs sm:text-sm text-black/80 leading-relaxed">
                "The diagnostic percentile report helped our teachers identify high-order logical talent early on. We look forward to TOSC every year."
              </p>
              <div className="pt-2">
                <p className="font-bold text-xs text-black">Prof. K. Venkatesh</p>
                <p className="text-[11px] text-black/60">Principal, National Public School Bengaluru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center space-y-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Write Your Own Success Story.
        </h2>
        <p className="mx-auto max-w-xl text-sm text-white/80">
          Register now to represent your school and compete for the national champion title at IIT Kanpur.
        </p>
        <Link href="/auth?tab=register">
          <Button size="lg" className="bg-white text-black font-semibold hover:bg-white/90">
            Register for TOSC '26
          </Button>
        </Link>
      </section>
    </PageShell>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS_DATA } from "@/data/faqs";
import {
  HelpCircle,
  Search,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageShell>
      {/* HEADER HERO */}
      <section className="space-y-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-none border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
          <HelpCircle className="h-4 w-4 text-yellow-300" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
            Helpdesk & Clarifications
          </span>
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          Frequently Asked Questions.
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl font-light leading-relaxed">
          Find comprehensive answers about registration, exam rules, syllabus, AI proctoring,
          and the Stage 2 Grand Finale at IIT Kanpur.
        </p>

        {/* Search Bar */}
        <div className="mx-auto max-w-xl pt-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
            <Input
              type="text"
              placeholder="Search by keyword (e.g. syllabus, IIT Kanpur, eligibility, fees)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-13 rounded-none border-white/20 bg-white/10 pl-12 pr-4 text-sm text-white placeholder:text-white/40 backdrop-blur-md focus:border-white focus:bg-white/15"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="mt-12">
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: "all", label: "All Questions" },
            { id: "general", label: "General & Overview" },
            { id: "registration", label: "Registration & Fees" },
            { id: "exam-pattern", label: "Exam Pattern" },
            { id: "finals-iitk", label: "Stage 2 @ IIT Kanpur" },
            { id: "results", label: "Results & Awards" },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-none px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-white text-black shadow-lg"
                  : "border border-white/15 bg-black/40 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQS ACCORDION CONTAINER */}
        <div className="mt-10 rounded-none border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12">
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center space-y-3">
              <p className="text-lg font-bold text-black">No matching questions found</p>
              <p className="text-xs text-black/60">Try searching for other terms or clear your search query.</p>
              <Button
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="rounded-none bg-black text-white hover:bg-black/90"
              >
                Reset Filters
              </Button>
            </div>
          ) : (
            <Accordion className="space-y-4">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-none border border-black/10 bg-white px-6 py-1 shadow-sm transition-all"
                >
                  <AccordionTrigger className="rounded-none text-left font-bold text-base text-black hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-black/80 leading-relaxed pb-6 pt-1">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </section>

      {/* STILL HAVE QUESTIONS HELPDESK */}
      <section className="mt-24">
        <div className="mb-10 text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Dedicated Assistance
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Still Have Questions?
          </h2>
          <p className="mx-auto max-w-lg text-xs sm:text-sm text-white/75">
            Our student organizing team and helpdesk at IIT Kanpur are available to assist you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-none border border-white/20 bg-white/10 p-6 backdrop-blur-md space-y-3 text-center">
            <Mail className="mx-auto h-7 w-7 text-yellow-300" />
            <h3 className="font-bold text-base text-white">Email Helpdesk</h3>
            <p className="text-xs text-white/70">For general queries, eligibility checks, and portal assistance.</p>
            <a
              href="mailto:tosc@techkriti.org"
              className="inline-block text-xs font-semibold text-white underline underline-offset-4"
            >
              tosc@techkriti.org
            </a>
          </div>

          <div className="rounded-none border border-white/20 bg-white/10 p-6 backdrop-blur-md space-y-3 text-center">
            <Phone className="mx-auto h-7 w-7 text-indigo-300" />
            <h3 className="font-bold text-base text-white">Direct Phone Support</h3>
            <p className="text-xs text-white/70">Monday to Saturday: 10:00 AM to 7:00 PM IST.</p>
            <p className="font-mono text-xs font-bold text-white">+91 512 259 7767</p>
          </div>

          <div className="rounded-none border border-white/20 bg-white/10 p-6 backdrop-blur-md space-y-3 text-center">
            <MapPin className="mx-auto h-7 w-7 text-emerald-300" />
            <h3 className="font-bold text-base text-white">IIT Kanpur Office</h3>
            <p className="text-xs text-white/70">Techkriti Secretariat, Students' Activity Centre, IIT Kanpur, UP - 208016.</p>
            <Link href="/about" className="inline-block text-xs font-semibold text-white underline underline-offset-4">
              Learn more about Techkriti
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

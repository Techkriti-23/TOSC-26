"use client";

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HALL_OF_FAME, MOCK_RESULTS_DB } from "@/data/results";
import {
 
  Search,
  CheckCircle2,
  Download,
  Award,
 
  BarChart3,
  Calendar,
  AlertCircle,
} from "lucide-react";

export default function ResultsPage() {
  const [rollInput, setRollInput] = useState("TOSC26-1001");
  const [searchedRecord, setSearchedRecord] = useState<any>(MOCK_RESULTS_DB["TOSC26-1001"]);
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = rollInput.trim().toUpperCase();
    const result = MOCK_RESULTS_DB[formatted] || null;
    setSearchedRecord(result);
    setHasSearched(true);
  };

  return (
    <PageShell>
      {/* HEADER HERO */}
      <section className="space-y-6 text-center">
       

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          National Results Portal.
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl font-light leading-relaxed">
          Check your Stage 1 Prelims score, percentile, and Stage 2 IIT Kanpur qualification status.
          Explore the National Hall of Fame and download your verified certificate.
        </p>

        {/* ROLL NUMBER SEARCH FORM */}
        <div className="mx-auto max-w-xl pt-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter Roll Number (e.g. TOSC26-1001)..."
              value={rollInput}
              onChange={(e) => setRollInput(e.target.value)}
              className="h-13 rounded-2xl border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/40 backdrop-blur-md focus:border-white focus:bg-white/15"
            />
            <Button
              type="submit"
              className="h-13 rounded-2xl bg-white px-6 font-semibold text-black hover:bg-white/90"
            >
              <Search className="mr-2 h-4 w-4" /> View Scorecard
            </Button>
          </form>

          {/* Quick Demo Roll Numbers */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/60">
            <span>Try sample roll numbers:</span>
            {["TOSC26-1001", "TOSC26-1002", "TOSC26-1003"].map((demo) => (
              <button
                key={demo}
                type="button"
                onClick={() => {
                  setRollInput(demo);
                  setSearchedRecord(MOCK_RESULTS_DB[demo]);
                  setHasSearched(true);
                }}
                className="underline underline-offset-2 hover:text-white cursor-pointer"
              >
                {demo}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SCORECARD DISPLAY */}
      {hasSearched && (
        <section className="mt-14">
          {searchedRecord ? (
            <div className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12 space-y-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-black/10 pb-6">
                <div>
                  <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    {searchedRecord.status}
                  </span>
                  <h2 className="mt-3 text-3xl font-bold text-black">{searchedRecord.studentName}</h2>
                  <p className="text-xs font-medium text-black/60">
                    Roll No: <span className="font-mono font-bold text-black">{searchedRecord.rollNumber}</span> • {searchedRecord.pool}
                  </p>
                  <p className="text-xs text-black/70 mt-0.5">
                    {searchedRecord.school}, {searchedRecord.city}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-black/5 p-4 text-center min-w-28">
                    <p className="text-[10px] text-black/50 uppercase font-bold">Total Score</p>
                    <p className="font-mono text-2xl font-bold text-black">
                      {searchedRecord.score} <span className="text-sm text-black/40">/ {searchedRecord.totalMarks}</span>
                    </p>
                  </div>

                  <div className="rounded-2xl bg-black text-white p-4 text-center min-w-28">
                    <p className="text-[10px] text-white/60 uppercase font-bold">All India Rank</p>
                    <p className="font-mono text-2xl font-bold">AIR {searchedRecord.rank}</p>
                  </div>

                  <div className="rounded-2xl bg-black/5 p-4 text-center min-w-28 hidden sm:block">
                    <p className="text-[10px] text-black/50 uppercase font-bold">Percentile</p>
                    <p className="font-mono text-2xl font-bold text-emerald-700">{searchedRecord.percentile}</p>
                  </div>
                </div>
              </div>

              {/* SUBJECT BREAKDOWN */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-black flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" /> Cognitive & Subject-Wise Performance
                </h3>

                <div className="grid gap-4 sm:grid-cols-3">
                  {searchedRecord.subjectBreakdown.map((sub: any, idx: number) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm space-y-2"
                    >
                      <p className="font-bold text-sm text-black">{sub.subject}</p>
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-xl font-bold text-black">
                          {sub.scored} / {sub.total}
                        </span>
                        <span className="text-xs font-semibold text-emerald-700">
                          {sub.accuracy} Acc.
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-black/10 overflow-hidden">
                        <div
                          className="h-full bg-black rounded-full"
                          style={{ width: `${(sub.scored / sub.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION FOOTER */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
                <div className="text-xs text-black/70">
                  🎉 Congratulations! Your official certificate of merit is verified by Techkriti, IIT Kanpur.
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={() => alert("Downloading official high-resolution scorecard PDF...")}
                    className="bg-black text-white hover:bg-black/90 text-xs"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Scorecard PDF
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-white/20 bg-white/10 p-12 text-center text-white backdrop-blur-xl space-y-3">
              <AlertCircle className="mx-auto h-10 w-10 text-amber-400" />
              <h3 className="text-xl font-bold">Roll Number Not Found</h3>
              <p className="text-xs text-white/70 max-w-md mx-auto">
                No matching candidate record was found for "{rollInput}". Please check your admit card or try one of the demo roll numbers above.
              </p>
            </div>
          )}
        </section>
      )}

      {/* NATIONAL HALL OF FAME LEADERBOARD */}
      <section className="mt-24">
        <div className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-black/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                National Top Performers
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-black">
                Hall of Fame • Top Rankers
              </h2>
            </div>
            <p className="text-xs text-black/70">
              Recognizing the top cognitive thinkers across all three pools.
            </p>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-black/10 text-[11px] font-bold uppercase tracking-wider text-black/50">
                  <th className="py-3 px-3">Rank</th>
                  <th className="py-3 px-3">Student Name</th>
                  <th className="py-3 px-3">Pool</th>
                  <th className="py-3 px-3">School & City</th>
                  <th className="py-3 px-3">Score</th>
                  <th className="py-3 px-3">Award & Prize</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {HALL_OF_FAME.map((ranker) => (
                  <tr key={ranker.rank} className="hover:bg-black/[0.02]">
                    <td className="py-4 px-3 font-mono font-bold text-black">
                      {ranker.rank === 1 ? (
                        <span className="inline-flex items-center gap-1 rounded-md bg-yellow-400 text-black px-2 py-0.5 text-xs font-bold">
                          🥇 AIR 1
                        </span>
                      ) : ranker.rank === 2 ? (
                        <span className="inline-flex items-center gap-1 rounded-md bg-slate-300 text-black px-2 py-0.5 text-xs font-bold">
                          🥈 AIR 2
                        </span>
                      ) : ranker.rank === 3 ? (
                        <span className="inline-flex items-center gap-1 rounded-md bg-amber-700 text-white px-2 py-0.5 text-xs font-bold">
                          🥉 AIR 3
                        </span>
                      ) : (
                        `AIR ${ranker.rank}`
                      )}
                    </td>
                    <td className="py-4 px-3 font-semibold text-black">{ranker.name}</td>
                    <td className="py-4 px-3 text-black/70">{ranker.pool}</td>
                    <td className="py-4 px-3 text-black/70">
                      {ranker.school}, <span className="font-medium text-black">{ranker.city}</span>
                    </td>
                    <td className="py-4 px-3 font-mono font-bold text-black">{ranker.score}</td>
                    <td className="py-4 px-3 font-medium text-black">{ranker.award}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

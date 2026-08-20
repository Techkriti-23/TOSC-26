import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { STUDENT_STORIES } from "@/data/stories";
import {
  ArrowLeft,

  Quote,
  Building,
  MapPin,
  CheckCircle2,
 
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = STUDENT_STORIES.find((s) => s.slug === slug);

  if (!story) {
    return (
      <PageShell>
        <div className="py-20 text-center space-y-4">
          <h1 className="text-3xl font-bold">Story Not Found</h1>
          <p className="text-white/70">The requested achiever profile could not be located.</p>
          <Link href="/stories">
            <Button className="bg-white text-black hover:bg-white/90">
              Return to All Stories
            </Button>
          </Link>
        </div>
      </PageShell>
    );
  }

  const otherStories = STUDENT_STORIES.filter((s) => s.slug !== story.slug).slice(0, 2);

  return (
    <PageShell>
      {/* NAVIGATION CRUMB */}
      <div className="mb-6">
        <Link
          href="/stories"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 h-3.5 w-3.5" /> Back to Hall of Achievers
        </Link>
      </div>

      {/* ACHIEVER HERO */}
      <div className="rounded-3xl border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12 space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-black/10 pb-8">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-white text-xl font-bold shadow-xl">
              {story.avatar}
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-black px-3 py-1 text-xs font-bold text-white mb-2">
                {story.rank} • TOSC {story.year}
              </div>
              <h1 className="text-3xl font-bold sm:text-4xl text-black">{story.name}</h1>
              <p className="text-xs font-medium text-black/70 mt-0.5">{story.pool}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-black/5 p-4 text-center">
            <div>
              <p className="text-[10px] text-black/60 uppercase font-bold">Total Score</p>
              <p className="font-mono text-xl font-bold">{story.score}</p>
            </div>
            <div>
              <p className="text-[10px] text-black/60 uppercase font-bold">Location</p>
              <p className="text-sm font-bold">{story.city}</p>
            </div>
          </div>
        </div>

        {/* METADATA STRIP */}
        <div className="flex flex-wrap gap-4 text-xs text-black/70">
          <span className="flex items-center gap-1.5 font-medium">
            <Building className="h-4 w-4" /> {story.school}
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="h-4 w-4" /> {story.city}, {story.state}
          </span>
        </div>

        {/* FEATURED QUOTE */}
        <div className="relative rounded-2xl border border-black/10 bg-black/[0.03] p-6 sm:p-8">
          <Quote className="absolute right-6 top-6 h-8 w-8 text-black/10" />
          <p className="italic text-base sm:text-xl font-serif text-black/90 leading-relaxed">
            "{story.quote}"
          </p>
        </div>

        {/* FULL NARRATIVE */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">The Journey</h2>
          <p className="text-sm sm:text-base text-black/80 leading-relaxed">
            {story.fullStory}
          </p>
        </div>

        {/* IITK EXPERIENCE */}
        <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 space-y-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-black" />
            <h3 className="font-bold text-base text-black">The IIT Kanpur Finale Experience</h3>
          </div>
          <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
            "{story.iitkExperience}"
          </p>
        </div>

        {/* KEY TAKEAWAYS & ADVICE */}
        <div className="space-y-4 border-t border-black/10 pt-6">
          <h2 className="text-xl font-bold text-black">Advice for Future Aspirants</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {story.keyTakeaways.map((tip, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-black/10 bg-white p-4 shadow-sm space-y-2"
              >
                <span className="font-mono text-xs font-bold text-black/40">Tip #0{idx + 1}</span>
                <p className="text-xs text-black/85 leading-relaxed font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MORE STORIES */}
      <section className="mt-16 space-y-6">
        <h3 className="text-2xl font-bold text-white">More Inspiring Stories</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {otherStories.map((s) => (
            <Link
              key={s.slug}
              href={`/stories/${s.slug}`}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-all hover:bg-white/15 block space-y-3"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg text-white">{s.name}</h4>
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs text-white">
                  {s.rank}
                </span>
              </div>
              <p className="text-xs text-white/70 italic line-clamp-2">"{s.quote}"</p>
              <span className="inline-flex items-center text-xs font-semibold text-white underline underline-offset-4">
                Read Story <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

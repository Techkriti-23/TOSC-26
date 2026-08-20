"use client";

import { useState } from "react";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PARTNERS_DATA, PROMINENT_SCHOOLS } from "@/data/sponsors";
import {
 
  Building2,
  GraduationCap,
  Award,
  CheckCircle2,
  Send,
  Users,
  Handshake,
  ShieldCheck,
} from "lucide-react";

export default function PartnersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: "",
    city: "",
    state: "",
    coordinatorName: "",
    email: "",
    phone: "",
    studentCount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <PageShell>
      {/* HEADER HERO */}
      <section className="space-y-6 text-center">
       

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          Powered By Leading Institutions.
        </h1>

        <p className="mx-auto max-w-3xl text-lg text-white/80 sm:text-xl font-light leading-relaxed">
          TOSC partners with premier schools, academic organizations, and innovation labs nationwide to bring
          unmatched competitive exposure to school students.
        </p>
      </section>

      {/* INSTITUTIONAL & KNOWLEDGE PARTNERS */}
      <section className="mt-20">
        <div className="mb-10 text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Core Collaborators
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Strategic Partners
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {PARTNERS_DATA.map((partner, idx) => (
            <div
              key={idx}
              className="rounded-none border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-10 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-none bg-black px-3 py-1 text-xs font-bold text-white uppercase tracking-wider">
                    {partner.badge}
                  </span>
                  <span className="font-mono text-xs text-black/50">{partner.role}</span>
                </div>

                <h3 className="text-2xl font-bold text-black">{partner.name}</h3>
                <p className="text-xs sm:text-sm text-black/80 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              {partner.location && (
                <div className="border-t border-black/10 pt-3 text-xs text-black/60 font-medium">
                  📍 {partner.location}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER SCHOOLS NETWORK */}
      <section className="mt-24">
        <div className="rounded-none border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-black/10 pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                Nationwide Reach
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Partner School Cohorts
              </h2>
            </div>
            <p className="text-xs text-black/70 max-w-xs sm:text-right">
              Over 500+ schools act as registered regional exam hubs and test centers.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROMINENT_SCHOOLS.map((sch, idx) => (
              <div
                key={idx}
                className="rounded-none border border-black/10 bg-white p-5 shadow-sm space-y-2"
              >
                <Building2 className="h-5 w-5 text-black" />
                <h4 className="font-bold text-sm text-black">{sch.name}</h4>
                <p className="text-xs text-black/60">{sch.locations}</p>
                <p className="font-mono text-[11px] font-semibold text-black/80 pt-1">
                  {sch.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL BENEFITS */}
      <section className="mt-24">
        <div className="mb-10 text-center space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Why Partner
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Benefits For Partner Schools
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-none border border-white/20 bg-white/10 p-6 backdrop-blur-md space-y-3">
            <Award className="h-6 w-6 text-yellow-400" />
            <h3 className="font-bold text-lg text-white">Best School Rolling Trophy</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              Institutional awards for schools with the highest aggregate score and top percentile qualifiers.
            </p>
          </div>

          <div className="rounded-none border border-white/20 bg-white/10 p-6 backdrop-blur-md space-y-3">
            <GraduationCap className="h-6 w-6 text-indigo-400" />
            <h3 className="font-bold text-lg text-white">Exclusive STEM Workshops</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              Free robotics, AI, and science reasoning workshops conducted by IIT Kanpur student mentors for your school.
            </p>
          </div>

          <div className="rounded-none border border-white/20 bg-white/10 p-6 backdrop-blur-md space-y-3">
            <Users className="h-6 w-6 text-emerald-400" />
            <h3 className="font-bold text-lg text-white">Teacher Coordinator Honorarium</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              Official Certificates of Appreciation and campus invites to IIT Kanpur during Techkriti.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNER ENQUIRY FORM */}
      <section className="mt-24">
        <div className="rounded-none border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
                Join the Network
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
                Register Your School as a Partner
              </h2>
              <p className="text-xs sm:text-sm text-black/75">
                Fill out the coordinator details below, and our outreach team from IIT Kanpur will get in touch with registration kits and examination guidelines.
              </p>
            </div>

            {formSubmitted ? (
              <div className="rounded-none border border-emerald-500 bg-emerald-50 p-8 text-center space-y-3">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold text-emerald-900">Enquiry Received!</h3>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                  Thank you for your interest. A member of the Techkriti School Outreach team will contact you within 24 hours with school registration codes.
                </p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  variant="outline"
                  size="sm"
                  className="mt-4 rounded-none border-emerald-600 text-emerald-900 hover:bg-emerald-100"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black uppercase tracking-wider">
                      School / Institution Name *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Delhi Public School"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                      className="rounded-none bg-white text-black border-black/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black uppercase tracking-wider">
                      City & State *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Bengaluru, Karnataka"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="rounded-none bg-white text-black border-black/20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black uppercase tracking-wider">
                      Coordinator / Principal Name *
                    </label>
                    <Input
                      required
                      placeholder="e.g. Dr. Rajesh Sharma"
                      value={formData.coordinatorName}
                      onChange={(e) => setFormData({ ...formData, coordinatorName: e.target.value })}
                      className="rounded-none bg-white text-black border-black/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black uppercase tracking-wider">
                      Official Email *
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="e.g. tosc@school.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-none bg-white text-black border-black/20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black uppercase tracking-wider">
                      Contact Number / WhatsApp *
                    </label>
                    <Input
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-none bg-white text-black border-black/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-black uppercase tracking-wider">
                      Est. Student Count (Classes 6-12)
                    </label>
                    <Input
                      placeholder="e.g. 200 - 500 students"
                      value={formData.studentCount}
                      onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                      className="rounded-none bg-white text-black border-black/20"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full rounded-none bg-black text-white hover:bg-black/90 py-6 text-sm font-semibold">
                  <Send className="mr-2 h-4 w-4" /> Submit School Partnership Request
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

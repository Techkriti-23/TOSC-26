"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
 
  Lock,
  User,
  Mail,
  School,
  MapPin,
  Phone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const POOL_CLASS_OPTIONS: Record<string, string[]> = {
  junior: ["Class 6", "Class 7", "Class 8"],
  senior: ["Class 9", "Class 10"],
  "super-senior": ["Class 11", "Class 12"],
};

function AuthContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialTab = searchParams.get("tab") === "register" ? "register" : "login";

  const [activeTab, setActiveTab] = useState<"login" | "register" | "coordinator">(
    initialTab as any
  );

  const [loginForm, setLoginForm] = useState({
    identifier: "",
    password: "",
  });

  const [regForm, setRegForm] = useState({
    fullName: "",
    pool: "senior",
    classGrade: "Class 10",
    schoolName: "",
    city: "",
    state: "",
    email: "",
    phone: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 800);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Registration successful! Redirecting to your dashboard...");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }, 900);
  };

  return (
    <div className="mx-auto max-w-xl py-6">
      {/* BRANDING HEADER */}
      <div className="text-center space-y-3 mb-8">
        
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          TOSC '26 Candidate Access
        </h1>
        <p className="text-xs sm:text-sm text-white/70">
          Sign in to your candidate portal or create a new student profile for the championship.
        </p>
      </div>

      {/* TAB SELECTOR */}
      <div className="grid grid-cols-3 gap-2 border border-white/20 bg-black/40 p-1.5 backdrop-blur-xl mb-8">
        <button
          type="button"
          onClick={() => {
            setActiveTab("login");
            setSuccessMessage(null);
          }}
          className={`rounded-[4px] py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "login"
              ? "bg-white text-black shadow-lg"
              : "text-white/70 hover:text-white"
          }`}
        >
          Sign In
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("register");
            setSuccessMessage(null);
          }}
          className={`rounded-[4px] py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "register"
              ? "bg-white text-black shadow-lg"
              : "text-white/70 hover:text-white"
          }`}
        >
          Register
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveTab("coordinator");
            setSuccessMessage(null);
          }}
          className={`rounded-[4px] py-2.5 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "coordinator"
              ? "bg-white text-black shadow-lg"
              : "text-white/70 hover:text-white"
          }`}
        >
          Schools
        </button>
      </div>

      {/* CARD CONTAINER */}
      <div className="border border-white/20 bg-white/90 p-8 text-black shadow-2xl backdrop-blur-xl md:p-10">
        {successMessage && (
          <div className="mb-6 flex items-center gap-2 border border-emerald-500 bg-emerald-50 p-4 text-xs font-semibold text-emerald-900">
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* TAB 1: STUDENT LOGIN */}
        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-black">Candidate Sign In</h2>
              <p className="text-xs text-black/60">Enter your Roll Number or registered Email address.</p>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-semibold text-black uppercase tracking-wider">
                Email / Roll Number
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/50" />
                <Input
                  required
                  placeholder="e.g. TOSC26-1001 or student@example.com"
                  value={loginForm.identifier}
                  onChange={(e) => setLoginForm({ ...loginForm, identifier: e.target.value })}
                  className="bg-white text-black border-black/20 pl-10 pr-3.5 h-11 text-sm rounded-[4px]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-black uppercase tracking-wider">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => alert("Password reset link sent to your registered email.")}
                  className="text-xs font-semibold text-black/70 hover:text-black underline cursor-pointer"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/50" />
                <Input
                  required
                  type="password"
                  placeholder="••••••••"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="bg-white text-black border-black/20 pl-10 pr-3.5 h-11 text-sm rounded-[4px]"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white hover:bg-black/90 h-11 text-sm font-semibold mt-4"
            >
              {isLoading ? "Signing in..." : "Enter Candidate Dashboard"}
            </Button>

            <div className="pt-2 text-center text-xs text-black/60">
              New to TOSC '26?{" "}
              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className="font-bold text-black underline cursor-pointer"
              >
                Create a student registration
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: STUDENT REGISTRATION */}
        {activeTab === "register" && (
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-black">New Registration</h2>
              <p className="text-xs text-black/60">Register for the Stage 1 Prelims examination.</p>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-semibold text-black uppercase tracking-wider">
                Full Name of Candidate *
              </label>
              <Input
                required
                placeholder="e.g. Aarav Sharma"
                value={regForm.fullName}
                onChange={(e) => setRegForm({ ...regForm, fullName: e.target.value })}
                className="bg-white text-black border-black/20 px-3.5 h-11 text-sm rounded-[4px]"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-black uppercase tracking-wider">
                  Target Pool *
                </label>
                <select
                  value={regForm.pool}
                  onChange={(e) => {
                    const nextPool = e.target.value;
                    const available = POOL_CLASS_OPTIONS[nextPool] || [];
                    setRegForm({
                      ...regForm,
                      pool: nextPool,
                      classGrade: available[0] || "",
                    });
                  }}
                  className="h-11 w-full rounded-[4px] border border-black/20 bg-white px-3.5 text-xs font-medium text-black outline-none focus:border-black cursor-pointer"
                >
                  <option value="junior">Junior Pool (Classes 6-8)</option>
                  <option value="senior">Senior Pool (Classes 9-10)</option>
                  <option value="super-senior">Super Senior (Classes 11-12)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-black uppercase tracking-wider">
                  Current Grade / Class *
                </label>
                <select
                  required
                  value={regForm.classGrade}
                  onChange={(e) => setRegForm({ ...regForm, classGrade: e.target.value })}
                  className="h-11 w-full rounded-[4px] border border-black/20 bg-white px-3.5 text-xs font-medium text-black outline-none focus:border-black cursor-pointer"
                >
                  {(POOL_CLASS_OPTIONS[regForm.pool] || []).map((cls) => (
                    <option key={cls} value={cls}>
                      {cls}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-black uppercase tracking-wider">
                School Name *
              </label>
              <Input
                required
                placeholder="e.g. Delhi Public School, R.K. Puram"
                value={regForm.schoolName}
                onChange={(e) => setRegForm({ ...regForm, schoolName: e.target.value })}
                className="bg-white text-black border-black/20 px-3.5 h-11 text-sm rounded-[4px]"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-black uppercase tracking-wider">
                  Email Address *
                </label>
                <Input
                  required
                  type="email"
                  placeholder="student@example.com"
                  value={regForm.email}
                  onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                  className="bg-white text-black border-black/20 px-3.5 h-11 text-sm rounded-[4px]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-black uppercase tracking-wider">
                  Mobile / WhatsApp *
                </label>
                <Input
                  required
                  placeholder="+91 98765 43210"
                  value={regForm.phone}
                  onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                  className="bg-white text-black border-black/20 px-3.5 h-11 text-sm rounded-[4px]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-black uppercase tracking-wider">
                Create Password *
              </label>
              <Input
                required
                type="password"
                placeholder="Minimum 8 characters"
                value={regForm.password}
                onChange={(e) => setRegForm({ ...regForm, password: e.target.value })}
                className="bg-white text-black border-black/20 px-3.5 h-11 text-sm rounded-[4px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white hover:bg-black/90 h-11 text-sm font-semibold mt-4"
            >
              {isLoading ? "Creating Profile..." : "Complete Student Registration"}
            </Button>
          </form>
        )}

        {/* TAB 3: COORDINATOR LOGIN */}
        {activeTab === "coordinator" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-black">School Coordinator Portal</h2>
              <p className="text-xs text-black/60">Bulk registration and center administration.</p>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-xs font-semibold text-black uppercase tracking-wider">
                School Registration Code / Center ID
              </label>
              <Input
                required
                placeholder="e.g. SCH-DEL-1049"
                defaultValue="SCH-DEL-1049"
                className="bg-white text-black border-black/20 px-3.5 h-11 text-sm font-mono rounded-[4px]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-black uppercase tracking-wider">
                Coordinator Password
              </label>
              <Input
                required
                type="password"
                defaultValue="••••••••"
                className="bg-white text-black border-black/20 px-3.5 h-11 text-sm rounded-[4px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white hover:bg-black/90 h-11 text-sm font-semibold mt-4"
            >
              {isLoading ? "Authenticating..." : "Access Coordinator Management Portal"}
            </Button>

            <div className="pt-2 text-center text-xs text-black/60">
              Need to enroll your school?{" "}
              <Link href="/partners" className="font-bold text-black underline">
                Submit School Partnership Request
              </Link>
            </div>
          </form>
        )}

        {/* SECURITY FOOTER */}
        <div className="mt-6 flex items-center justify-center gap-2 border-t border-black/10 pt-4 text-[11px] text-black/50">
          <ShieldCheck className="h-4 w-4 text-black/60" />
          <span>Encrypted Session • Official Techkriti IIT Kanpur Academic Server</span>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <PageShell>
      <Suspense fallback={<div className="py-20 text-center text-white">Loading portal...</div>}>
        <AuthContent />
      </Suspense>
    </PageShell>
  );
}

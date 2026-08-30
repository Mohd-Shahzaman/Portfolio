import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Rule } from "@/components/site/Reveal";
import {
  achievements,
  certifications,
  experience,
  profile,
  resumeSkills,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Mohammed Shahzaman" },
      {
        name: "description",
        content:
          "Resume of Mohammed Shahzaman: MERN developer at GalactPro, AI systems and automation, ServiceNow CSA/CAD certified, national hackathon awards.",
      },
      { property: "og:title", content: "Resume — Mohammed Shahzaman" },
      {
        property: "og:description",
        content:
          "Experience, technical skills, certifications and hackathon record of a full-stack product developer.",
      },
    ],
  }),
  component: ResumePage,
});

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-3 border-t border-ink/15 py-6 md:grid-cols-12 md:gap-4">
      <p className="eyebrow text-ink/45 md:col-span-3">{label}</p>
      <div className="min-w-0 md:col-span-9">{children}</div>
    </div>
  );
}

function ResumePage() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-12 md:py-20">
      <span className="aurora -left-16 top-4 size-64 bg-teal/35 drift" aria-hidden="true" />
      <span className="aurora right-0 top-56 size-56 bg-gold/30 drift" style={{ animationDelay: "-8s" }} aria-hidden="true" />
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow text-ink/50">Curriculum vitae</p>
          <h1 className="settle ink-wash mt-4 font-display text-4xl font-light leading-[0.94] tracking-tight sm:text-5xl md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-sm text-ink/70">
            {profile.role} · AI Systems · Automation
          </p>
        </div>
        <div className="space-y-1 text-sm text-ink/55 md:text-right">
          <p>{profile.education}</p>
          <p>{profile.location}</p>
          <p>
            <a href={`tel:${profile.phone}`} className="hover:text-ink">
              {profile.phone}
            </a>{" "}
            ·{" "}
            <a href={`mailto:${profile.email}`} className="hover:text-ink">
              {profile.email}
            </a>
          </p>
        </div>
      </header>

      <div className="mt-16 flex justify-center">
        <a
          href="/portfolio/Mohammed_Shahzaman_Resume_.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-4 overflow-hidden bg-ink px-8 py-4 text-[13px] font-medium uppercase tracking-[0.2em] text-paper transition-transform hover:-translate-y-1"
        >
          <span>View / Download Resume</span>
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-paper/20 transition-transform group-hover:scale-110">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </span>
        </a>
      </div>
    </div>
  );
}

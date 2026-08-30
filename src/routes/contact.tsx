import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Rule } from "@/components/site/Reveal";
import { profile } from "@/lib/portfolio-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mohammed Shahzaman" },
      {
        name: "description",
        content:
          "Get in touch with Mohammed Shahzaman for full-stack product work, AI integration and automation. Based in Hyderabad, India.",
      },
      { property: "og:title", content: "Contact — Mohammed Shahzaman" },
      {
        property: "og:description",
        content:
          "Open to projects, collaborations and opportunities. Typically responds within 24–48 hours.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-12 md:py-20">
      <span className="aurora -left-16 top-4 size-64 bg-gold/40 drift" aria-hidden="true" />
      <span className="aurora right-0 top-56 size-56 bg-teal/30 drift" style={{ animationDelay: "-8s" }} aria-hidden="true" />
      <header>
        <p className="eyebrow text-ink/50">Correspondence</p>
        <h1 className="settle ink-wash mt-4 max-w-[14ch] font-display text-4xl font-light leading-[0.94] tracking-tight text-balance sm:text-5xl md:text-7xl">
          Get in touch
        </h1>
        <p className="mt-6 max-w-[48ch] text-pretty text-sm text-ink/65 md:text-base">
          Open to projects, collaborations and opportunities. Whether you’re building a
          product, need AI integration, or want a reliable full-stack developer — I’m
          available.
        </p>
      </header>

      <Rule className="mt-12" />

      <div className="grid gap-x-12 sm:grid-cols-2">
        <a
          href={`mailto:${profile.email}`}
          className="group flex flex-col gap-3 border-b border-border py-7 transition-colors duration-300 hover:bg-amber-tint/40 sm:py-8"
        >
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-gold text-ink">
              <Mail size={15} />
            </span>
            <span className="eyebrow text-ink/50">Email</span>
          </div>
          <span className="break-words font-display text-base font-light tracking-tight sm:text-lg md:text-xl">
            {profile.email}
          </span>
          <span className="text-sm text-ink/55">
            Typically respond within 24–48 hours.
          </span>
        </a>

        <div className="flex flex-col gap-3 border-b border-border py-8">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-coral text-ink">
              <Phone size={15} />
            </span>
            <span className="eyebrow text-ink/50">Phone</span>
          </div>
          <a
            href={`tel:${profile.phone}`}
            className="font-display text-lg font-light tracking-tight transition-colors hover:text-ink/60 md:text-xl"
          >
            {profile.phone}
          </a>
          <span className="text-sm text-ink/55">{profile.location}</span>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 border-b border-border py-8 transition-colors duration-300 hover:bg-paper-deep"
        >
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-teal text-ink">
              <Github size={15} />
            </span>
            <span className="eyebrow text-ink/50">GitHub</span>
          </div>
          <span className="inline-flex items-center gap-2 break-words font-display text-base font-light tracking-tight sm:text-lg md:text-xl">
            View projects
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
          <span className="text-sm text-ink/55">Source, experiments and pipelines.</span>
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 border-b border-border py-8 transition-colors duration-300 hover:bg-paper-deep"
        >
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-violet-tint text-ink">
              <Linkedin size={15} />
            </span>
            <span className="eyebrow text-ink/50">LinkedIn</span>
          </div>
          <span className="inline-flex items-center gap-2 break-words font-display text-base font-light tracking-tight sm:text-lg md:text-xl">
            Connect
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
          <span className="text-sm text-ink/55">Work history and updates.</span>
        </a>
      </div>

      <p className="mt-12 max-w-[52ch] font-display text-2xl font-light leading-tight tracking-tight text-balance md:text-3xl">
        Let’s collaborate — send a note and tell me what you’re building.
      </p>
    </div>
  );
}

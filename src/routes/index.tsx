import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, Trophy } from "lucide-react";
import portrait from "@/assets/portrait.jpg.asset.json";
import funding from "@/assets/funding.png.asset.json";
import summit from "@/assets/servicenow-summit.jpg.asset.json";
import hackathon from "@/assets/hackathon.jpg.asset.json";
import { Reveal, Rule, SectionLabel } from "@/components/site/Reveal";
import { Marquee } from "@/components/site/Marquee";
import { Counter } from "@/components/site/Counter";
import { Magnetic } from "@/components/site/Magnetic";
import { SmartImage } from "@/components/site/SmartImage";
import { SnapRail } from "@/components/site/SnapRail";
import {
  CurtainWipe,
  DrawRule,
  Parallax,
  StickyRecede,
  TiltIn,
  VelocityFlex,
  WordCurtain,
  WordRise,
} from "@/components/site/ScrollFX";

import {
  accentDot,
  achievements,
  profile,
  projects,
  skillGroups,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohammed Shahzaman — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-stack developer building MERN applications, AI agents, and automation. Rs. 13.6 Lakhs funded at MSME 5.0 Hackathon 2025.",
      },
      { property: "og:title", content: "Mohammed Shahzaman — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "MERN Stack · AI Agents · Automation. Creating AI-powered systems and real-time applications that turn ideas into working products.",
      },
    ],
  }),
  component: Home,
});

const ctas = [
  { to: "/resume", label: "Resume", bg: "bg-gold" },
  { to: "/projects", label: "Projects", bg: "bg-coral" },
  { to: "/contact", label: "Contact", bg: "bg-teal" },
] as const;

const recognition = [
  {
    image: "/images/final ceer.png",
    alt: "MSME Idea Hackathon 5.0 funding approval for Rs. 13.6 Lakhs",
    badge: "Rs. 13.6 Lakhs Funded",
    accent: "gold" as const,
    title: "Movellea — AI Story Visualization",
    body: "Approved for major funding under the MSME Idea Hackathon 5.0. Movellea is an AI pipeline that converts books into cinematic narrative outputs by automating scene generation and story structuring.",
    tags: ["MSME 5.0"],
  },
  {
    image: "/images/serviceeenoww.png",
    alt: "Group photo at ServiceNow AI Skills Summit 2026, Coimbatore",
    badge: "Global Tech Event",
    accent: "teal" as const,
    title: "ServiceNow AI Skills Summit 2026",
    body: "Participated in the AI Skills Summit at Coimbatore, exploring the edge of automation and enterprise AI integration alongside industry leaders.",
    tags: ["Coimbatore", "ServiceNow"],
  },
  {
    image: "/images/summoned.png",
    alt: "Summoned for Nothing — Runner-Up at NIT Rourkela National Game Jam",
    badge: "Runner-Up",
    accent: "coral" as const,
    title: "Runner-Up · NIT Rourkela × GDAI National Game Jam",
    body: "Built Summoned for Nothing — a complete game in 36 hours using Unity, from concept to fully playable, under strict time constraints. Hosted by National Institute of Technology Rourkela in collaboration with the Game Developers Association of India.",
    tags: ["NIT Rourkela", "Unity", "Remote"],
    portrait: true,
  },
  {
    image: "/images/IMG-20260325-WA0085.jpg.jpeg",
    alt: "GITAM Havana National Hackathon runner-up",
    badge: "Runner-up Award",
    accent: "coral" as const,
    title: "GITAM Havana National Hackathon",
    body: "Secured runner-up at the national-level hackathon hosted by GITAM School of Core Engineering — rapid prototyping, robust architecture, tight deadlines.",
    tags: ["Hyderabad", "Mar 2026"],
  },
];

const stats = [
  { value: 13.6, decimals: 1, prefix: "₹", suffix: "L", label: "Funding secured" },
  { value: 6, decimals: 0, prefix: "", suffix: "", label: "Hackathon wins & awards" },
  { value: 12, decimals: 0, prefix: "", suffix: "+", label: "Worked on own ideas" },
];

const ticker = [
  "MERN Stack",
  "AI Agents",
  "Automation",
  "Real-time Systems",
  "MSME 5.0 Funded",
  "Hyderabad, India",
  "Open to work",
];

const statPaint = [
  { fill: "bg-sun/45", bar: "bg-gold", hover: "hover:bg-sun/25" },
  { fill: "bg-sea/45", bar: "bg-teal", hover: "hover:bg-sea/25" },
  { fill: "bg-rose/40", bar: "bg-coral", hover: "hover:bg-rose/25" },
  { fill: "bg-grape/45", bar: "bg-[oklch(0.62_0.16_305)]", hover: "hover:bg-grape/25" },
];

const projectHover: Record<string, string> = {
  gold: "hover:bg-sun/25",
  coral: "hover:bg-rose/25",
  teal: "hover:bg-sea/25",
  violet: "hover:bg-grape/25",
};

const projectPaint: Record<string, string> = {
  gold: "bg-sun/40",
  coral: "bg-rose/35",
  teal: "bg-sea/40",
  violet: "bg-grape/40",
};

function Home() {

  return (
    <>
      {/* HERO */}
      <StickyRecede>
      <header className="relative mx-auto max-w-6xl px-5 sm:px-6 pb-10 pt-10 md:pt-16">
        <span className="aurora -left-10 top-0 size-64 bg-gold/45 drift md:size-80" aria-hidden="true" />
        <span
          className="aurora right-0 top-40 size-56 bg-teal/40 drift md:size-72"
          style={{ animationDelay: "-6s" }}
          aria-hidden="true"
        />
        <span
          className="aurora bottom-0 left-1/3 size-52 bg-coral/30 drift md:size-64"
          style={{ animationDelay: "-12s" }}
          aria-hidden="true"
        />
        <div className="paper-frame guide-grid relative grid overflow-hidden border border-ink/10 md:grid-cols-12">
          <span className="crosshair-lines left-4 top-4" aria-hidden="true" />
          <span className="crosshair-lines bottom-4 right-4 rotate-180" aria-hidden="true" />


          <div className="relative flex min-h-[26rem] flex-col justify-between border-b border-ink/10 p-5 sm:p-10 md:col-span-8 md:min-h-[39rem] md:border-b-0 md:border-r md:p-12">
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4">
              </div>
              <div className="hidden items-center gap-1.5 sm:flex" aria-label="Registration colors">
                <span className="size-2.5 rounded-full bg-teal pulse-soft transition-transform hover:scale-150" />
                <span className="size-2.5 rounded-full bg-coral pulse-soft transition-transform hover:scale-150" style={{ animationDelay: "0.3s" }} />
                <span className="size-2.5 rounded-full bg-gold pulse-soft transition-transform hover:scale-150" style={{ animationDelay: "0.6s" }} />
                <span className="size-2.5 rounded-full bg-ink pulse-soft transition-transform hover:scale-150" style={{ animationDelay: "0.9s" }} />
              </div>
            </div>

            <div className="mt-10 md:mt-16">
              <h1 className="settle font-display text-[clamp(2rem,9vw,7.6rem)] font-light leading-[0.86] tracking-tight [overflow-wrap:normal] md:max-w-[8ch] md:leading-[0.82]">
                Mohammed
                <br />
                Shahzaman
              </h1>

              <WordRise
                text="Give me a problem, a deadline, and the freedom to build — I'll turn the idea into reality."
                accentWords={["reality"]}
                delay={0.35}
                className="mt-8 max-w-[30ch] font-display text-lg font-light leading-[1.25] tracking-tight text-ink md:text-2xl"
              />

              <p className="mt-6 max-w-[42ch] text-pretty text-sm leading-relaxed text-ink/70 md:text-base">
                Full-stack developer building MERN applications, AI agents, and automation — {profile.summary.toLowerCase()}
              </p>

            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 sm:gap-5 md:mt-12">
              {ctas.map((c) => (
                <Magnetic key={c.to} strength={6}>
                <Link to={c.to} className="group inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-paper">
                  <span className={`size-2 rounded-full ${c.bg} transition-transform duration-300 group-hover:scale-125`} />
                  {c.label}
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between p-5 sm:p-10 md:col-span-4 md:p-8">
            <Parallax distance={38} scaleTo={1.04} className="relative mx-auto mt-4 w-full max-w-[13rem] sm:max-w-[16rem] md:mt-8 md:max-w-[18rem]">
              <span className="aurora inset-2 bg-gold/40 float-soft" aria-hidden="true" />
              <div className="absolute -inset-5 rounded-full border border-dashed border-teal/50 spin-slow" />
              <div className="absolute -inset-2 rounded-full border border-coral/25 spin-slower" />
              <div className="group relative aspect-square overflow-hidden rounded-full border-[7px] border-paper bg-paper-deep shadow-[0_15px_35px_oklch(0.19_0.008_95_/_12%)]">
                <SmartImage
                  fallbackLabel="Portrait"
                  fallbackClassName="size-full rounded-full"
                  src="/images/reald.jpeg"
                  alt="Portrait of Mohammed Shahzaman"
                  width={320}
                  height={320}
                  className="size-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 grid size-12 place-items-center rounded-full bg-gold text-[9px] font-medium uppercase tracking-[0.14em] text-ink shadow-sm float-soft">
                  Open
                </span>
              </div>
              <span className="absolute -left-3 top-10 size-3 rounded-full bg-coral float-soft" />
              <span className="absolute -right-2 bottom-16 size-3 rounded-full bg-teal float-soft" style={{ animationDelay: "-3s" }} />
            </Parallax>


            <div className="mt-10 border-t border-ink/15 pt-5 md:mt-12">
              <p className="eyebrow mb-4 text-ink/45">Current signal</p>
              <p className="max-w-[24ch] font-display text-xl font-light leading-tight tracking-tight">
                Building useful things with a little more intention.
              </p>
              <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink/55">
                <span className="size-2 rounded-full bg-coral" />
                {profile.award}
              </div>
            </div>
          </div>
        </div>
      </header>
      </StickyRecede>

      <VelocityFlex intensity={1.4}>
        <Marquee items={ticker} />
      </VelocityFlex>

      <section className="band band-sun py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          {/* Mobile: swipeable number deck */}
          <SnapRail count={stats.length} label="Key numbers" className="md:hidden">
            {stats.map((s, i) => (
              <article
                key={s.label}
                className={`press relative flex min-h-[10rem] flex-col justify-between border border-ink/12 bg-paper p-5`}
              >
                <span className={`absolute inset-x-0 top-0 h-1 ${statPaint[i]!.bar}`} />
                <span
                  className={`absolute -right-6 -top-6 size-20 rounded-full ${statPaint[i]!.fill}`}
                  aria-hidden="true"
                />
                <p className="relative font-display text-4xl font-light tracking-tight">
                  <Counter
                    to={s.value}
                    decimals={s.decimals}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    duration={900 + i * 150}
                  />
                </p>
                <div className="relative">
                  <p className="eyebrow text-ink/50">{s.label}</p>
                  <span className="eyebrow mt-2 block text-ink/25 tabular-nums">
                    0{i + 1} / 0{stats.length}
                  </span>
                </div>
              </article>
            ))}
          </SnapRail>

          {/* Desktop: pigment grid */}
          <div className="hidden gap-px overflow-hidden border border-ink/12 bg-ink/10 md:grid md:grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`sheen lift group relative bg-paper px-4 py-6 transition-colors duration-500 sm:px-6 sm:py-8 ${statPaint[i]!.hover}`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 ${statPaint[i]!.bar} transition-transform duration-500 group-hover:scale-x-100`}
                />
                <span
                  className={`absolute -right-5 -top-5 size-16 rounded-full ${statPaint[i]!.fill} opacity-70 transition-transform duration-700 group-hover:scale-150`}
                  aria-hidden="true"
                />
                <p className="relative font-display text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
                  <Counter
                    to={s.value}
                    decimals={s.decimals}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    duration={900 + i * 150}
                  />
                </p>
                <p className="eyebrow relative mt-3 text-ink/45">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-14 md:py-20">
        <SectionLabel index="01" label="About" />
        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <WordCurtain
              text="Design-minded engineering, grounded in systems thinking and shipped with care."
              accentWords={["care"]}
              className="max-w-[24ch] font-display text-2xl font-light leading-tight md:text-3xl"
            />
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <div className="max-w-[46ch] space-y-4 text-pretty text-sm text-ink/70">
              <p>
                I build AI-powered systems and real-time applications — delivered multiple
                AI-driven products integrating automation and scalable architectures.
              </p>
              <p>
                Experienced in developing end-to-end solutions from idea to deployment,
                focused on solving real-world problems through high-impact, practical
                software.
              </p>
              <p className="text-ink/50">
                {profile.education} · Hyderabad, India
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="band band-sea py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mb-8">
            <SectionLabel index="02" label="Expertise" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-5">
            {skillGroups.map((group, i) => (
              <Reveal key={group.category} delay={i * 100}>
                <div
                  className={`press lift group h-full border border-ink/12 ${group.tint} p-5 sm:p-6`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`size-2.5 rounded-full ${accentDot[group.accent]}`} />
                      <p className="eyebrow text-ink/60">{group.category}</p>
                    </div>
                    <span className="eyebrow tabular-nums text-ink/30">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-ink/10 bg-paper/80 px-3 py-1.5 text-[12px] font-medium text-ink/80 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-paper"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* WORK */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-12 md:py-16">
        <SectionLabel index="03" label="Work" />
        <DrawRule className="mt-4" />

        {/* Mobile: swipeable project cards */}
        <div className="mt-6 md:hidden">
          <SnapRail count={projects.length} wide label="Selected work">
            {projects.map((p) => {
              const Wrapper = p.live ? "a" : "div";
              return (
                <Wrapper
                  key={p.title}
                  {...(p.live
                    ? { href: p.live, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`press relative flex min-h-[19rem] flex-col border border-ink/12 ${projectPaint[p.accent]} p-5`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-light tabular-nums text-ink/30">
                      {p.index}
                    </span>
                    <span className={`size-3 rounded-full ${accentDot[p.accent]} pulse-soft`} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-ink/50">
                    {p.subtitle}
                  </p>
                  <p className="mt-4 text-pretty text-sm text-ink/70">{p.description}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/12 pt-4">
                    <span className="text-[11px] uppercase tracking-[0.14em] text-ink/55">
                      {p.tech}
                    </span>
                    {p.live ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-paper">
                        Live
                        <ArrowUpRight size={12} />
                      </span>
                    ) : (
                      <span className="eyebrow text-ink/35">In build</span>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </SnapRail>
        </div>

        {/* Desktop: ledger rows */}
        <div className="hidden md:block">
          {projects.map((p, i) => {
            const Wrapper = p.live ? "a" : "div";
            return (
              <Reveal key={p.title} delay={i * 90}>
                <Wrapper
                  {...(p.live
                    ? { href: p.live, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`group relative block border-b border-border py-6 transition-all duration-500 hover:translate-x-2 ${projectHover[p.accent]}`}
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-1 origin-top scale-y-0 ${accentDot[p.accent]} transition-transform duration-500 group-hover:scale-y-100`}
                    aria-hidden="true"
                  />
                  <div className="flex items-baseline gap-3 pl-4 sm:gap-5">
                    <span className="text-[12px] font-medium tabular-nums text-ink/40">
                      {p.index}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="min-w-0 font-display text-lg font-medium tracking-tight sm:text-xl md:text-2xl">
                          {p.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          {p.live && (
                            <span className="eyebrow text-ink/40 transition-colors group-hover:text-ink">
                              Live
                            </span>
                          )}
                          <span
                            className={`size-2.5 shrink-0 rounded-full ${accentDot[p.accent]} transition-transform duration-300 group-hover:scale-125`}
                          />
                        </div>
                      </div>
                      <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-ink/45">
                        {p.subtitle} · {p.tech}
                      </p>
                      <p className="mt-3 max-w-[62ch] text-pretty text-sm text-ink/65">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-ink/70 transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-paper"
          >
            All project detail
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </section>


      {/* RECOGNITION */}
      <section className="band band-rose py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <SectionLabel index="04" label="Recognition" />

          {/* Mobile: swipeable proof deck */}
          <div className="mt-7 md:hidden">
            <SnapRail count={recognition.length} wide label="Recognition">
              {recognition.map((r) => (
                <article
                  key={r.title}
                  className="press flex flex-col border border-ink/12 bg-paper"
                >
                  <div className="border-b border-ink/10 bg-paper-deep p-3">
                    <SmartImage
                      fallbackLabel={r.badge}
                      fallbackClassName="aspect-[4/3] w-full rounded-sm"
                      src={r.image}
                      alt={r.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-sm object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div className="flex items-center gap-2">
                      <span className={`size-2.5 rounded-full ${accentDot[r.accent]}`} />
                      <span className="eyebrow text-ink/55">{r.badge}</span>
                    </div>
                    <h3 className="font-display text-lg font-medium leading-snug tracking-tight">
                      {r.title}
                    </h3>
                    <p className="text-pretty text-sm text-ink/65">{r.body}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-2">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-paper-deep px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-ink/55"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </SnapRail>
          </div>

          {/* Desktop: alternating spreads */}
          <div className="mt-8 hidden space-y-5 md:block">
            {recognition.map((r, i) => (
              <TiltIn key={r.title} side={i % 2 === 1 ? "right" : "left"} from={16} delay={i * 0.04}>
                <article
                  className={`lift grid overflow-hidden border border-ink/12 bg-paper md:grid-cols-12 ${
                    i % 2 === 1 ? "md:[direction:rtl]" : ""
                  }`}
                >
                  <div className={`bg-paper-deep p-3 sm:p-4 md:[direction:ltr] ${'portrait' in r && r.portrait ? 'md:col-span-4' : 'md:col-span-7'}`}>
                    <CurtainWipe direction={i % 2 === 1 ? "left" : "up"}>
                      <SmartImage
                        fallbackLabel={r.badge}
                        fallbackClassName="aspect-[4/3] w-full rounded-sm"
                        src={r.image}
                        alt={r.alt}
                        loading="lazy"
                        className="w-full rounded-sm object-contain outline outline-offset-[-1px] outline-ink/10 transition-transform duration-700 hover:scale-[1.015]"
                      />
                    </CurtainWipe>
                  </div>

                  <div className={`flex flex-col justify-center gap-3 py-5 md:px-8 md:py-6 md:[direction:ltr] ${'portrait' in r && r.portrait ? 'md:col-span-8' : 'md:col-span-5'}`}>
                    <div className="flex items-center gap-2">
                      <span className={`size-2 rounded-full ${accentDot[r.accent]}`} />
                      <span className="eyebrow text-ink/50">{r.badge}</span>
                    </div>
                    <h3 className="font-display text-xl font-light tracking-tight md:text-2xl">
                      {r.title}
                    </h3>
                    <p className="max-w-[58ch] text-pretty text-sm text-ink/65">{r.body}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {r.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-paper-deep px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-ink/55"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </TiltIn>
            ))}
          </div>

          <ul className="mt-12">
            {achievements.map((a, i) => (
              <li
                key={`${a.label}-${i}`}
                className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-ink/12 py-4 transition-all duration-300 hover:bg-paper/70 hover:pl-2"
              >
                <Trophy
                  size={14}
                  className={`mt-1 shrink-0 transition-transform duration-300 group-hover:scale-125 ${a.highlight ? "text-gold" : "text-ink/30"}`}
                />
                <span className="font-display text-sm font-medium tracking-tight sm:min-w-[10rem]">
                  {a.label}
                </span>
                <span className="text-sm text-ink/55">{a.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* CONTACT */}
      <section className="band band-leaf pigment-edge mx-auto max-w-6xl px-5 sm:px-6 py-12 pb-16 md:py-16 md:pb-20">
        <SectionLabel index="05" label="Connect" />
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <WordRise
              inView
              stagger={0.09}
              text="Let’s work together."
              accentWords={["together"]}
              wordClassName="leading-tight"
              className="max-w-[22ch] font-display text-3xl font-light leading-tight tracking-tight sm:text-4xl md:text-5xl"
            />

            <p className="mt-4 max-w-[46ch] text-sm text-ink/65">
              Open to opportunities and collaborations.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-border py-2 transition-colors hover:border-ink/40"
            >
              <span className="eyebrow text-ink/45">Email</span>
              <span className="ink-link text-ink/80 transition-colors group-hover:text-ink">
                {profile.email}
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-border py-2 transition-colors hover:border-ink/40"
            >
              <span className="eyebrow text-ink/45">GitHub</span>
              <span className="ink-link text-ink/80 transition-colors group-hover:text-ink">
                View projects
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-border py-2 transition-colors hover:border-ink/40"
            >
              <span className="eyebrow text-ink/45">LinkedIn</span>
              <span className="ink-link text-ink/80 transition-colors group-hover:text-ink">
                Connect
              </span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-border py-2 transition-colors hover:border-ink/40"
            >
              <span className="eyebrow text-ink/45">Phone</span>
              <span className="ink-link text-ink/80 transition-colors group-hover:text-ink">
                {profile.phone}
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
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
          "Open to projects, collaborations and opportunities. Happy to get back to you as soon as possible.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botcheck: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy email.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
            "7914cd42-4796-4757-a6df-2ef938a2fa85",
          name: formData.name,
          email: formData.email,
          subject: formData.subject.trim()
            ? `Portfolio Message: ${formData.subject} from ${formData.name}`
            : `Portfolio Message from ${formData.name}`,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          botcheck: formData.botcheck,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          botcheck: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again or email directly.");
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error occurred. Please try sending again or use direct email.");
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-12 md:py-20">
      <span className="aurora -left-16 top-4 size-64 bg-gold/40 drift" aria-hidden="true" />
      <span
        className="aurora right-0 top-56 size-56 bg-teal/30 drift"
        style={{ animationDelay: "-8s" }}
        aria-hidden="true"
      />

      <header>
        <p className="eyebrow text-ink/50">Correspondence</p>
        <h1 className="settle ink-wash mt-4 max-w-[14ch] font-display text-4xl font-light leading-[0.94] tracking-tight text-balance sm:text-5xl md:text-7xl">
          Get in touch
        </h1>
        <p className="mt-6 max-w-[54ch] text-pretty text-sm text-ink/65 md:text-base">
          Open to projects, collaborations and opportunities. Whether you’re building a
          product, need AI integration, or want a reliable full-stack developer — send a note
          below or reach out directly.
        </p>
      </header>

      <Rule className="mt-12" />

      {/* Main Grid: Direct channels + Interactive Form */}
      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        {/* Left Column: Direct info & social cards */}
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div className="rounded-xl border border-border bg-paper-deep/30 p-6">
            <div className="flex items-center gap-2">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-teal" />
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-ink/70">
                Current Status
              </span>
            </div>
            <p className="mt-2.5 font-display text-lg font-light text-ink">
              Available for freelance, full-time roles & AI contracts
            </p>
            <p className="mt-1 text-xs text-ink/55">
              Based in {profile.location} · Available across time zones
            </p>
          </div>

          <div className="divide-y divide-border rounded-xl border border-border bg-paper/60">
            {/* Email Card with Copy button */}
            <div className="group flex flex-col gap-3 p-5 transition-colors duration-200 hover:bg-paper-deep/40">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-gold text-ink">
                    <Mail size={14} />
                  </span>
                  <span className="eyebrow text-ink/50">Email</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 rounded-md border border-border/80 bg-paper px-2.5 py-1 text-xs text-ink/70 shadow-xs transition-all hover:border-gold hover:text-ink hover:bg-gold/10 active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-teal" />
                      <span className="text-teal font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="break-all font-display text-base font-light tracking-tight hover:text-ink/75 sm:text-lg"
              >
                {profile.email}
              </a>
              <span className="text-xs text-ink/55">I'll gladly get back to you as soon as possible.</span>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2.5 p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-full bg-coral text-ink">
                  <Phone size={14} />
                </span>
                <span className="eyebrow text-ink/50">Phone / WhatsApp</span>
              </div>
              <a
                href={`tel:${profile.phone}`}
                className="font-display text-base font-light tracking-tight transition-colors hover:text-ink/75 sm:text-lg"
              >
                {profile.phone}
              </a>
              <span className="text-xs text-ink/55">Direct call or WhatsApp message</span>
            </div>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2.5 p-5 transition-colors duration-200 hover:bg-paper-deep/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-teal text-ink">
                    <Github size={14} />
                  </span>
                  <span className="eyebrow text-ink/50">GitHub</span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-ink/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                />
              </div>
              <span className="font-display text-base font-light tracking-tight sm:text-lg">
                View Repositories
              </span>
              <span className="text-xs text-ink/55">Source code, experiments, and agent pipelines.</span>
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-2.5 p-5 transition-colors duration-200 hover:bg-paper-deep/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-full bg-violet-tint text-ink">
                    <Linkedin size={14} />
                  </span>
                  <span className="eyebrow text-ink/50">LinkedIn</span>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-ink/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                />
              </div>
              <span className="font-display text-base font-light tracking-tight sm:text-lg">
                Connect on LinkedIn
              </span>
              <span className="text-xs text-ink/55">Work history, milestones, and network.</span>
            </a>
          </div>
        </div>

        {/* Right Column: Web3Forms Contact Form */}
        <div className="lg:col-span-7">
          <div className="relative rounded-2xl border border-border bg-paper-deep/40 p-6 shadow-xs backdrop-blur-xs sm:p-8 md:p-10">
            {status === "success" ? (
              <div className="py-8 text-center animate-in fade-in-50 duration-500">
                <div className="mx-auto mb-4 grid size-14 place-items-center rounded-full bg-teal/20 text-teal">
                  <Check size={28} className="stroke-[2.5]" />
                </div>
                <h3 className="font-display text-2xl font-light tracking-tight sm:text-3xl">
                  Message sent successfully!
                </h3>
                <p className="mx-auto mt-3 max-w-[42ch] text-sm text-ink/70">
                  Thank you for reaching out. Your note has been delivered straight to my
                  inbox, and I will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-paper px-5 py-2.5 text-sm font-medium text-ink shadow-xs transition-colors hover:border-gold hover:bg-gold/10"
                >
                  <MessageSquare size={15} />
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <h2 className="font-display text-2xl font-light tracking-tight text-ink sm:text-3xl">
                    Send a note
                  </h2>
                  <p className="mt-1.5 text-xs text-ink/65 sm:text-sm">
                    Feel free to leave a message below, and I will gladly get back to you as soon as possible.
                  </p>
                </div>

                {/* Honeypot anti-spam field */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  checked={formData.botcheck !== ""}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, botcheck: e.target.checked ? "bot" : "" }))
                  }
                />

                {/* Name & Email inputs */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-mono uppercase tracking-wider text-ink/60"
                    >
                      Your Name <span className="text-coral">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                      }
                      className="w-full rounded-lg border border-border bg-paper/90 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-mono uppercase tracking-wider text-ink/60"
                    >
                      Your Email <span className="text-coral">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full rounded-lg border border-border bg-paper/90 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                    />
                  </div>
                </div>

                {/* Subject (Optional) */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-mono uppercase tracking-wider text-ink/60"
                  >
                    Subject <span className="text-ink/40 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project inquiry, collaboration, etc."
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, subject: e.target.value }))
                    }
                    className="w-full rounded-lg border border-border bg-paper/90 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                  />
                </div>

                {/* Message input */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-mono uppercase tracking-wider text-ink/60"
                  >
                    Your Message <span className="text-coral">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, or what you'd like to collaborate on..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className="w-full resize-y rounded-lg border border-border bg-paper/90 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                  />
                </div>

                {status === "error" && (
                  <div className="rounded-lg border border-coral/30 bg-coral/10 p-3 text-xs text-coral">
                    {errorMessage}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative inline-flex items-center justify-center gap-2.5 rounded-lg bg-ink px-6 py-3.5 font-display text-sm font-medium text-paper transition-all duration-300 hover:bg-ink/90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 active:scale-[0.99]"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Mail, MapPin, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { site, whatsappLink } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 border-t border-border">
      <SectionHeading
        index="08"
        title="Interested in working together?"
        description="Whether it's a full-stack build or an AI/ML system, I'd like to hear about it."
      />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-14">
        <div className="lg:col-span-2 space-y-6">
          <ContactLink icon={Mail} label="Email" value={site.email} href={site.social.email} />
          <ContactLink icon={WhatsAppIcon} label="WhatsApp" value="Chat directly" href={whatsappLink()} />
          <ContactLink icon={MapPin} label="Location" value={site.location} />
          <ContactLink icon={GithubIcon} label="GitHub" value={site.social.github} href={site.social.github.split(" — ")[0]} />
          <ContactLink icon={LinkedinIcon} label="LinkedIn" value={site.social.linkedin} href={site.social.linkedin.split(" — ")[0]} />

          <a
            href={site.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-border-strong hover:bg-surface"
          >
            <FileDown size={15} />
            Download Resume
          </a>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail | typeof GithubIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <Icon size={16} className="mt-0.5 flex-shrink-0 text-accent" />
      <div>
        <p className="font-mono-label text-[10px] text-text-faint">{label}</p>
        <p className="text-sm break-words">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }
  return content;
}
  
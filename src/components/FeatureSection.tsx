import { toast } from "sonner";
import { ScrollReveal } from "./ScrollReveal";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface FeatureSectionProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaDisabled?: boolean;
  imagePlaceholder: string;
  reversed?: boolean;
}

export const FeatureSection = ({
  id,
  badge,
  title,
  description,
  features,
  ctaLabel,
  ctaHref,
  ctaDisabled = false,
  imagePlaceholder,
  reversed = false,
}: FeatureSectionProps) => (
  <section id={id} className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
        <ScrollReveal className="flex-1">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            {badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{title}</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl leading-relaxed">{description}</p>
          <ul className="space-y-3 mb-8">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                <span className="text-secondary-foreground">{f}</span>
              </li>
            ))}
          </ul>
          {ctaDisabled ? (
            <button
              onClick={() => toast("Em breve!", {
                description: "O Marketplace está sendo construído. Fique de olho!",
                icon: "✦",
              })}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:glow-gold-sm hover:brightness-110"
            >
              {ctaLabel} →
            </button>
          ) : (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:glow-gold-sm hover:brightness-110"
            >
              {ctaLabel} →
            </a>
          )}
        </ScrollReveal>
        <ScrollReveal className="flex-1 w-full" delay={0.2}>
          <ImagePlaceholder label={imagePlaceholder} aspectRatio="16/10" />
        </ScrollReveal>
      </div>
    </div>
  </section>
);

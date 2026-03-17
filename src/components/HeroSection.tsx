import { motion } from "framer-motion";
import { ImagePlaceholder } from "./ImagePlaceholder";

export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    {/* Background effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8">
            ✦ Open Source · 100% Gratuito · Roda no Navegador
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          Crie{" "}
          <span className="text-gradient-gold">Livros-Jogos</span>
          <br />
          Extraordinários
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Um motor completo, um editor visual poderoso e um marketplace colaborativo.
          De histórias simples a RPGs complexos — tudo no seu navegador.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#motor" className="rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:brightness-110 glow-gold-sm">
            Motor
          </a>
          <a href="#editor" className="rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:brightness-110 glow-gold-sm">
            Editor Visual
          </a>
          <a href="#marketplace" className="rounded-lg border border-border bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground transition-all hover:bg-border">
            Marketplace
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <ImagePlaceholder label="Screenshot principal do motor / editor" aspectRatio="16/9" />
        </motion.div>

        {/* Mouse scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex justify-center"
        >
          <div className="animate-mouse-bounce">
            <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="26" height="42" rx="13" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
              <circle cx="14" cy="12" r="2.5" fill="hsl(var(--muted-foreground))" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

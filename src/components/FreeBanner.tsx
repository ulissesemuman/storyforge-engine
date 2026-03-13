import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Globe, Sparkles, DollarSign } from "lucide-react";

export const FreeBanner = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
    <div className="container mx-auto px-6 relative z-10">
      <ScrollReveal className="text-center">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-primary font-semibold text-lg mb-8"
        >
          <Sparkles className="w-5 h-5" />
          100% Gratuito
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Sem custos. Sem limites.{" "}
          <span className="text-gradient-gold">Sem pegadinhas.</span>
        </h2>
        <p className="text-muted-foreground text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          O motor, o editor e o marketplace são completamente gratuitos. 
          Crie histórias épicas sem gastar nada.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3 bg-glass rounded-xl px-6 py-4">
            <Globe className="w-8 h-8 text-primary" />
            <div className="text-left">
              <p className="font-semibold">Qualquer Navegador</p>
              <p className="text-sm text-muted-foreground">Funciona direto no browser</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-glass rounded-xl px-6 py-4">
            <DollarSign className="w-8 h-8 text-primary" />
            <div className="text-left">
              <p className="font-semibold">Zero Custo</p>
              <p className="text-sm text-muted-foreground">Para sempre gratuito</p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

import { ScrollReveal } from "./ScrollReveal";
import { Book, Gamepad2, Shield, Save, RotateCcw, Puzzle, Swords, Backpack } from "lucide-react";

const highlights = [
  { icon: Book, title: "Histórias Simples a Complexas", desc: "De navegação linear até RPGs completos com sistemas de combate" },
  { icon: Puzzle, title: "Totalmente Modular", desc: "Cada elemento pode ser configurado e personalizado pelo autor" },
  { icon: Gamepad2, title: "Decisões Inteligentes", desc: "Sistema de decisões baseado em configurações fáceis e poderosas" },
  { icon: Backpack, title: "Inventário Automático", desc: "Gerenciamento dinâmico de itens, equipamentos e recursos" },
  { icon: Swords, title: "Sistema de Combate", desc: "Combates dinâmicos com habilidades configuráveis pelo autor" },
  { icon: Save, title: "Múltiplos Saves", desc: "Salvamento automático com gerenciamento de múltiplos saves" },
  { icon: RotateCcw, title: "Sistema de Replay", desc: "Navegue por qualquer parte já visitada e interaja novamente" },
  { icon: Shield, title: "Debug Integrado", desc: "Execute com debug, veja e altere variáveis em tempo real" },
];

export const HighlightsGrid = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <ScrollReveal className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Tudo que você precisa.{" "}
          <span className="text-gradient-gold">Nada que você não precisa.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Um ecossistema completo para criar, testar e compartilhar livros-jogos incríveis
        </p>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {highlights.map((h, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="group rounded-xl bg-glass p-6 transition-all duration-300 hover:glow-gold-sm hover:border-primary/30">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <h.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

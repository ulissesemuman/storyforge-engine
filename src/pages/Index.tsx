import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { HighlightsGrid } from "@/components/HighlightsGrid";
import { FreeBanner } from "@/components/FreeBanner";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />

      <div className="section-divider" />

      <FeatureSection
        id="motor"
        badge="Motor"
        title="O coração das suas histórias"
        description="Um motor JavaScript puro que roda em qualquer navegador. Totalmente modular — crie desde aventuras lineares simples até RPGs complexos com combate, inventário e habilidades."
        features={[
          "Decisões inteligentes baseadas em configurações fáceis",
          "Gerenciamento automático de inventário e habilidades",
          "Sistema de combate dinâmico e configurável",
          "Salvamento automático com múltiplos saves",
          "Sistema de replay — revisite qualquer parte da história",
          "Tudo é dinâmico e definido pelo autor",
        ]}
        ctaLabel="Acessar o Motor"
        ctaHref="https://github.com/ulissesemuman/Gaboma"
        imagePlaceholder="Screenshot do motor em ação"
      />

      <div className="section-divider" />

      <FeatureSection
        id="editor"
        badge="Editor Visual"
        title="Crie sem escrever código"
        description="Um editor visual completo que permite criar livros-jogos de forma intuitiva. Arraste, configure e teste — tudo em um só lugar."
        features={[
          "Interface visual drag-and-drop intuitiva",
          "Modo de execução com debug integrado",
          "Veja e altere variáveis em tempo real",
          "Teste cada caminho da sua história facilmente",
          "Exporte para o motor com um clique",
        ]}
        ctaLabel="Abrir o Editor"
        ctaHref="#"
        imagePlaceholder="Screenshot do editor visual"
        reversed
      />

      <div className="section-divider" />

      <FeatureSection
        id="marketplace"
        badge="Marketplace"
        title="Compartilhe e descubra"
        description="Um marketplace comunitário onde autores publicam e baixam elementos para suas histórias. Totalmente gratuito e colaborativo."
        features={[
          "Publique e baixe histórias completas",
          "Compartilhe capítulos, regras e validações",
          "Encontre dados de jogadores, inimigos e itens prontos",
          "Habilidades, sistemas de combate e muito mais",
          "Comunidade ativa de criadores",
        ]}
        ctaLabel="Explorar Marketplace"
        ctaHref="#"
        ctaDisabled
        imagePlaceholder="Screenshot do marketplace"
      />

      <div className="section-divider" />

      <HighlightsGrid />

      <div className="section-divider" />

      <FreeBanner />

      <Footer />
    </div>
  );
};

export default Index;

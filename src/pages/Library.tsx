import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const books = [
  {
    title: "O Juramento de Eldenmoor",
    description: "Uma antiga profecia desperta forças esquecidas...",
  },
  {
    title: "Floresta Negra (Básico)",
    description: "A missão é chegar ao castelo e entregar a carta, mas passar por essa floresta não será fácil.",
  },
  {
    title: "Floresta Negra (Avançado)",
    description: "A missão é chegar ao castelo e entregar a carta, mas passar por essa floresta não será fácil.",
  },
  {
    title: "O Herdeiro do Vazio",
    description: "A escuridão não é apenas a ausência de luz; é uma presença que observa.",
  },
];

const BookCard = ({ title, description, index }: { title: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/40 hover:glow-gold-sm"
  >
    <div className="flex flex-col sm:flex-row gap-0">
      {/* Book cover thumbnail */}
      <div className="sm:w-36 h-48 sm:h-auto bg-muted/50 flex items-center justify-center shrink-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
        <div className="z-10 flex flex-col items-center gap-2 px-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span className="text-xs text-muted-foreground font-medium text-center">Capa</span>
        </div>
      </div>

      {/* Book info */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-xl font-bold mb-2 group-hover:text-gradient-gold transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        <div className="mt-4">
          <button className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110">
            Ler
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const Library = () => (
  <div className="min-h-screen">
    <Navbar />

    <section className="relative pt-28 pb-24">
      {/* Background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            ✦ Sua coleção de aventuras
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Biblioteca <span className="text-gradient-gold">GaBoMa</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Explore os livros-jogos disponíveis e mergulhe em histórias interativas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {books.map((book, i) => (
            <BookCard key={book.title} {...book} index={i} />
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Library;

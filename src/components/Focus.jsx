import { TrendingUp, Search, Wallet } from 'lucide-react';

const cards = [
  {
    icon: TrendingUp,
    title: 'Investment',
    description:
      'Explore the fundamentals of investing, risk, return, and different approaches to understanding financial assets.',
  },
  {
    icon: Search,
    title: 'Fundamental Analysis',
    description:
      'Learn how to evaluate companies through financial statements, business fundamentals, industry conditions, and other relevant factors.',
  },
  {
    icon: Wallet,
    title: 'Financial Management',
    description:
      'Develop an understanding of financial planning, financial decisions, and how financial management affects businesses and long-term growth.',
  },
];

export default function Focus() {
  return (
    <section id="focus" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-3">
          Expertise
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Investment &{' '}
          <span className="text-[var(--color-gold)]">Fundamental Analysis</span>
        </h2>
        <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mb-14 leading-relaxed">
          I am currently learning how to understand assets and companies through
          fundamental perspectives, business conditions, financial performance,
          and economic factors that may influence their value and long-term
          prospects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group p-6 md:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-gold)]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(214,181,106,0.05)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-gold-dim)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-gold)]/20 transition-colors duration-300">
                <card.icon
                  size={22}
                  className="text-[var(--color-gold)]"
                />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--color-text-primary)]">
                {card.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

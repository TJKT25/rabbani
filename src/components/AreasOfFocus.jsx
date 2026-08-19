import {
  TrendingUp,
  Search,
  Wallet,
  BarChart3,
  Coins,
  Building2,
} from 'lucide-react';

const areas = [
  {
    num: '01',
    icon: TrendingUp,
    title: 'Investment',
    description:
      'Building knowledge of investment concepts, risk, return, and investment strategies.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Fundamental Analysis',
    description:
      'Learning how to understand company fundamentals and the factors that influence business value.',
  },
  {
    num: '03',
    icon: Wallet,
    title: 'Financial Management',
    description:
      'Understanding the fundamentals of financial planning and financial decision-making.',
  },
  {
    num: '04',
    icon: BarChart3,
    title: 'Stock Market',
    description:
      'Learning about stock markets, market behavior, and the factors that influence price movements.',
  },
  {
    num: '05',
    icon: Coins,
    title: 'Cryptocurrency',
    description:
      'Exploring digital assets, blockchain technology, and the development of the cryptocurrency ecosystem.',
  },
  {
    num: '06',
    icon: Building2,
    title: 'Business & Business Development',
    description:
      'Learning about business concepts, strategy, growth, and business development.',
  },
];

export default function AreasOfFocus() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-3">
          Focus Areas
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-14">
          Areas of <span className="text-[var(--color-gold)]">Focus</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.num}
              className="group relative p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-gold)]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(214,181,106,0.05)]"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-xs font-mono text-[var(--color-gold)]/60">
                  {area.num}
                </span>
                <div className="w-10 h-10 rounded-lg bg-[var(--color-gold-dim)] flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 transition-colors duration-300">
                  <area.icon size={18} className="text-[var(--color-gold)]" />
                </div>
              </div>
              <h3 className="text-base font-semibold mb-2 text-[var(--color-text-primary)]">
                {area.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

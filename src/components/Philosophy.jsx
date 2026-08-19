import { BookOpen, LineChart, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: BookOpen,
    title: 'Learn',
    description:
      'Continuously learn and understand investment, finance, and business.',
  },
  {
    icon: LineChart,
    title: 'Analyze',
    description:
      'Develop critical thinking through fundamental analysis and structured decision-making.',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description:
      'Turn knowledge into useful skills and create long-term personal development.',
  },
];

export default function Philosophy() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-3 text-center">
          Philosophy
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Learn. Analyze.{' '}
          <span className="text-[var(--color-gold)]">Grow.</span>
        </h2>
        <div className="w-16 h-0.5 bg-[var(--color-gold)]/30 mx-auto mt-6 mb-14 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group text-center p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-gold)]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(214,181,106,0.05)]"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-gold-dim)] flex items-center justify-center mx-auto mb-5 group-hover:bg-[var(--color-gold)]/20 transition-colors duration-300">
                <p.icon size={24} className="text-[var(--color-gold)]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--color-text-primary)]">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

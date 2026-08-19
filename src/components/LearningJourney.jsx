import {
  TrendingUp,
  Search,
  Wallet,
  BarChart3,
  Coins,
  Building2,
} from 'lucide-react';

const steps = [
  { icon: TrendingUp, title: 'Investment' },
  { icon: Search, title: 'Fundamental Analysis' },
  { icon: Wallet, title: 'Financial Management' },
  { icon: BarChart3, title: 'Stock Market' },
  { icon: Coins, title: 'Cryptocurrency' },
  { icon: Building2, title: 'Business Development' },
];

export default function LearningJourney() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-3">
          Journey
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Learning <span className="text-[var(--color-gold)]">Journey</span>
        </h2>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-secondary)] mb-4">
          Currently Learning & Exploring
        </p>
        <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mb-14 leading-relaxed">
          At this stage, my focus is on learning, exploring, building
          understanding, and gradually developing practical knowledge in
          investment, finance, and business.
        </p>

        <div className="relative">
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-gold)]/30 via-[var(--color-gold)]/10 to-transparent" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="group relative flex items-center gap-5 md:gap-8 p-5 md:p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-gold)]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(214,181,106,0.05)]"
              >
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-gold-dim)] border border-[var(--color-gold)]/20 flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 transition-colors duration-300">
                  <step.icon size={20} className="text-[var(--color-gold)]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[var(--color-gold)]/50">
                      0{i + 1}
                    </span>
                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-gold)]/30 group-hover:bg-[var(--color-gold)] transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

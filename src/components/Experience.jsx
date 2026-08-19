import { ArrowRight } from 'lucide-react';

const stages = [
  { label: 'Learning', color: 'from-[var(--color-gold)]/20 to-[var(--color-gold)]/5' },
  { label: 'Analyzing', color: 'from-[var(--color-gold)]/25 to-[var(--color-gold)]/8' },
  { label: 'Practicing', color: 'from-[var(--color-gold)]/30 to-[var(--color-gold)]/10' },
  { label: 'Growing', color: 'from-[var(--color-gold)]/35 to-[var(--color-gold)]/12' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-3">
          Experience
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Experience
        </h2>
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-bright)] mb-6 font-medium">
          Currently Building Experience
        </p>
        <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-2xl mb-14 leading-relaxed">
          I currently do not have formal professional experience. My focus is on
          continuous learning, exploration, and developing knowledge in
          investment, fundamental analysis, financial management, and business.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 mb-14">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex items-center gap-3 sm:gap-4 flex-1">
              <div
                className={`flex-1 p-5 rounded-xl bg-gradient-to-br ${stage.color} border border-[var(--color-border)] text-center`}
              >
                <p className="text-sm font-semibold text-[var(--color-gold)]">
                  {stage.label}
                </p>
              </div>
              {i < stages.length - 1 && (
                <ArrowRight
                  size={16}
                  className="hidden sm:block text-[var(--color-gold)]/40 flex-shrink-0"
                />
              )}
            </div>
          ))}
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] max-w-2xl">
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed italic">
            &ldquo;Every expert was once a beginner. The journey of a thousand
            investments begins with a single lesson.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

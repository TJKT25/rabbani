import { BookOpen, Layers, Infinity } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: '01', label: 'Student' },
  { icon: Layers, value: '05+', label: 'Areas of Interest' },
  { icon: Infinity, value: '∞', label: 'Continuous Learning' },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-3">
          About
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          About <span className="text-[var(--color-gold)]">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-3 space-y-6">
            <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] backdrop-blur-sm">
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                I&apos;m Pandji Fauzan Rabbani, a student with a strong interest
                in investment, finance, management, and business.
              </p>
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed mt-4">
                Through continuous learning and experience, I aim to build strong
                capabilities in investment and management as a foundation for
                creating an independent and professional future.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-5 p-5 rounded-xl bg-[var(--color-card)] border border-[var(--color-border)] hover:border-[var(--color-gold)]/30 transition-colors duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-gold-dim)] flex items-center justify-center">
                  <s.icon size={20} className="text-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--color-gold)]">
                    {s.value}
                  </p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

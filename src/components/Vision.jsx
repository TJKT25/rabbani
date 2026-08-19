export default function Vision() {
  return (
    <section id="vision" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-gold)]/[0.03] blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-3 text-center">
          Vision
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center">
          My <span className="text-[var(--color-gold)]">Vision</span>
        </h2>

        <div className="relative max-w-4xl mx-auto p-8 md:p-14 rounded-3xl bg-[var(--color-card)] border border-[var(--color-border)] text-center">
          <div className="absolute top-4 left-8 text-6xl md:text-8xl font-serif text-[var(--color-gold)]/10 select-none leading-none">
            &ldquo;
          </div>

          <p className="relative text-xl md:text-2xl lg:text-3xl font-semibold leading-snug text-[var(--color-text-primary)] py-4">
            To help Indonesian society become more{' '}
            <span className="text-[var(--color-gold)]">financially literate</span>{' '}
            and contribute toward building Indonesia&apos;s{' '}
            <span className="text-[var(--color-gold)]">Golden Generation 2045</span>.
          </p>

          <div className="w-16 h-0.5 bg-[var(--color-gold)]/30 mx-auto mt-8 mb-4 rounded-full" />

          <p className="text-sm text-[var(--color-text-secondary)]">
            Pandji Fauzan Rabbani
          </p>
        </div>
      </div>
    </section>
  );
}

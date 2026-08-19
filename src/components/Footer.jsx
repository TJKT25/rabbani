const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Focus', href: '#focus' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/8">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-[var(--color-text-primary)]">
              Pandji Fauzan Rabbani
            </p>
            <p className="text-sm text-[var(--color-gold)] mt-1">
              Investment & Fundamental Analysis
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-[var(--color-text-secondary)]/60">
            &copy; 2026 Pandji Fauzan Rabbani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

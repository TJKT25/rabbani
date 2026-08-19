import { MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[var(--color-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium mb-3">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Let&apos;s <span className="text-[var(--color-gold)]">Connect</span>
        </h2>
        <p className="text-sm md:text-base text-[var(--color-text-secondary)] max-w-xl mb-12 leading-relaxed">
          Open to discussions about investment, finance, business, and continuous
          learning.
        </p>

        <div className="max-w-md">
          <div className="p-6 rounded-2xl bg-[var(--color-card)] border border-[var(--color-border)] mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-gold-dim)] flex items-center justify-center">
                <MessageCircle size={18} className="text-[var(--color-gold)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  WhatsApp
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  +62-0823-3802-1907
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/6282338021907?text=Halo%2C%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20investasi%2C%20keuangan%2C%20dan%20bisnis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-gold)] text-[#050505] font-semibold text-sm rounded-full hover:bg-[var(--color-gold-bright)] transition-colors duration-200 w-full justify-center"
          >
            <Send size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

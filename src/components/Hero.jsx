import { useEffect, useRef } from 'react';
import { TrendingUp, ChevronDown } from 'lucide-react';

function ChartVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const w = 440;
    const h = 360;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(0, h - 40);
      const points = [];
      for (let i = 0; i <= 40; i++) {
        const x = (i / 40) * w;
        const y =
          h - 80 - Math.sin(i * 0.18) * 60 - i * 3 + Math.sin(i * 0.5) * 15;
        points.push({ x, y });
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(214, 181, 106, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, 'rgba(214, 181, 106, 0.12)');
      grad.addColorStop(1, 'rgba(214, 181, 106, 0)');
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      points.forEach((p, i) => {
        if (i % 5 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(214, 181, 106, 0.7)';
          ctx.fill();
        }
      });

      for (let i = 0; i < 12; i++) {
        const x = 30 + Math.random() * (w - 60);
        const y = 30 + Math.random() * (h - 80);
        const r = 1 + Math.random() * 2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(214, 181, 106, ${0.1 + Math.random() * 0.15})`;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(w / 2, h / 2 - 20, 100, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(214, 181, 106, 0.08)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(w / 2, h / 2 - 20, 140, 0.4, 2.5);
      ctx.strokeStyle = 'rgba(214, 181, 106, 0.06)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(w / 2, h / 2 - 20, 60, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(214, 181, 106, 0.03)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(214, 181, 106, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[440px] h-auto opacity-80"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-gold)]/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[var(--color-gold)]/[0.02] blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <p className="animate-fade-in-up text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] font-medium">
              Investment &bull; Finance &bull; Business
            </p>

            <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-[var(--color-text-primary)]">
              Pandji Fauzan
              <br />
              <span className="text-[var(--color-gold)]">Rabbani</span>
            </h1>

            <p className="animate-fade-in-up delay-200 text-lg md:text-xl text-[var(--color-gold-bright)] font-medium">
              Investment & Fundamental Analysis
            </p>

            <p className="animate-fade-in-up delay-300 text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-lg">
              I am a student with a strong interest in investment, financial
              management, fundamental analysis, and business. I am continuously
              developing my knowledge and ability to understand markets and
              conduct fundamental analysis of various assets and companies.
            </p>

            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4 pt-2">
              <a
                href="#focus"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-gold)] text-[#050505] font-semibold text-sm rounded-full hover:bg-[var(--color-gold-bright)] transition-colors duration-200"
              >
                <TrendingUp size={16} />
                Explore My Focus
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-[var(--color-text-primary)] font-medium text-sm rounded-full hover:bg-white/5 transition-colors duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center animate-slide-in-right delay-200">
            <ChartVisual />
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors"
          aria-label="Scroll to about"
        >
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

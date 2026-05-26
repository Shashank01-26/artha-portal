import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  IndianRupee,
  Network,
  Award,
  Code2,
  Rocket,
  HeartHandshake,
  TrendingUp,
  Globe2,
  Check,
  User,
  Building2,
  GraduationCap,
  Wallet,
  Cpu,
} from 'lucide-react';

// ─── Hero canvas: glass-shard cursor trail + ripple rings ─────────────────────
const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement as HTMLElement | null;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    let mx = -999, my = -999, lx = -999, ly = -999;

    const resize = () => {
      canvas.width  = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    // ── Types ──
    interface Shard {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; rot: number; rotV: number;
      sides: number; color: string;
    }
    interface Ripple { x: number; y: number; r: number; maxR: number; alpha: number; }

    const shards: Shard[] = [];
    const ripples: Ripple[] = [];
    const palette = ['rgba(129,140,248,', 'rgba(255,255,255,', 'rgba(196,181,253,', 'rgba(245,158,11,'];

    const spawnShard = (x: number, y: number, dx: number, dy: number) => {
      if (shards.length > 90) return;
      const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 2.4;
      const spd   = 1.5 + Math.random() * 3.5;
      shards.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        size:  2.5 + Math.random() * 5,
        alpha: 0.55 + Math.random() * 0.45,
        rot:   Math.random() * Math.PI * 2,
        rotV:  (Math.random() - 0.5) * 0.14,
        sides: 3 + Math.floor(Math.random() * 3),
        color: palette[Math.floor(Math.random() * palette.length)],
      });
    };

    const drawPoly = (cx: number, cy: number, sides: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < sides; i++) {
        const a = (i / sides) * Math.PI * 2 - Math.PI / 2;
        i === 0 ? ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r)
                : ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      }
      ctx.closePath();
    };

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
      const dx = mx - lx, dy = my - ly;
      const spd = Math.sqrt(dx * dx + dy * dy);
      if (spd > 5) {
        const n = Math.min(Math.floor(spd / 7) + 1, 4);
        for (let i = 0; i < n; i++) spawnShard(mx, my, dx, dy);
        if (Math.random() < 0.18)
          ripples.push({ x: mx, y: my, r: 4, maxR: 55 + Math.random() * 70, alpha: 0.38 });
      }
      lx = mx; ly = my;
    };
    const onLeave = () => { mx = -999; my = -999; };

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Cursor glow + ring ──
      if (mx > -900) {
        const g = ctx.createRadialGradient(mx, my, 0, mx, my, 110);
        g.addColorStop(0,   'rgba(79,70,229,0.20)');
        g.addColorStop(0.5, 'rgba(79,70,229,0.07)');
        g.addColorStop(1,   'rgba(79,70,229,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(mx, my, 110, 0, Math.PI * 2); ctx.fill();

        ctx.strokeStyle = 'rgba(255,255,255,0.18)';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.arc(mx, my, 20, 0, Math.PI * 2); ctx.stroke();

        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.beginPath(); ctx.arc(mx, my, 2.5, 0, Math.PI * 2); ctx.fill();
      }

      // ── Ripple rings (segmented = cracked glass look) ──
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += 2.8; rp.alpha *= 0.945;
        if (rp.alpha < 0.01 || rp.r > rp.maxR) { ripples.splice(i, 1); continue; }
        const segs = 10;
        ctx.lineWidth = 0.9;
        for (let s = 0; s < segs; s++) {
          const a0 = (s / segs) * Math.PI * 2;
          const a1 = ((s + 0.65) / segs) * Math.PI * 2;
          ctx.strokeStyle = `rgba(255,255,255,${rp.alpha})`;
          ctx.beginPath(); ctx.arc(rp.x, rp.y, rp.r, a0, a1); ctx.stroke();
        }
        // crack lines radiating out
        if (rp.r < rp.maxR * 0.4) {
          const cracks = 5;
          for (let c = 0; c < cracks; c++) {
            const a = (c / cracks) * Math.PI * 2 + rp.r * 0.05;
            const len = rp.r * (0.4 + Math.random() * 0.3);
            ctx.strokeStyle = `rgba(255,255,255,${rp.alpha * 0.5})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(rp.x + Math.cos(a) * rp.r, rp.y + Math.sin(a) * rp.r);
            ctx.lineTo(rp.x + Math.cos(a) * (rp.r + len * 0.4),
                       rp.y + Math.sin(a) * (rp.r + len * 0.4));
            ctx.stroke();
          }
        }
      }

      // ── Glass shards ──
      for (let i = shards.length - 1; i >= 0; i--) {
        const s = shards[i];
        s.x += s.vx; s.y += s.vy;
        s.vy += 0.09; s.vx *= 0.98;
        s.alpha *= 0.91; s.rot += s.rotV;
        if (s.alpha < 0.01) { shards.splice(i, 1); continue; }
        ctx.save();
        ctx.translate(s.x, s.y); ctx.rotate(s.rot);
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle   = `${s.color}${(s.alpha * 0.8).toFixed(2)})`;
        ctx.strokeStyle = `rgba(255,255,255,${(s.alpha * 0.5).toFixed(2)})`;
        ctx.lineWidth = 0.6;
        drawPoly(0, 0, s.sides, s.size);
        ctx.fill(); ctx.stroke();
        ctx.restore();
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[5]"
      style={{ pointerEvents: 'none' }}
    />
  );
};

// ─── 3-D tilt card with glare (ecosystem section) ────────────────────────────
interface TiltCardProps { children: React.ReactNode; className?: string; }

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt]   = useState({ x: 0, y: 0, active: false });
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el   = ref.current!;
    const rect = el.getBoundingClientRect();
    const px   = (e.clientX - rect.left) / rect.width;   // 0–1
    const py   = (e.clientY - rect.top)  / rect.height;  // 0–1
    setTilt({ x: (py - 0.5) * -16, y: (px - 0.5) * 16, active: true });
    setGlare({ x: px * 100, y: py * 100 });
  };

  const onLeave = () => setTilt({ x: 0, y: 0, active: false });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${className} relative`}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.active ? 1.03 : 1})`,
        transition: tilt.active
          ? 'transform 0.08s ease-out'
          : 'transform 0.55s cubic-bezier(0.16,1,0.3,1)',
        willChange: 'transform',
      }}
    >
      {/* Glare layer */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden"
        style={{ zIndex: 30, opacity: tilt.active ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        <div
          style={{
            position: 'absolute',
            width: '160%', height: '160%',
            top:  `${glare.y - 80}%`,
            left: `${glare.x - 80}%`,
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.10) 0%, transparent 55%)',
            transition: tilt.active ? 'top 0.08s ease-out, left 0.08s ease-out' : 'none',
          }}
        />
      </div>
      {children}
    </div>
  );
};

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
const useInView = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px', ...options }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, inView };
};

const Home: React.FC = () => {
  const hero = useInView();
  const mission = useInView();
  const ecosystem = useInView();
  const angels = useInView();
  const membership = useInView();
  const pune = useInView();
  const gallery = useInView();
  const cta = useInView();

  return (
    <div className="overflow-hidden">

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#07080F] flex flex-col justify-center overflow-hidden" style={{ cursor: 'none' }}>
        {/* Glass-shard cursor canvas */}
        <HeroCanvas />
        {/* Grid texture */}
        <div className="absolute inset-0 bg-line-grid opacity-100 pointer-events-none" />

        {/* Orbs */}
        <div className="orb w-[600px] h-[600px] bg-primary/20 top-[-100px] left-[-150px] animate-float-slow" />
        <div className="orb w-[500px] h-[500px] bg-accent/15 bottom-[-80px] right-[-100px] animate-float-slow" style={{ animationDelay: '3s' }} />
        <div className="orb w-[300px] h-[300px] bg-primary-light/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Hero content */}
        <div ref={hero.ref} className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">

          {/* Badge */}
          <div className={`reveal ${hero.inView ? 'in-view' : ''} inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-primary/8 mb-10`}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow" />
            <span className="text-[11px] font-bold text-primary-light uppercase tracking-[0.12em]">
              Pune's Premier Tech Collective
            </span>
          </div>

          {/* Headline */}
          <h1 className={`reveal reveal-d1 ${hero.inView ? 'in-view' : ''} font-display font-extrabold tracking-[-0.03em] leading-[0.9] mb-8`}>
            <span className="block text-6xl md:text-8xl lg:text-[96px] text-white mb-2">Where Founders</span>
            <span className="block text-6xl md:text-8xl lg:text-[96px] text-gradient-primary">Build Empires.</span>
          </h1>

          {/* Subtext */}
          <p className={`reveal reveal-d2 ${hero.inView ? 'in-view' : ''} text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed`}>
            Join the most influential network of founders, innovators, and visionaries in Pune.
            Artha connects you with the mentorship, capital, and community to scale relentlessly.
          </p>

          {/* CTAs */}
          <div className={`reveal reveal-d3 ${hero.inView ? 'in-view' : ''} flex flex-col sm:flex-row items-center justify-center gap-4`}>
            <Link
              to="/join"
              className="btn-glow inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-primary rounded-full shadow-glow-indigo"
            >
              Become a Member <ArrowRight size={18} />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold text-white/70 border border-white/15 rounded-full hover:bg-white/6 hover:text-white transition-all duration-200"
            >
              Explore Events
            </Link>
          </div>

          {/* Stats row */}
          <div className={`reveal reveal-d4 ${hero.inView ? 'in-view' : ''} mt-20 flex flex-col sm:flex-row items-center justify-center gap-0`}>
            <div className="px-10 py-4 text-center">
              <p className="font-display font-bold text-3xl text-white mb-1">500+</p>
              <p className="text-xs text-white/35 uppercase tracking-[0.1em] font-medium">Professionals</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="px-10 py-4 text-center">
              <p className="font-display font-bold text-3xl text-white mb-1">₹100Cr+</p>
              <p className="text-xs text-white/35 uppercase tracking-[0.1em] font-medium">Capital Deployed</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="px-10 py-4 text-center">
              <p className="font-display font-bold text-3xl text-white mb-1">1</p>
              <p className="text-xs text-white/35 uppercase tracking-[0.1em] font-medium">Unified Ecosystem</p>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFC] to-transparent pointer-events-none" />
      </section>

      {/* ─── SECTION 2: MISSION ──────────────────────────────────────────────── */}
      <section className="py-28 bg-[#FAFAFC] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-light opacity-60 pointer-events-none" />
        <div ref={mission.ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          {/* Label + heading */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className={`reveal ${mission.inView ? 'in-view' : ''} flex items-center justify-center gap-3 mb-5`}>
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.12em]">The Mission</span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className={`reveal reveal-d1 ${mission.inView ? 'in-view' : ''} font-display font-bold text-4xl md:text-5xl text-[#0F1117] tracking-tight leading-tight mb-6`}>
              Innovation Thrives<br />in Community.
            </h2>
            <p className={`reveal reveal-d2 ${mission.inView ? 'in-view' : ''} text-lg text-[#6B7280] leading-relaxed`}>
              Founded on the belief that founders shouldn't build in isolation, Artha serves as the catalyst
              for Pune's startup economy. We enable local entrepreneurs to think globally while building locally.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, number: '500+', label: 'Active Professionals', delay: '' },
              { icon: IndianRupee, number: '₹100Cr+', label: 'Capital Deployed', delay: 'reveal-d1' },
              { icon: Network, number: '1', label: 'Unified Ecosystem', delay: 'reveal-d2' },
            ].map(({ icon: Icon, number, label, delay }) => (
              <div
                key={label}
                className={`reveal ${delay} ${mission.inView ? 'in-view' : ''} hover-lift bg-white rounded-3xl p-8 shadow-card text-center group`}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon size={26} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-display font-bold text-4xl text-primary mb-2">{number}</p>
                <p className="text-sm font-medium text-[#9CA3AF] uppercase tracking-[0.08em]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: ECOSYSTEM ────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0D0F1A] relative overflow-hidden" style={{ cursor: 'none' }}>
        <HeroCanvas />
        <div className="absolute inset-0 bg-line-grid pointer-events-none" />
        <div className="orb w-[500px] h-[500px] bg-primary/15 top-0 left-1/4 pointer-events-none" />
        <div className="orb w-[400px] h-[400px] bg-purple-600/10 bottom-0 right-1/4 pointer-events-none" />

        <div ref={ecosystem.ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className={`reveal ${ecosystem.inView ? 'in-view' : ''} flex items-center justify-center gap-3 mb-5`}>
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-[11px] font-bold text-primary-light uppercase tracking-[0.12em]">The Ecosystem</span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className={`reveal reveal-d1 ${ecosystem.inView ? 'in-view' : ''} font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-tight mb-5`}>
              Who Belongs Here.
            </h2>
            <p className={`reveal reveal-d2 ${ecosystem.inView ? 'in-view' : ''} text-lg text-white/40 leading-relaxed`}>
              Three pillars of an extraordinary tech community, each reinforcing the others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <TiltCard className={`reveal ${ecosystem.inView ? 'in-view' : ''} group bg-[#141728] rounded-3xl p-8 border border-white/6 hover:border-blue-500/30 transition-colors duration-300 overflow-hidden`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award size={22} className="text-blue-400" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/15 text-blue-300 text-[11px] font-bold uppercase tracking-[0.1em] mb-5">
                  Guided by Giants
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-3">The Veterans</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  Industry stalwarts who have navigated market cycles and built legacy enterprises.
                  They provide steady hands and strategic foresight to the next generation.
                </p>
              </div>
            </TiltCard>

            {/* Card 2 */}
            <TiltCard className={`reveal reveal-d1 ${ecosystem.inView ? 'in-view' : ''} group bg-[#141728] rounded-3xl p-8 border border-white/6 hover:border-purple-500/30 transition-colors duration-300 overflow-hidden`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 size={22} className="text-purple-400" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/15 text-purple-300 text-[11px] font-bold uppercase tracking-[0.1em] mb-5">
                  The Builders
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-3">The Members</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  A community of CEOs, CTOs, and Product Visionaries driving the digital economy.
                  From early-stage founders to Series B leaders making big moves.
                </p>
              </div>
            </TiltCard>

            {/* Card 3 */}
            <TiltCard className={`reveal reveal-d2 ${ecosystem.inView ? 'in-view' : ''} group bg-[#141728] rounded-3xl p-8 border border-white/6 hover:border-amber-500/30 transition-colors duration-300 overflow-hidden`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket size={22} className="text-amber-400" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/15 text-amber-300 text-[11px] font-bold uppercase tracking-[0.1em] mb-5">
                  The Disruptors
                </span>
                <h3 className="font-display font-bold text-xl text-white mb-3">Emerging Stars</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  Highlighting the startups putting Pune on the global map. We shine a light
                  on companies with exceptional promise and the grit to match.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: Artha ANGELS ──────────────────────────────────────────── */}
      <section className="py-28 bg-[#FAFAFC] relative overflow-hidden">
        <div ref={angels.ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left editorial column */}
            <div>
              <div className={`reveal ${angels.inView ? 'in-view' : ''} flex items-center gap-3 mb-6`}>
                <div className="h-px w-12 bg-primary/40" />
                <span className="text-[11px] font-bold text-primary uppercase tracking-[0.12em]">Feature Spotlight: Artha Angels</span>
              </div>
              <h2 className={`reveal reveal-d1 ${angels.inView ? 'in-view' : ''} font-display font-bold text-4xl md:text-5xl text-[#0F1117] tracking-tight leading-tight mb-4`}>
                Capital +<br />Context.
              </h2>
              <p className={`reveal reveal-d2 ${angels.inView ? 'in-view' : ''} text-xl text-[#9CA3AF] mb-10 font-medium`}>
                Money is a commodity.{' '}
                <span className="text-[#0F1117] font-bold">Experience is an asset.</span>
              </p>

              <div className={`reveal reveal-d2 ${angels.inView ? 'in-view' : ''} space-y-6 mb-10`}>
                {[
                  {
                    icon: HeartHandshake,
                    title: 'Founder-to-Founder Empathy',
                    desc: "Investors who've been in your shoes, built huge businesses, and understand the lonely journey of the founder.",
                  },
                  {
                    icon: TrendingUp,
                    title: 'Skin in the Game',
                    desc: 'Personal investment in your success, not just managing a fund. When you win, we win. Full stop.',
                  },
                  {
                    icon: Globe2,
                    title: 'Local Context, Global Reach',
                    desc: 'Deep understanding of Pune market nuances combined with access to global distribution networks.',
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0F1117] text-sm mb-1">{title}</p>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className={`reveal reveal-d3 ${angels.inView ? 'in-view' : ''} inline-flex items-center gap-2 text-primary font-bold text-sm group`}
              >
                Pitch your startup
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* Right stacked cards */}
            <div className={`reveal reveal-d2 ${angels.inView ? 'in-view' : ''} space-y-4`}>
              {[
                {
                  icon: HeartHandshake,
                  title: 'Founder-to-Founder Empathy',
                  body: "We've built, failed, pivoted, and scaled. That battle-tested instinct is what we bring to your boardroom.",
                  color: 'from-blue-50 to-indigo-50',
                  iconBg: 'bg-blue-100',
                  iconColor: 'text-blue-600',
                },
                {
                  icon: TrendingUp,
                  title: 'Skin in the Game',
                  body: 'We put our own capital on the line — not a fund committee. Our incentives align perfectly with your growth.',
                  color: 'from-violet-50 to-purple-50',
                  iconBg: 'bg-violet-100',
                  iconColor: 'text-violet-600',
                },
                {
                  icon: Globe2,
                  title: 'Local Context, Global Reach',
                  body: 'Fifteen years of Pune market relationships paired with global expansion playbooks from markets across 4 continents.',
                  color: 'from-amber-50 to-orange-50',
                  iconBg: 'bg-amber-100',
                  iconColor: 'text-amber-600',
                },
              ].map(({ icon: Icon, title, body, color, iconBg, iconColor }) => (
                <div
                  key={title}
                  className={`hover-lift bg-gradient-to-br ${color} rounded-2xl p-6 border border-black/4 flex gap-4`}
                >
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={iconColor} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0F1117] text-sm mb-1">{title}</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: MEMBERSHIP TIERS ─────────────────────────────────────── */}
      <section className="py-28 bg-[#F2F3F8] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-light opacity-50 pointer-events-none" />
        <div ref={membership.ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className={`reveal ${membership.inView ? 'in-view' : ''} flex items-center justify-center gap-3 mb-5`}>
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.12em]">Membership</span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className={`reveal reveal-d1 ${membership.inView ? 'in-view' : ''} font-display font-bold text-4xl md:text-5xl text-[#0F1117] tracking-tight mb-4`}>
              Choose Your Tier.
            </h2>
            <p className={`reveal reveal-d2 ${membership.inView ? 'in-view' : ''} text-lg text-[#6B7280]`}>
              Whether you're a solo founder or scaling a team, there's a place for you in Artha.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Individual */}
            <div className={`reveal ${membership.inView ? 'in-view' : ''} hover-lift bg-white rounded-3xl p-8 shadow-card flex flex-col`}>
              <div className="w-12 h-12 rounded-2xl bg-primary/8 flex items-center justify-center mb-6">
                <User size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0F1117] mb-1">Individual Member</h3>
              <p className="text-sm text-[#9CA3AF] mb-8 font-medium">For Founders, Freelancers & Tech Professionals</p>
              <ul className="space-y-3.5 mb-10 flex-1">
                {[
                  'Network with the top 1% of Pune tech talent.',
                  'Access to exclusive peer learning circles.',
                  'Entry to monthly masterclasses & workshops.',
                  'Artha directory listing and profile page.',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-green-600" />
                    </div>
                    <span className="text-sm text-[#374151]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/join"
                className="w-full py-4 rounded-2xl border-2 border-primary text-primary font-bold text-sm text-center hover:bg-primary hover:text-white transition-all duration-200"
              >
                Join as Individual
              </Link>
            </div>

            {/* Corporate - elevated */}
            <div className={`reveal reveal-d1 ${membership.inView ? 'in-view' : ''} hover-lift bg-[#07080F] rounded-3xl p-8 shadow-glow-indigo flex flex-col relative overflow-hidden md:-translate-y-4`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/20 flex items-center justify-center">
                    <Building2 size={22} className="text-primary-light" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-[0.12em] bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-1">Corporate Member</h3>
                <p className="text-sm text-white/40 mb-8 font-medium">For Startups, Scale-ups & Enterprises</p>
                <ul className="space-y-3.5 mb-10 flex-1">
                  {[
                    'Brand visibility via the "Emerging Stars" program.',
                    'Bulk team access to all Artha events.',
                    'Policy advocacy and senior hiring support.',
                    'Direct introductions to Artha Angels investors.',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="text-primary-light" />
                      </div>
                      <span className="text-sm text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/join"
                  className="btn-glow w-full py-4 rounded-2xl bg-primary text-white font-bold text-sm text-center shadow-glow-indigo"
                >
                  Join as Corporate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: WHY PUNE? ────────────────────────────────────────────── */}
      <section className="py-28 bg-[#FAFAFC] relative overflow-hidden">
        <div ref={pune.ref} className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className={`reveal ${pune.inView ? 'in-view' : ''} flex items-center justify-center gap-3 mb-5`}>
              <div className="h-px w-12 bg-primary/40" />
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.12em]">The Ecosystem Advantage</span>
              <div className="h-px w-12 bg-primary/40" />
            </div>
            <h2 className={`reveal reveal-d1 ${pune.inView ? 'in-view' : ''} font-display font-bold text-4xl md:text-5xl text-[#0F1117] tracking-tight mb-5`}>
              Why Build in Pune?
            </h2>
            <p className={`reveal reveal-d2 ${pune.inView ? 'in-view' : ''} text-xl text-[#6B7280]`}>
              We are sitting on a{' '}
              <span className="text-[#0F1117] font-bold">powder keg</span> of talent and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                icon: GraduationCap,
                title: 'The Talent Pipeline',
                body: 'Home to top engineering institutions, Pune offers a dense concentration of technical talent ready to build the next unicorn.',
                delay: '',
              },
              {
                num: '02',
                icon: Wallet,
                title: 'The Cost Advantage',
                body: 'Extend your runway. Pune offers a high quality of life with significantly lower operational costs compared to Bangalore or Mumbai.',
                delay: 'reveal-d1',
              },
              {
                num: '03',
                icon: Cpu,
                title: 'Deep Tech Heritage',
                body: 'From automotive giants to IT services, Pune has a DNA of engineering excellence now evolving into world-class product innovation.',
                delay: 'reveal-d2',
              },
            ].map(({ num, icon: Icon, title, body, delay }) => (
              <div
                key={num}
                className={`reveal ${delay} ${pune.inView ? 'in-view' : ''} hover-lift bg-white rounded-3xl p-8 shadow-card group`}
              >
                <p className="font-display font-bold text-5xl text-gradient-primary mb-6 leading-none">{num}</p>
                <div className="w-11 h-11 rounded-2xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0F1117] mb-3">{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: IMAGE GRID ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#F2F3F8]">
        <div ref={gallery.ref} className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className={`reveal ${gallery.inView ? 'in-view' : ''} text-center mb-12`}>
            <h2 className="font-display font-bold text-3xl text-[#0F1117] tracking-tight">Life at Artha</h2>
          </div>

          <div className={`reveal reveal-d1 ${gallery.inView ? 'in-view' : ''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[500px]`}>
            <div className="lg:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl">
              <img
                src="https://picsum.photos/seed/tech1/800/800"
                alt="Annual Tech Summit"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.12em] mb-2">Flagship Event</p>
                  <h3 className="font-display font-bold text-2xl text-white">Annual Tech Summit</h3>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
              <img
                src="https://picsum.photos/seed/tech2/400/400"
                alt="Networking Mixers"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="font-display font-bold text-lg text-white">Networking Mixers</h3>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-3xl">
              <img
                src="https://picsum.photos/seed/tech3/400/400"
                alt="Workshops"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="font-display font-bold text-lg text-white">Workshops & Labs</h3>
              </div>
            </div>
            <div className="lg:col-span-2 relative group overflow-hidden rounded-3xl">
              <img
                src="https://picsum.photos/seed/tech4/800/400"
                alt="Pune Hackathon"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.12em] mb-2">2024</p>
                  <h3 className="font-display font-bold text-2xl text-white">Pune Hackathon 2024</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8: CTA ──────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#07080F] relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
        <div className="orb w-[500px] h-[500px] bg-primary/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div ref={cta.ref} className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className={`reveal ${cta.inView ? 'in-view' : ''} flex items-center justify-center gap-3 mb-6`}>
            <div className="h-px w-12 bg-primary/40" />
            <span className="text-[11px] font-bold text-primary-light uppercase tracking-[0.12em]">Join the Community</span>
            <div className="h-px w-12 bg-primary/40" />
          </div>
          <h2 className={`reveal reveal-d1 ${cta.inView ? 'in-view' : ''} font-display font-bold text-4xl md:text-6xl text-white tracking-tight leading-tight mb-6`}>
            Ready to Scale<br />Your Startup?
          </h2>
          <p className={`reveal reveal-d2 ${cta.inView ? 'in-view' : ''} text-lg text-white/40 mb-10 leading-relaxed`}>
            Connect with the right mentors, investors, and peers at Artha.
            Your journey to the next level starts today.
          </p>
          <div className={`reveal reveal-d3 ${cta.inView ? 'in-view' : ''}`}>
            <Link
              to="/join"
              className="btn-glow inline-flex items-center gap-2.5 px-10 py-4 text-sm font-bold text-[#0F1117] bg-accent rounded-full shadow-glow-amber"
            >
              Join Artha Today <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

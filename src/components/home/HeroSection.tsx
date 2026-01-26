'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Heart, ChevronDown, Play } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  /* Animated particle system – dove silhouettes and hope sparkles */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];
    const doves: Dove[] = [];

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      life: number;
      maxLife: number;
      color: string;
    }

    interface Dove {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      wingAngle: number;
      wingSpeed: number;
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    // Create floating particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 0.5 - 0.2,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        life: Math.random() * 200,
        maxLife: 200 + Math.random() * 100,
        color:
          Math.random() > 0.5
            ? 'rgba(20, 184, 166, '
            : 'rgba(245, 158, 11, ',
      });
    }

    // Create doves
    for (let i = 0; i < 4; i++) {
      doves.push({
        x: Math.random() * w(),
        y: Math.random() * h() * 0.5 + 50,
        vx: (Math.random() - 0.3) * 1.5,
        vy: Math.sin(Math.random() * Math.PI) * 0.3,
        size: 15 + Math.random() * 10,
        opacity: 0.15 + Math.random() * 0.15,
        wingAngle: Math.random() * Math.PI * 2,
        wingSpeed: 0.06 + Math.random() * 0.04,
      });
    }

    const drawDove = (dove: Dove) => {
      ctx.save();
      ctx.translate(dove.x, dove.y);
      ctx.globalAlpha = dove.opacity;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1.5;
      const s = dove.size;
      const wingY = Math.sin(dove.wingAngle) * s * 0.5;

      // Body
      ctx.beginPath();
      ctx.ellipse(0, 0, s * 0.6, s * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Left wing
      ctx.beginPath();
      ctx.moveTo(-s * 0.2, 0);
      ctx.quadraticCurveTo(-s * 0.6, -s * 0.3 + wingY, -s, wingY);
      ctx.stroke();

      // Right wing
      ctx.beginPath();
      ctx.moveTo(s * 0.2, 0);
      ctx.quadraticCurveTo(s * 0.6, -s * 0.3 + wingY, s, wingY);
      ctx.stroke();

      // Head
      ctx.beginPath();
      ctx.arc(s * 0.5, -s * 0.1, s * 0.15, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, w(), h());

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life > p.maxLife || p.y < -10) {
          p.x = Math.random() * w();
          p.y = h() + 10;
          p.life = 0;
        }

        const lifeRatio = 1 - p.life / p.maxLife;
        const alpha = p.opacity * lifeRatio;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + alpha + ')';
        ctx.fill();
      });

      // Update and draw doves
      doves.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy + Math.sin(Date.now() * 0.001 + d.x) * 0.2;
        d.wingAngle += d.wingSpeed;

        if (d.x > w() + 50) d.x = -50;
        if (d.x < -50) d.x = w() + 50;
        if (d.y > h() * 0.6) d.vy = -Math.abs(d.vy);
        if (d.y < 30) d.vy = Math.abs(d.vy);

        drawDove(d);
      });

      // Connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(20, 184, 166, ${
              0.05 * (1 - dist / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 pattern-grid opacity-20" />

      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary-500/10 blur-3xl" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 container-custom py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-200 text-sm font-medium mb-6 border border-white/10">
              Inspiring Hope, Transforming Lives
            </span>
          </div>

          <h1
            className={`font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Empowering
            <span className="block text-gradient bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 bg-clip-text text-transparent">
              Vulnerable Communities
            </span>
            in Uganda
          </h1>

          <p
            className={`text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            Supporting children, youth, and communities through education,
            healthcare, economic empowerment, and holistic development programs
            across Uganda.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Link href="/get-involved">
              <Button variant="white" size="lg" className="gap-2 w-full sm:w-auto">
                <Heart className="w-5 h-5" aria-hidden="true" />
                Support Our Mission
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              >
                <Play className="w-5 h-5" aria-hidden="true" />
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" aria-hidden="true" />
      </div>
    </section>
  );
}

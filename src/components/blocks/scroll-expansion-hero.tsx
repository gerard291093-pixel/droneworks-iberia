'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  taglineLine1?: string;
  taglineLine2?: string;
  subtitle?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  taglineLine1,
  taglineLine2,
  subtitle,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [showContent, setShowContent] = useState(false);

  const scrollProgressRef = useRef(0);
  const expandedRef = useRef(false);
  const touchStartYRef = useRef(0);
  const isMobileRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const bgWrapRef = useRef<HTMLDivElement>(null);
  const mediaOverlayRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);

  const applyProgress = (p: number) => {
    const mobile = isMobileRef.current;
    const tx = p * (mobile ? 180 : 150);
    const navH = 72;
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    // Start: 300×400, centered in space below navbar
    // End: full width × (vh - navH), anchored at navH
    const startW = 300;
    const startH = 400;
    const endW = vw;
    const endH = vh - navH;

    const w = startW + p * (endW - startW);
    const h = startH + p * (endH - startH);

    // Top: start centered in below-navbar space, end = navH
    const startTop = navH + (vh - navH) / 2 - startH / 2;
    const endTop = navH;
    const top = startTop + p * (endTop - startTop);

    const radius = Math.max(0, 16 * (1 - p));

    if (mediaContainerRef.current) {
      mediaContainerRef.current.style.width = `${w}px`;
      mediaContainerRef.current.style.height = `${h}px`;
      mediaContainerRef.current.style.top = `${top}px`;
      mediaContainerRef.current.style.transform = `translateX(-50%)`;
      mediaContainerRef.current.style.borderRadius = `${radius}px`;
    }
    if (bgWrapRef.current) bgWrapRef.current.style.opacity = String(1 - p);
    if (mediaOverlayRef.current) mediaOverlayRef.current.style.opacity = String(0.1 - p * 0.05);
    if (subtitleRef.current) subtitleRef.current.style.transform = `translateX(-${tx}vw)`;
    if (hintRef.current) hintRef.current.style.transform = `translateX(${tx}vw)`;
    if (title1Ref.current) title1Ref.current.style.transform = `translateX(-${tx}vw)`;
    if (title2Ref.current) title2Ref.current.style.transform = `translateX(${tx}vw)`;
  };

  useEffect(() => {
    const handleWheel = (e: Event) => {
      const we = e as globalThis.WheelEvent;
      if (expandedRef.current && we.deltaY < 0 && window.scrollY <= 5) {
        expandedRef.current = false;
        we.preventDefault();
        return;
      }
      if (expandedRef.current) return;

      we.preventDefault();
      const newP = Math.min(Math.max(scrollProgressRef.current + we.deltaY * 0.0009, 0), 1);
      scrollProgressRef.current = newP;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => applyProgress(newP));

      if (newP >= 1 && !expandedRef.current) {
        expandedRef.current = true;
        setShowContent(true);
      } else if (newP < 0.75) {
        setShowContent(false);
      }
    };

    const handleTouchStart = (e: Event) => {
      touchStartYRef.current = (e as globalThis.TouchEvent).touches[0].clientY;
    };

    const handleTouchMove = (e: Event) => {
      const te = e as globalThis.TouchEvent;
      if (!touchStartYRef.current) return;
      const touchY = te.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchY;

      if (expandedRef.current && deltaY < -20 && window.scrollY <= 5) {
        expandedRef.current = false;
        te.preventDefault();
        touchStartYRef.current = touchY;
        return;
      }
      if (expandedRef.current) return;

      te.preventDefault();
      const newP = Math.min(Math.max(scrollProgressRef.current + deltaY * (deltaY < 0 ? 0.008 : 0.005), 0), 1);
      scrollProgressRef.current = newP;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => applyProgress(newP));

      if (newP >= 1 && !expandedRef.current) {
        expandedRef.current = true;
        setShowContent(true);
      } else if (newP < 0.75) {
        setShowContent(false);
      }
      touchStartYRef.current = touchY;
    };

    const handleTouchEnd = () => { touchStartYRef.current = 0; };
    const handleScroll = () => { if (!expandedRef.current) window.scrollTo(0, 0); };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const check = () => { isMobileRef.current = window.innerWidth < 768; };
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const firstWord = taglineLine1 ?? (title?.split(' ')[0] ?? '');
  const restOfTitle = taglineLine2 ?? (title?.split(' ').slice(1).join(' ') ?? '');

  return (
    <div className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* Background */}
          <div
            ref={bgWrapRef}
            className="absolute inset-0 z-0 h-full"
            style={{ willChange: 'opacity' }}
          >
            <Image
              src={bgImageSrc}
              alt="Background"
              width={1920}
              height={1080}
              className="w-screen h-screen"
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
              priority
            />
            <div className="absolute inset-0 bg-black/5" />
          </div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-end w-full h-[100dvh] relative pb-32">

              {/* Media card */}
              <div
                ref={mediaContainerRef}
                className="absolute z-0 left-1/2 rounded-2xl overflow-hidden"
                style={{
                  width: '300px',
                  height: '400px',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0 0 80px rgba(201,168,76,0.15), 0 0 160px rgba(0,0,0,0.8)',
                  willChange: 'width, height, top, transform',
                  border: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                {mediaType === 'video' ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div ref={mediaOverlayRef} className="absolute inset-0 bg-black" style={{ opacity: 0.3 }} />
                    {/* Gold corner accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]/60" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C9A84C]/60" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C9A84C]/60" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]/60" />
                    {/* Bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title ?? 'DroneWorks Iberia'}
                      fill
                      priority
                      sizes="(max-width: 768px) 95vw, 80vw"
                      className="object-cover"
                    />
                    <div
                      ref={mediaOverlayRef}
                      className="absolute inset-0 bg-black"
                      style={{ opacity: 0.3 }}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center text-center relative z-10 mt-4 gap-2">
                  {subtitle && (
                    <p
                      ref={subtitleRef}
                      className="text-[10px] tracking-[0.45em] uppercase text-[#C9A84C]/90 font-light"
                      style={{ willChange: 'transform', fontFamily: 'var(--font-montserrat)' }}
                    >
                      {subtitle}
                    </p>
                  )}
                  {scrollToExpand && (
                    <div ref={hintRef} className="flex flex-col items-center gap-1" style={{ willChange: 'transform' }}>
                      <p
                        className="text-white/50 font-light text-[9px] tracking-[0.4em] uppercase"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                      >
                        {scrollToExpand}
                      </p>
                      <div style={{ animation: 'scrollBounce 1.8s ease-in-out infinite' }}>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                          <path d="M8 1v14M3 10l5 6 5-6" stroke="rgba(201,168,76,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Title text */}
              <div className={`flex items-center justify-center text-center gap-2 w-full relative z-10 flex-col ${textBlend ? 'mix-blend-difference' : ''}`}>
                {title && taglineLine1 && (
                  <p
                    className="text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-white/40 mb-2"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {title}
                  </p>
                )}
                <h1
                  ref={title1Ref}
                  className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
                  style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.03em', willChange: 'transform', textShadow: '0 2px 40px rgba(0,0,0,0.8)' }}
                >
                  {firstWord}
                </h1>
                <h1
                  ref={title2Ref}
                  className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight"
                  style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.03em', color: '#C9A84C', willChange: 'transform', textShadow: '0 2px 40px rgba(201,168,76,0.3)' }}
                >
                  {restOfTitle}
                </h1>
                {subtitle && (
                  <p
                    ref={subtitleRef}
                    className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-3"
                    style={{ fontFamily: 'var(--font-montserrat)', willChange: 'transform' }}
                  >
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Hero CTA */}
              <div className="relative z-10 mt-6">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-3 px-7 py-3 text-[11px] tracking-[0.4em] uppercase font-black text-black bg-[#C9A84C] hover:bg-white transition-colors duration-300 cursor-pointer"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Solicitar Presupuesto
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Floating stats strip */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
                <div
                  className="flex items-center gap-6 md:gap-10 px-6 py-3 backdrop-blur-md border border-white/10 rounded-full"
                  style={{ background: 'rgba(8,8,8,0.7)' }}
                >
                  <div className="text-center">
                    <p className="text-[#C9A84C] text-lg font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>−70%</p>
                    <p className="text-[7px] tracking-[0.3em] uppercase text-white/50" style={{ fontFamily: 'var(--font-montserrat)' }}>Coste vs andamios</p>
                  </div>
                  <div className="w-px h-6 bg-white/15" />
                  <div className="text-center">
                    <p className="text-[#C9A84C] text-sm font-light leading-tight" style={{ fontFamily: 'var(--font-cormorant)' }}>España</p>
                    <p className="text-[7px] tracking-[0.3em] uppercase text-white/50" style={{ fontFamily: 'var(--font-montserrat)' }}>Toda la Península Ibérica</p>
                  </div>
                  <div className="w-px h-6 bg-white/15" />
                  <div className="text-center">
                    <p className="text-[#C9A84C] text-lg font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>6×</p>
                    <p className="text-[7px] tracking-[0.3em] uppercase text-white/50" style={{ fontFamily: 'var(--font-montserrat)' }}>Más rápido</p>
                  </div>
                  <div className="w-px h-6 bg-white/15 hidden md:block" />
                  <div className="text-center hidden md:block">
                    <p className="text-[#C9A84C] text-lg font-light" style={{ fontFamily: 'var(--font-cormorant)' }}>AESA</p>
                    <p className="text-[7px] tracking-[0.3em] uppercase text-white/50" style={{ fontFamily: 'var(--font-montserrat)' }}>Certificado</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.section
              className="flex flex-col w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;

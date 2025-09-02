'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// ---------- 3D scene (paquete flotante) ----------
function Parcel3D() {
  const grp = useRef<THREE.Group>(null!);
  useFrame((_, dt) => {
    if (!grp.current) return;
    grp.current.rotation.y += dt * 0.3;
  });

  const boxColor: THREE.ColorRepresentation = '#E2B887';
  const tapeColor: THREE.ColorRepresentation = '#B8893C';

  return (
    <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={grp} position={[0, -0.6, 0]}>
        <mesh castShadow>
          <boxGeometry args={[2.6, 1.6, 1.8]} />
          <meshStandardMaterial color={boxColor} roughness={0.8} metalness={0.1} />
        </mesh>

        <mesh position={[0, 0.01, 0]} castShadow>
          <boxGeometry args={[0.24, 1.62, 1.82]} />
          <meshStandardMaterial color={tapeColor} roughness={0.6} />
        </mesh>

        <mesh position={[0, 0.01, 0]} castShadow>
          <boxGeometry args={[2.62, 1.62, 0.18]} />
          <meshStandardMaterial color={tapeColor} roughness={0.6} />
        </mesh>

        <mesh position={[1.05, 0.01, 0.56]} rotation={[0, 0, -0.05]} castShadow>
          <planeGeometry args={[0.7, 0.5]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>
    </Float>
  );
}

// ---------- UI ----------
function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="block w-1.5 h-1.5 rounded-full bg-current animate-[dot_1.2s_ease-in-out_infinite]" />
      <span className="block w-1.5 h-1.5 rounded-full bg-current animate-[dot_1.2s_ease-in-out_infinite_0.15s]" />
      <span className="block w-1.5 h-1.5 rounded-full bg-current animate-[dot_1.2s_ease-in-out_infinite_0.3s]" />
    </span>
  );
}

function Checkmarks() {
  return (
    <span className="inline-flex items-center gap-0.5 text-[10px] opacity-80">
      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
        <path d="M0 12l2-2 6 6L22 2l2 2L8 20z" fill="currentColor" />
      </svg>
      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
        <path d="M0 12l2-2 6 6L22 2l2 2L8 20z" fill="currentColor" />
      </svg>
    </span>
  );
}

export default function PhoneMockup() {
  // Refs para animaciones
  const ctn = useRef<HTMLDivElement>(null);
  const b1 = useRef<HTMLDivElement>(null);
  const b2 = useRef<HTMLDivElement>(null);
  const b3 = useRef<HTMLDivElement>(null);
  const b4 = useRef<HTMLDivElement>(null);
  const typing = useRef<HTMLDivElement>(null);
  const ticks2 = useRef<HTMLSpanElement>(null);
  const ticks4 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ctn.current) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Estado inicial
    gsap.set([b1.current, b2.current, b3.current, b4.current], { y: 12, autoAlpha: 0 });
    gsap.set([ticks2.current, ticks4.current], { scale: 0, transformOrigin: 'left center' });
    gsap.set(typing.current, { autoAlpha: 0 });

    // Secuencia
    tl.to(b1.current, { autoAlpha: 1, y: 0, duration: 0.45 })
      .to(typing.current, { autoAlpha: 1, duration: 0.2 }, '+=0.1')
      .to(typing.current, { autoAlpha: 0, duration: 0.2 }, '+=0.8')
      .to(b2.current, { autoAlpha: 1, y: 0, duration: 0.45 })
      .to(ticks2.current, { scale: 1, duration: 0.25 }, '-=0.1')
      .to(b3.current, { autoAlpha: 1, y: 0, duration: 0.45 }, '+=0.2')
      .to(b4.current, { autoAlpha: 1, y: 0, duration: 0.45 }, '+=0.25')
      .to(ticks4.current, { scale: 1, duration: 0.25 }, '-=0.1');

    // Cleanup: devolver void
    return () => { tl.kill(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const time = new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });

  return (
    <div
      className="
        mx-auto
        w-[clamp(16rem,72vw,24rem)]
        select-none
      "
    >
      {/* Sombra debajo (más suave en móvil) */}
      <div className="mx-auto h-7 sm:h-8 w-2/3 rounded-full blur-2xl opacity-30 sm:opacity-40 bg-black/30" aria-hidden />

      {/* Marco del teléfono */}
      <div
        className="
          group relative aspect-[9/19.5] w-full
          rounded-[38px] sm:rounded-[42px]
          border border-slate-300/60 dark:border-slate-700
          bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-900 dark:to-slate-800
          shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          overflow-hidden
        "
      >
        {/* Botones laterales (oculta en móviles para evitar desbordes visuales) */}
        <div className="hidden md:block absolute -left-0.5 top-16 h-8 w-1 rounded-r-lg bg-slate-400/70 dark:bg-slate-600" aria-hidden />
        <div className="hidden md:block absolute -left-0.5 top-28 h-10 w-1 rounded-r-lg bg-slate-400/70 dark:bg-slate-600" aria-hidden />
        <div className="hidden md:block absolute -right-0.5 top-24 h-12 w-1 rounded-l-lg bg-slate-400/70 dark:bg-slate-600" aria-hidden />

        {/* Pantalla */}
        <div
          className="
            absolute inset-1 sm:inset-1.5
            rounded-[30px] sm:rounded-[36px]
            overflow-hidden
            bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_40%,#e0f2fe_100%)]
            dark:bg-[linear-gradient(135deg,#0b1220_0%,#0b1a2b_40%,#0b2030_100%)]
          "
        >
          {/* Notch */}
          <div
            className="
              absolute top-1 left-1/2 -translate-x-1/2
              h-5 sm:h-6 w-24 sm:w-28
              rounded-b-2xl bg-black/80
            "
            aria-hidden
          >
            <div className="absolute left-2.5 sm:left-3 top-1 h-2 w-5 sm:w-6 rounded-full bg-black/30" />
            <div className="absolute right-2.5 sm:right-3 top-1 h-2 w-2 rounded-full bg-black/30" />
          </div>

          {/* Reflections */}
          <div
            className="pointer-events-none absolute -left-12 sm:-left-16 -top-10 h-[150%] w-28 sm:w-40 rotate-[25deg] opacity-20"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.18) 35%, rgba(255,255,255,0) 70%)'
            }}
            aria-hidden
          />
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[radial-gradient(120%_60%_at_10%_0%,rgba(255,255,255,0.55),transparent_50%)]
              dark:bg-[radial-gradient(120%_60%_at_10%_0%,rgba(255,255,255,0.08),transparent_50%)]
            "
            aria-hidden
          />

          {/* 3D detrás del chat */}
          <div className="absolute inset-x-0 top-10 sm:top-12 bottom-0 pointer-events-none -z-0" aria-hidden>
            <Canvas dpr={[1, 2]}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 4, 3]} intensity={1.2} castShadow />
              <Parcel3D />
              <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.8, 0]} receiveShadow>
                <circleGeometry args={[8, 64]} />
                <meshBasicMaterial color={'#0A84FF'} opacity={0.05} transparent />
              </mesh>
            </Canvas>
          </div>

          {/* Barra de estado */}
          <div className="relative z-10 flex items-center justify-between px-3 sm:px-4 pt-7 sm:pt-8 text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-300">
            <span className="font-medium">{time}</span>
            <div className="flex items-center gap-2 opacity-80">
              <span className="flex gap-0.5">
                <i className="inline-block w-0.5 h-1 bg-current/70 rounded" />
                <i className="inline-block w-0.5 h-1.5 bg-current/70 rounded" />
                <i className="inline-block w-0.5 h-2 bg-current/70 rounded" />
                <i className="inline-block w-0.5 h-2.5 bg-current rounded" />
              </span>
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M12 18a2 2 0 100 4 2 2 0 000-4zm0-5c-2.761 0-5.26 1.121-7.071 2.929l1.414 1.414C7.799 15.887 9.806 15 12 15s4.201.887 5.657 2.343l1.414-1.414C17.26 14.121 14.761 13 12 13zm0-5C7.029 8 2.597 9.949 0 12.999l1.6 1.2C3.84 11.84 7.695 10 12 10s8.16 1.84 10.4 4.2l1.6-1.2C21.403 9.949 16.971 8 12 8z" />
              </svg>
              <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Batería">
                <rect x="1" y="6" width="18" height="12" rx="2" stroke="currentColor" fill="none" />
                <rect x="3" y="8" width="10" height="8" rx="1" fill="currentColor" />
                <rect x="20" y="10" width="3" height="8" rx="1" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Chat */}
          <div
            ref={ctn}
            className="
              relative z-10
              p-3 sm:p-4 pb-8 sm:pb-10
              flex flex-col gap-2
              text-[12px] sm:text-[13px]
              leading-snug
            "
          >
            {/* BURBUJA 1 (user) */}
            <div
              ref={b1}
              className="
                self-start max-w-[84%] sm:max-w-[78%]
                rounded-2xl
                bg-white/80 dark:bg-white/10
                border border-black/5 dark:border-white/10
                backdrop-blur
                px-3 py-2
                text-slate-700 dark:text-slate-200
                shadow-sm
              "
            >
              Quiero enviar un paquete
            </div>

            {/* TYPING */}
            <div
              ref={typing}
              className="
                self-end max-w-[84%] sm:max-w-[78%]
                rounded-2xl
                bg-[#0A84FF]/15
                text-slate-900 dark:text-white
                px-3 py-2
                border border-[#0A84FF]/30
              "
            >
              <TypingDots />
            </div>

            {/* BURBUJA 2 (bot) */}
            <div
              ref={b2}
              className="
                self-end max-w-[84%] sm:max-w-[78%]
                rounded-2xl
                bg-[#0A84FF]/20
                text-slate-900 dark:text-white
                px-3 py-2
                border border-[#0A84FF]/30
                shadow-sm
              "
            >
              ¡Perfecto! Comparte origen, destino y medidas 📦
              <span ref={ticks2} className="ml-2 align-middle inline-block text-[#0A84FF]">
                <Checkmarks />
              </span>
            </div>

            {/* BURBUJA 3 (user) */}
            <div
              ref={b3}
              className="
                self-start max-w-[84%] sm:max-w-[78%]
                rounded-2xl
                bg-white/80 dark:bg-white/10
                border border-black/5 dark:border-white/10
                backdrop-blur
                px-3 py-2
                text-slate-700 dark:text-slate-200
                shadow-sm
              "
            >
              Listo, ya está. ¿Cuánto sale?
            </div>

            {/* BURBUJA 4 (bot) */}
            <div
              ref={b4}
              className="
                self-end max-w-[84%] sm:max-w-[78%]
                rounded-2xl
                bg-[#FF6B00]/15
                border border-[#FF6B00]/30
                px-3 py-2
                text-slate-900 dark:text-white
                shadow-sm
              "
            >
              Tu guía está lista. Págala y descarga aquí.
              <span ref={ticks4} className="ml-2 align-middle inline-block text-[#FF6B00]">
                <Checkmarks />
              </span>
            </div>
          </div>
        </div>

        {/* Glass glare animado (más pequeño en móvil) */}
        <div
          className="
            pointer-events-none absolute
            -left-12 sm:-left-16 top-0
            h-full w-20 sm:w-28
            rotate-[18deg] opacity-0 group-hover:opacity-20
          "
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.25) 35%, rgba(255,255,255,0) 70%)',
            animation: 'glare 5s linear infinite'
          }}
          aria-hidden
        />
      </div>

      {/* Keyframes locales para dots + glare */}
      <style jsx>{`
        @keyframes dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.6; }
          30% { transform: translateY(-2px); opacity: 1; }
        }
        @keyframes glare {
          0% { transform: translateX(-60%) rotate(18deg); }
          100% { transform: translateX(160%) rotate(18deg); }
        }
      `}</style>
    </div>
  );
}

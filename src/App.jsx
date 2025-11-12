import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function App() {
  const nextRef = useRef(null)

  const handleEnter = () => {
    nextRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Hero Section with Spline 3D scene */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        {/* 3D Scene */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Readability gradients (don't block interaction) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
            >
              <span className="block bg-gradient-to-r from-fuchsia-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">
                A digital world where ideas come alive.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="mt-6 max-w-2xl text-base md:text-lg text-zinc-300"
            >
              This isn’t just a portfolio — it’s a living 3D space. Every motion tells a story — clouds drift, characters move, and elements react to your touch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-8 flex items-center gap-4"
            >
              <button
                onClick={handleEnter}
                className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Enter the world
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
              <a
                href="#about"
                className="text-sm text-zinc-300 hover:text-white transition"
              >
                Learn more
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center text-zinc-300"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.span
              className="mt-2 block h-8 w-px bg-zinc-500"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Section 1 */}
      <section ref={nextRef} id="about" className="relative w-full bg-black py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold"
          >
            Every scroll is exploration
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-4 max-w-2xl text-zinc-400"
          >
            Each scroll feels like exploring a world built with creativity and soul. It’s where art, tech, and interaction blend into one seamless experience.
          </motion.p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Responsive to touch',
                desc: 'Elements react to your cursor and taps with delightful micro-interactions.',
              },
              {
                title: 'Cinematic motion',
                desc: 'Smooth parallax, depth, and timing that guide your eyes and emotions.',
              },
              {
                title: 'Futuristic aesthetic',
                desc: 'A dark, cyberpunk mood with iridescent accents and glowing wireframes.',
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.08 * idx }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative w-full bg-gradient-to-b from-black via-[#0b0b12] to-black py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-4xl font-bold">
                Built where art meets technology
              </h2>
              <p className="mt-4 text-zinc-400">
                A space where imagination has no limits — crafted with modern 3D, real-time interaction, and expressive motion.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs text-zinc-300">
                {['3D Interaction', 'Real-time Motion', 'Futuristic UI', 'Immersive Sound-ready'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative"
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-fuchsia-500/30 via-violet-500/20 to-sky-500/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-10 text-center text-sm text-zinc-400">
        <p>
          © {new Date().getFullYear()} Your 3D Space — Designed for wonder.
        </p>
      </footer>
    </div>
  )
}

export default App

import SplineScene from '@/components/SplineScene'

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pb-32 overflow-hidden">
      <SplineScene />

      {/* Subtle grid for depth */}
      <div className="absolute inset-0 -z-10 background-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-xs">
            <span className="size-1.5 rounded-full bg-plasma-500 animate-pulse" />
            Holographic • Glossy • Metallic purple
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            <span className="block text-white/95">Design the unreal.</span>
            <span className="block bg-gradient-to-r from-plasma-600 via-neon-700 to-plasma-400 bg-clip-text text-transparent">
              Ship immersive, living interfaces.
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Axiom fuses real‑time 3D and cloud systems to craft experiences with depth, reflection, and motion—made for the next wave of human‑computer interaction.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a className="cta" href="#contact">
              Start a project
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M13.5 4.5a.75.75 0 0 0-1.5 0v6.75H5.25a.75.75 0 0 0 0 1.5H12v6.75a.75.75 0 0 0 1.5 0V12.75h6.75a.75.75 0 0 0 0-1.5H13.5V4.5Z"/></svg>
            </a>
            <a className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 transition" href="#features">
              Explore features
            </a>
          </div>
        </div>

        {/* Bottom gradient accent aligned to purple model hue */}
        <div className="pointer-events-none absolute left-1/2 top-[65%] -translate-x-1/2 -z-10 h-[60vh] w-[90vw] max-w-6xl rounded-full blur-3xl opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.35),transparent_60%)]" />
      </div>
    </section>
  )
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      <Hero />

      <section id="features" className="section">
        <div className="absolute inset-0 -z-10 background-grid opacity-40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-gradient-to-br from-plasma-600 to-neon-700" />
                <h3 className="font-semibold">Holographic Interfaces</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm">Layered depth and reflective materials for a truly next‑gen feel, powered by GPU‑accelerated rendering.</p>
            </div>
            <div className="glass p-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-gradient-to-br from-neon-600 to-plasma-600" />
                <h3 className="font-semibold">Realtime Collaboration</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm">Live presence and synchronized state across clients with secure edge streaming.</p>
            </div>
            <div className="glass p-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-gradient-to-br from-plasma-400 to-neon-600" />
                <h3 className="font-semibold">AI‑Driven Workflows</h3>
              </div>
              <p className="mt-3 text-white/70 text-sm">Automate complex pipelines with context‑aware orchestration and adaptive UX.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="glass p-8">
              <h2 className="text-2xl font-semibold">Enterprise‑grade by design</h2>
              <p className="mt-3 text-white/70">ISO‑aligned controls, zero‑trust architecture, and observability baked in. Deploy on your cloud with full data residency.</p>
              <ul className="mt-6 space-y-3 text-white/80 text-sm list-disc list-inside">
                <li>Edge‑first delivery with global latency &lt; 50ms</li>
                <li>End‑to‑end encryption and SSO integrations</li>
                <li>Compliance kits: SOC2, HIPAA, GDPR</li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <div className="absolute inset-0 bg-glow opacity-20 blur-2xl -z-10" />
              <img src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop" alt="Futuristic dashboard" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8">
              <h2 className="text-2xl font-semibold">Why Axiom?</h2>
              <p className="mt-3 text-white/70">We combine design systems with spatial computing. Our team ships production‑ready experiences where artistry meets reliability.</p>
            </div>
            <div className="glass p-8">
              <h2 className="text-2xl font-semibold">What you get</h2>
              <ul className="mt-3 space-y-2 text-white/80 text-sm list-disc list-inside">
                <li>Design‑to‑code delivery</li>
                <li>3D performance optimization</li>
                <li>Analytics and A/B tooling</li>
                <li>Ongoing support and training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section pb-36">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="glass p-8">
            <h2 className="text-2xl font-semibold">Start your journey</h2>
            <p className="mt-2 text-white/70">Tell us about your vision. We’ll get back within 1 business day.</p>
            <form className="mt-6 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input required name="name" placeholder="Name" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-neon-600" />
                <input required type="email" name="email" placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-neon-600" />
              </div>
              <input name="company" placeholder="Company (optional)" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-neon-600" />
              <textarea required name="message" placeholder="Tell us about your project" rows={5} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-neon-600" />
              <button type="submit" className="cta justify-center">Request demo</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

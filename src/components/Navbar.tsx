import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 glass flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="size-7 rounded-md bg-gradient-to-br from-neon-500 to-neon-700" />
            <span className="font-semibold tracking-tight">Axiom</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#solutions" className="hover:text-white transition">Solutions</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="cta">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  )
}

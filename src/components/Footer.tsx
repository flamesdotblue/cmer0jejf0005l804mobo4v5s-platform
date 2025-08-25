export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="size-6 rounded bg-gradient-to-br from-neon-500 to-neon-700" />
          <p className="text-sm text-white/70">© {new Date().getFullYear()} Axiom Technologies. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Careers</a>
        </div>
      </div>
    </footer>
  )
}

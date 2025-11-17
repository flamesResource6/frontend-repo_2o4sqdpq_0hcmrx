import React, { useState } from 'react'
import { Menu, X, Home, User, BookOpen, GraduationCap, Trophy, Info, FileText, History, Phone, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Registration', to: '/registration', icon: User },
  { label: 'Development', to: '/development', icon: GraduationCap },
  { label: 'Information', to: '/information', icon: BookOpen },
  { label: 'Learn to Play', to: '/learn-to-play', icon: Users },
  { label: 'Tournaments', to: '/tournaments', icon: Trophy },
  { label: 'About', to: '/about', icon: Info },
  { label: 'Policies', to: '/policies', icon: FileText },
  { label: 'History', to: '/history', icon: History },
  { label: 'Contact', to: '/contact', icon: Phone },
]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 bg-slate-950/90 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Cloverdale Minor Hockey Association home">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-500 to-blue-600 grid place-items-center font-black text-white">CM</div>
          <div className="leading-tight">
            <div className="font-bold tracking-tight">Cloverdale Minor Hockey</div>
            <div className="text-xs text-slate-300">Est. 1974</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {navItems.map(({ label, to }) => (
            <Link key={to} to={to} className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">{label}</Link>
          ))}
        </nav>

        <button className="md:hidden p-2 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10" role="dialog" aria-label="Mobile menu">
          <div className="px-4 py-2 grid">
            {navItems.map(({ label, to, icon: Icon }) => (
              <Link key={to} to={to} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 text-sm" onClick={() => setOpen(false)}>
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav

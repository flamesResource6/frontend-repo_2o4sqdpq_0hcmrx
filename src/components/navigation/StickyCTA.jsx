import React from 'react'
import { UserPlus, Trophy, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function StickyCTA() {
  return (
    <div className="fixed md:hidden bottom-0 inset-x-0 z-50 bg-slate-900/95 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-3">
        <Link to="/registration" className="flex flex-col items-center gap-1 py-3 text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
          <UserPlus className="w-5 h-5" />
          <span className="text-xs font-medium">Register</span>
        </Link>
        <Link to="/tournaments" className="flex flex-col items-center gap-1 py-3 text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
          <Trophy className="w-5 h-5" />
          <span className="text-xs font-medium">Tournaments</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 py-3 text-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">Contact</span>
        </Link>
      </div>
    </div>
  )
}

export default StickyCTA

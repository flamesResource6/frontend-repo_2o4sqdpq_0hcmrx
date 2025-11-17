import React from 'react'
import { Facebook, Instagram, Mail, MapPin } from 'lucide-react'

function Footer(){
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-500 to-blue-600 grid place-items-center font-black text-white">CM</div>
            <div>
              <div className="font-semibold">Cloverdale Minor Hockey</div>
              <div className="text-xs text-slate-400">Surrey, British Columbia</div>
            </div>
          </div>
          <p className="text-sm text-slate-300/80">Building community through hockey since 1974. We focus on player development, sportsmanship, and fun.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-slate-300/90">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> info@cloverdaleminorhockey.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Cloverdale, Surrey BC</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Follow</div>
          <div className="flex gap-3 text-slate-300">
            <a href="#" aria-label="Facebook" className="p-2 rounded-lg hover:bg-white/5"><Facebook className="w-5 h-5"/></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-lg hover:bg-white/5"><Instagram className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">© {new Date().getFullYear()} Cloverdale Minor Hockey Association</div>
    </footer>
  )
}

export default Footer

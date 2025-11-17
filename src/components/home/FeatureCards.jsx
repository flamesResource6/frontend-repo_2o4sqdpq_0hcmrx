import React from 'react'
import { CalendarDays, FileText, Megaphone, MapPin, Shield, ArrowRight, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

const cards = [
  {
    title: 'Register for 2025–26',
    desc: 'Step-by-step guidance for new and returning families.',
    to: '/registration',
    icon: FileText,
  },
  {
    title: 'Tournaments',
    desc: 'Dates, divisions, and application details.',
    to: '/tournaments',
    icon: Trophy,
  },
  {
    title: 'Events & Notices',
    desc: 'Important dates, camps, and association news.',
    to: '/information/notice-of-events',
    icon: CalendarDays,
  },
]

function FeatureCards(){
  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-4">
        {cards.map(({ title, desc, to, icon: Icon }) => (
          <Link key={to} to={to} className="group rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/80 p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 grid place-items-center rounded-lg bg-white/5">
                  <Icon className="w-5 h-5"/>
                </div>
                <div className="font-semibold">{title}</div>
              </div>
              <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"/>
            </div>
            <p className="text-sm text-slate-300/80 mt-2">{desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default FeatureCards

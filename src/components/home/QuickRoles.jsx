import React from 'react'
import { Users, UserPlus, Shield, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

const items = [
  {
    title: 'New Families',
    desc: 'Start here to join CMHA. Steps, documents, and timelines.',
    to: '/registration/new-players',
    color: 'from-cyan-400 to-sky-500',
    icon: UserPlus,
  },
  {
    title: 'Returning Players',
    desc: 'Renew your spot and review fees and key dates.',
    to: '/registration/returning-players',
    color: 'from-emerald-400 to-teal-500',
    icon: Users,
  },
  {
    title: 'Coaches & Team Staff',
    desc: 'Qualifications, practice plans, risk management.',
    to: '/information/coaches',
    color: 'from-indigo-400 to-blue-500',
    icon: Shield,
  },
  {
    title: 'Volunteers & Officials',
    desc: 'Signups, requirements, and training.',
    to: '/information/volunteer-policy',
    color: 'from-amber-400 to-orange-500',
    icon: Trophy,
  }
]

function QuickRoles(){
  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Start by choosing your path</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {items.map(({ title, desc, to, color, icon: Icon }) => (
            <Link key={to} to={to} className="group rounded-xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/80 p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} grid place-items-center text-slate-900 font-black mb-3`} aria-hidden="true">{title[0]}</div>
              <div className="font-semibold text-sm">{title}</div>
              <p className="text-xs text-slate-300/80 mt-1">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QuickRoles

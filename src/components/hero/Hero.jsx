import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Trophy, UserPlus, BookOpen } from 'lucide-react'

function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1200px_circle_at_70%_-10%,#22d3ee,transparent_40%),radial-gradient(1000px_circle_at_0%_0%,#60a5fa,transparent_40%)]" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">Cloverdale Minor Hockey</h1>
            <p className="mt-3 text-slate-300 max-w-prose">Welcome to CMHA — where players grow, families connect, and hockey is for everyone. Find everything you need to register, train, and play.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/registration" className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-slate-900">
                <UserPlus className="w-4 h-4"/> Register
              </Link>
              <Link to="/tournaments" className="inline-flex items-center gap-2 border border-white/10 hover:bg-white/5 px-5 py-3 rounded-lg">
                <Trophy className="w-4 h-4"/> Tournaments
              </Link>
              <Link to="/information" className="inline-flex items-center gap-2 border border-white/10 hover:bg-white/5 px-5 py-3 rounded-lg">
                <BookOpen className="w-4 h-4"/> For Parents
              </Link>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-1">
              <img src="https://images.unsplash.com/photo-1706844587140-9c58f98b030c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxZb3V0aCUyMGhvY2tleSUyMHBsYXllcnMlMjBpbnxlbnwwfDB8fHwxNzYzNDIzNjA4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Youth hockey players in action on the ice" className="w-full h-full object-cover rounded-xl"/>
            </div>
            <p className="sr-only">Action photography of youth hockey to reflect CMHA culture.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'

function Section({ title, intro, children }){
  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {title && <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">{title}</h1>}
        {intro && <p className="text-slate-300 max-w-prose mb-6">{intro}</p>}
        <div className="grid gap-6">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section

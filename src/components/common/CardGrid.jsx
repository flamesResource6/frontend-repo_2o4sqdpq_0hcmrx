import React from 'react'

function CardGrid({ items = [] }){
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <article key={idx} className="rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/80 p-5">
          {item.tag && <div className="text-xxs text-[10px] inline-block px-2 py-0.5 rounded-full bg-white/10 text-slate-300 mb-2">{item.tag}</div>}
          <h3 className="font-semibold text-lg leading-tight">{item.title}</h3>
          {item.subtitle && <p className="text-sm text-slate-300/80">{item.subtitle}</p>}
          {item.body && <p className="text-sm text-slate-300/90 mt-2">{item.body}</p>}
          {item.cta && <a href={item.cta.href} className="mt-3 inline-flex text-sm text-cyan-300 hover:text-cyan-200 underline underline-offset-4">{item.cta.label}</a>}
        </article>
      ))}
    </div>
  )
}

export default CardGrid

import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/sections/Section'

function Bullet({ children }){
  return (
    <li className="flex gap-3">
      <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-cyan-400" aria-hidden="true"></span>
      <span className="text-slate-200/90 text-sm">{children}</span>
    </li>
  )
}

function GenericPage({ title, intro, bullets = [], ctas = [] }){
  return (
    <Layout>
      <Section title={title} intro={intro}>
        {bullets.length > 0 && (
          <ul className="grid gap-2 max-w-3xl">
            {bullets.map((b, i) => (
              <Bullet key={i}>{b}</Bullet>
            ))}
          </ul>
        )}
        {ctas.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4">
            {ctas.map((c, i) => (
              <a key={i} href={c.href} className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-slate-900">
                {c.label}
              </a>
            ))}
          </div>
        )}
      </Section>
    </Layout>
  )
}

export default GenericPage

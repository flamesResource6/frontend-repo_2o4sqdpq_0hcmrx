import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/sections/Section'
import CardGrid from '../components/common/CardGrid'

const tournaments = [
  { title: 'U18 Memorial', body: 'Premier competition honoring our community legacy.', cta: { href: '/tournaments/u18-memorial', label: 'Details' } },
  { title: 'U13 & U15 Ice Crusher', body: 'Fast-paced hockey with teams across BC.', cta: { href: '/tournaments/ice-crusher', label: 'Details' } },
  { title: 'U11 Paul Bennett', body: 'Development-first tournament celebrating fair play.', cta: { href: '/tournaments/paul-bennett', label: 'Details' } },
  { title: 'U7 & U9 Friendship', body: 'Fun-first weekend for our youngest players.', cta: { href: '/tournaments/friendship', label: 'Details' } },
  { title: 'U21 Holiday Rush', body: 'High-energy winter tournament for U21.', cta: { href: '/tournaments/holiday-rush', label: 'Details' } },
  { title: 'U18 Cloverdale Cup', body: 'Competitive year-end showdown.', cta: { href: '/tournaments/cloverdale-cup', label: 'Details' } },
]

function Tournaments(){
  return (
    <Layout>
      <Section title="Tournaments" intro="Explore divisions, dates, schedules, and application links.">
        <CardGrid items={tournaments} />
      </Section>
    </Layout>
  )
}

export default Tournaments

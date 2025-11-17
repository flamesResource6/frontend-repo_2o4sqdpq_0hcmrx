import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/sections/Section'
import CardGrid from '../components/common/CardGrid'

const items = [
  { title: 'U7–U9 In Season', body: 'Skill progressions, schedules, and session plans.', cta: { href: '/development/u7-u9-in-season', label: 'Open' } },
  { title: 'In-Season Goalie Development', body: 'Specialized coaching and clinics for goalies.', cta: { href: '/development/goalie', label: 'Open' } },
  { title: 'U11C–U15C In Season', body: 'Practice structures and development goals.', cta: { href: '/development/u11c-u15c', label: 'Open' } },
  { title: 'Fall & Winter Development', body: 'Camps and clinics to level up your game.', cta: { href: '/development/fall-winter', label: 'Open' } },
]

function Development(){
  return (
    <Layout>
      <Section title="Development" intro="Coaching structure and resources across divisions.">
        <CardGrid items={items} />
      </Section>
    </Layout>
  )
}

export default Development

import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/sections/Section'
import CardGrid from '../components/common/CardGrid'

const parentItems = [
  { title: 'For Parents', body: 'Orientation, expectations, and how to support your player.', cta: { href: '/information/for-parents', label: 'Open' } },
  { title: 'Notice of Events', body: 'Key association dates, meetings, and upcoming camps.', cta: { href: '/information/notice-of-events', label: 'See notices' } },
  { title: 'Diversity & Inclusion', body: 'Hockey is for everyone. Our commitment and resources.', cta: { href: '/information/diversity-inclusion', label: 'Read' } },
  { title: 'Equipment & Jerseys', body: 'Sizing, required gear, and jersey pick-up details.', cta: { href: '/information/equipment-jerseys', label: 'Guide' } },
  { title: 'U7 & U9 Hockey', body: 'Format, ice times, and what to expect for young players.', cta: { href: '/information/u7-u9', label: 'Learn more' } },
  { title: 'U11 Pathway', body: 'Development approach and gameplay progression.', cta: { href: '/information/u11-pathway', label: 'Learn more' } },
  { title: 'Parent Sportsmanship', body: 'Create a positive rink environment.', cta: { href: '/information/parent-sportsmanship', label: 'Read' } },
  { title: 'Team Store', body: 'CMHA apparel and merchandise.', cta: { href: '/information/team-store', label: 'Shop' } },
  { title: 'Volunteer Policy', body: 'Requirements and how credits work.', cta: { href: '/policies/volunteer-policy', label: 'Policy' } },
  { title: 'Volunteer Signups', body: 'Find roles for upcoming events and tournaments.', cta: { href: '/information/volunteer-signups', label: 'Sign up' } },
  { title: 'For Coaches & Team Officials', body: 'Qualifications, practice plans, and resources.', cta: { href: '/information/coaches', label: 'Open' } },
  { title: 'Ref’s Circle', body: 'Resources and updates for on-ice officials.', cta: { href: '/information/refs-circle', label: 'Open' } },
]

function Information(){
  return (
    <Layout>
      <Section title="Information" intro="Clear, scannable guides for families, coaches, and officials.">
        <CardGrid items={parentItems} />
      </Section>
    </Layout>
  )
}

export default Information

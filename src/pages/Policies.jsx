import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/sections/Section'
import CardGrid from '../components/common/CardGrid'

const items = [
  { title: 'Policies Overview', cta: { href: '/policies/overview', label: 'Open' } },
  { title: 'Bylaws', cta: { href: '/policies/bylaws', label: 'Read' } },
  { title: 'Code of Conduct', cta: { href: '/policies/code-of-conduct', label: 'Read' } },
  { title: 'Operating Policies', cta: { href: '/policies/operating-policies', label: 'Read' } },
  { title: 'Rep Policies', cta: { href: '/policies/rep-policies', label: 'Read' } },
  { title: 'Scholarships', cta: { href: '/policies/scholarships', label: 'Apply' } },
  { title: 'Volunteer Policy', cta: { href: '/policies/volunteer-policy', label: 'Read' } },
]

function Policies(){
  return (
    <Layout>
      <Section title="Policies" intro="Clear, accessible policies that guide our association.">
        <CardGrid items={items} />
      </Section>
    </Layout>
  )
}

export default Policies

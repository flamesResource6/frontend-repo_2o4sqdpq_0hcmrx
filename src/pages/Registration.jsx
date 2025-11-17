import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/sections/Section'
import CardGrid from '../components/common/CardGrid'

const items = [
  { title: 'Returning Players', body: 'Renew your spot in minutes. Review key dates and fees, then complete online registration.', cta: { href: '/registration/returning-players', label: 'Start' } },
  { title: 'New Players', body: 'Step-by-step onboarding for first-time CMHA families. Documents, age divisions, and timelines.', cta: { href: '/registration/new-players', label: 'Start' } },
  { title: 'Player Transfers', body: 'Moving associations? Follow the checklist and required forms for transfers.', cta: { href: '/registration/player-transfers', label: 'View guide' } },
  { title: 'Fees & Payments', body: 'Simple breakdown of costs by division with payment plans and deadlines.', cta: { href: '/registration/fees', label: 'View fees' } },
  { title: 'Financial Aid', body: 'We believe hockey should be accessible. Explore subsidies and support options.', cta: { href: '/registration/financial-aid', label: 'Get support' } },
  { title: 'Refund Policy', body: 'Clear, fair refund process based on timing and circumstances.', cta: { href: '/registration/refund-policy', label: 'Read policy' } },
  { title: 'Address Zone', body: 'Check your address to confirm CMHA eligibility.', cta: { href: '/registration/address-zone', label: 'Check address' } },
  { title: 'Registration Contacts', body: 'Direct emails for registration questions and assistance.', cta: { href: '/registration/contacts', label: 'Contact' } },
]

function Registration(){
  return (
    <Layout>
      <Section title="Registration" intro="Everything you need to register with CMHA. Choose your path to get started.">
        <CardGrid items={items} />
      </Section>
    </Layout>
  )
}

export default Registration

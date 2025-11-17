import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/sections/Section'

function History(){
  return (
    <Layout>
      <Section title="History" intro="Celebrating 50+ years of the Cloverdale Colts — milestones, alumni, and community moments.">
        <div className="prose prose-invert max-w-none">
          <h2>50 Years of the Colts!</h2>
          <p>From humble beginnings to a thriving community program, our history is built by volunteers and families.</p>
          <h2>Highlights</h2>
          <ul>
            <li>50th Anniversary Coaches Game</li>
            <li>Alumni features — Magnuson & Reimer</li>
            <li>Paul Bennett legacy and U11 tournament</li>
            <li>Association awards and Stanley Cup visits</li>
          </ul>
        </div>
      </Section>
    </Layout>
  )
}

export default History

import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/sections/Section'

function About(){
  return (
    <Layout>
      <Section title="About CMHA" intro="We are a volunteer-driven association supporting youth hockey in Cloverdale, Surrey, since 1974.">
        <div className="prose prose-invert max-w-none">
          <h2>Mission</h2>
          <p>To develop players and people through sport — emphasizing skill, respect, and community.</p>
          <h2>Director of Hockey</h2>
          <p>Our Director oversees development programming, coaching standards, and player pathways.</p>
          <h2>Executive & Committee Contacts</h2>
          <ul>
            <li>President — president@cmha.ca</li>
            <li>Registrar — registrar@cmha.ca</li>
            <li>Tournament Director — tournaments@cmha.ca</li>
          </ul>
        </div>
      </Section>
    </Layout>
  )
}

export default About

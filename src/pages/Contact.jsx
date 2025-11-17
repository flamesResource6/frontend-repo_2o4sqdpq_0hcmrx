import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/sections/Section'

function Contact(){
  return (
    <Layout>
      <Section title="Contact Us" intro="We’re here to help. Reach out and we’ll route your request to the right volunteer.">
        <form className="grid gap-4 max-w-xl">
          <label className="grid gap-1">
            <span className="text-sm">Name</span>
            <input className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2" placeholder="Your name" aria-label="Your name"/>
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Email</span>
            <input type="email" className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2" placeholder="you@example.com" aria-label="Your email"/>
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Message</span>
            <textarea className="bg-slate-900 border border-white/10 rounded-lg px-3 py-2" rows="5" placeholder="How can we help?" aria-label="Your message"/>
          </label>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-3 rounded-lg w-full sm:w-auto">Send</button>
        </form>
      </Section>
    </Layout>
  )
}

export default Contact

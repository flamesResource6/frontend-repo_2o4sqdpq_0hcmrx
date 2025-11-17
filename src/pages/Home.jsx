import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/hero/Hero'
import QuickRoles from '../components/home/QuickRoles'
import FeatureCards from '../components/home/FeatureCards'

function Home(){
  return (
    <Layout>
      <Hero />
      <QuickRoles />
      <FeatureCards />
    </Layout>
  )
}

export default Home

import React from 'react'
import AnnouncementsBar from './announcements/AnnouncementsBar'
import Nav from './navigation/Nav'
import StickyCTA from './navigation/StickyCTA'
import Footer from './navigation/Footer'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <AnnouncementsBar />
      <Nav />
      <main id="main-content" className="pt-20 pb-28 sm:pb-16">
        {children}
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}

export default Layout

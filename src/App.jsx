import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Registration from './pages/Registration'
import Development from './pages/Development'
import Information from './pages/Information'
import Tournaments from './pages/Tournaments'
import About from './pages/About'
import Policies from './pages/Policies'
import History from './pages/History'
import Contact from './pages/Contact'
import GenericPage from './pages/GenericPage'

function App(){
  return (
    <Routes>
      <Route index element={<Home />} />

      {/* Registration */}
      <Route path="registration" element={<Registration />} />
      <Route path="registration/returning-players" element={<GenericPage title="Returning Players" intro="Renew your spot for the upcoming season in a few quick steps." bullets={["Log in to your account.", "Confirm player details and age division.", "Select payment plan and submit.", "Watch for confirmation email within 24 hours."]} ctas={[{ href: '#', label: 'Start Registration' }]} />} />
      <Route path="registration/new-players" element={<GenericPage title="New Players" intro="Welcome to CMHA! Follow this checklist to join our community." bullets={["Gather required documents (birth certificate, proof of address).", "Create your account and add your player.", "Choose division and program.", "Complete payment."]} ctas={[{ href: '#', label: 'Create Account' }]} />} />
      <Route path="registration/player-transfers" element={<GenericPage title="Player Transfers" intro="Moving associations? Here’s how to transfer to CMHA." bullets={["Contact your current association to initiate release.", "Prepare proof of address within CMHA boundaries.", "Submit transfer form and wait for confirmation."]} />} />
      <Route path="registration/fees" element={<GenericPage title="Fees & Payments" intro="Simple breakdown of costs by division with payment plans and deadlines." bullets={["U7-U9: $XXX", "U11: $XXX", "U13-U15: $XXX", "Payment plan: Monthly options available."]} />} />
      <Route path="registration/financial-aid" element={<GenericPage title="Financial Aid" intro="We believe hockey should be accessible. Explore subsidies and support options." bullets={["KidsSport and Jumpstart programs.", "CMHA subsidy fund.", "Confidential support — contact registrar."]} ctas={[{ href: '#', label: 'Apply for Aid' }]} />} />
      <Route path="registration/refund-policy" element={<GenericPage title="Refund Policy" intro="Clear, fair refund process based on timing and circumstances." bullets={["Full refund before evaluations.", "Pro-rated after season start.", "Processing fee may apply."]} />} />
      <Route path="registration/address-zone" element={<GenericPage title="Address Zone" intro="Check your address to confirm CMHA eligibility." bullets={["Enter your postal code to verify.", "Boundary map available for reference."]} ctas={[{ href: '#', label: 'Check Address' }]} />} />
      <Route path="registration/contacts" element={<GenericPage title="Registration Contacts" intro="Direct emails for registration questions and assistance." bullets={["Registrar — registrar@cmha.ca", "Assistant Registrar — assist@cmha.ca"]} />} />

      {/* Development */}
      <Route path="development" element={<Development />} />
      <Route path="development/u7-u9-in-season" element={<GenericPage title="U7–U9 In Season" intro="Skill progressions, schedules, and session plans." />} />
      <Route path="development/goalie" element={<GenericPage title="In-Season Goalie Development" intro="Specialized coaching and clinics for goalies." />} />
      <Route path="development/u11c-u15c" element={<GenericPage title="U11C–U15C In Season" intro="Practice structures and development goals." />} />
      <Route path="development/fall-winter" element={<GenericPage title="Fall & Winter Development" intro="Camps and clinics to level up your game." />} />

      {/* Information */}
      <Route path="information" element={<Information />} />
      <Route path="information/for-parents" element={<GenericPage title="For Parents" intro="Quick tips to make your season smooth and fun." />} />
      <Route path="information/notice-of-events" element={<GenericPage title="Notice of Events" intro="Key association dates and upcoming camps." />} />
      <Route path="information/diversity-inclusion" element={<GenericPage title="Diversity & Inclusion" intro="Hockey is for everyone. Our commitment and resources." />} />
      <Route path="information/equipment-jerseys" element={<GenericPage title="Equipment & Jerseys" intro="Sizing, required gear, and jersey pick-up details." />} />
      <Route path="information/u7-u9" element={<GenericPage title="U7 & U9 Hockey" intro="Format, ice times, and what to expect for young players." />} />
      <Route path="information/u11-pathway" element={<GenericPage title="U11 Pathway" intro="Development approach and gameplay progression." />} />
      <Route path="information/parent-sportsmanship" element={<GenericPage title="Parent Sportsmanship" intro="Create a positive rink environment." />} />
      <Route path="information/team-store" element={<GenericPage title="Team Store" intro="CMHA apparel and merchandise." />} />
      <Route path="information/volunteer-signups" element={<GenericPage title="Volunteer Signups" intro="Find roles for upcoming events and tournaments." />} />
      <Route path="information/coaches" element={<GenericPage title="For Coaches & Team Officials" intro="Qualifications, practice plans, and resources." />} />
      <Route path="information/refs-circle" element={<GenericPage title="Ref’s Circle" intro="Resources and updates for on-ice officials." />} />

      {/* Learn to Play */}
      <Route path="learn-to-play" element={<GenericPage title="Learn to Play" intro="First Shift (Canucks / Indigenous Programs)." />} />

      {/* Tournaments */}
      <Route path="tournaments" element={<Tournaments />} />
      <Route path="tournaments/u18-memorial" element={<GenericPage title="U18 Memorial" intro="Premier competition honoring our community legacy." />} />
      <Route path="tournaments/ice-crusher" element={<GenericPage title="U13 & U15 Ice Crusher" intro="Fast-paced hockey with teams across BC." />} />
      <Route path="tournaments/paul-bennett" element={<GenericPage title="U11 Paul Bennett" intro="Development-first tournament celebrating fair play." />} />
      <Route path="tournaments/friendship" element={<GenericPage title="U7 & U9 Friendship" intro="Fun-first weekend for our youngest players." />} />
      <Route path="tournaments/holiday-rush" element={<GenericPage title="U21 Holiday Rush" intro="High-energy winter tournament for U21." />} />
      <Route path="tournaments/cloverdale-cup" element={<GenericPage title="U18 Cloverdale Cup" intro="Competitive year-end showdown." />} />

      {/* About */}
      <Route path="about" element={<About />} />
      <Route path="about/executive-contacts" element={<GenericPage title="Executive & Committee Contacts" intro="Reach the right person fast." />} />
      <Route path="about/director-of-hockey" element={<GenericPage title="Director of Hockey" intro="Leadership for player development and coaching standards." />} />

      {/* Policies */}
      <Route path="policies" element={<Policies />} />
      <Route path="policies/overview" element={<GenericPage title="Policies Overview" intro="Master page for policies with quick links and highlights." />} />
      <Route path="policies/bylaws" element={<GenericPage title="Bylaws" intro="Association bylaws for governance and operations." />} />
      <Route path="policies/code-of-conduct" element={<GenericPage title="Code of Conduct" intro="Standards for players, parents, coaches, and officials." />} />
      <Route path="policies/operating-policies" element={<GenericPage title="Operating Policies" intro="Day-to-day procedures and guidelines." />} />
      <Route path="policies/rep-policies" element={<GenericPage title="Rep Policies" intro="Guidelines for representatives and competitive programs." />} />
      <Route path="policies/scholarships" element={<GenericPage title="Scholarships" intro="Application process and eligibility." />} />
      <Route path="policies/volunteer-policy" element={<GenericPage title="Volunteer Policy" intro="Requirements and how credits work." />} />

      {/* History */}
      <Route path="history" element={<History />} />
      <Route path="history/awards" element={<GenericPage title="Awards" intro="Recognizing outstanding contributions and achievements." />} />
      <Route path="history/award-winners" element={<GenericPage title="Award Winners" intro="Past recipients across categories." />} />
      <Route path="history/stanley-cup" element={<GenericPage title="Stanley Cup" intro="Memorable visits and stories." />} />
      <Route path="history/magnuson-reimer" element={<GenericPage title="Magnuson & Reimer" intro="Alumni stories and impact." />} />
      <Route path="history/paul-bennett" element={<GenericPage title="Paul Bennett" intro="Legacy and community impact." />} />
      <Route path="history/50-years" element={<GenericPage title="50 Years of the Colts!" intro="Milestones and community memories." />} />
      <Route path="history/50th-anniversary-coaches-game" element={<GenericPage title="50th Anniversary Coaches Game" intro="A celebration on ice." />} />

      {/* Contact */}
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}

export default App

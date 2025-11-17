import React from 'react'

function AnnouncementsBar(){
  return (
    <div role="region" aria-label="Announcements" className="w-full bg-gradient-to-r from-amber-500 via-red-500 to-rose-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-2 text-sm flex items-center justify-between gap-4">
        <p className="font-medium">Weather update: All rinks open. Tournament spots filling fast — register today.</p>
        <a href="/tournaments" className="underline underline-offset-2 font-semibold hidden sm:inline">View tournaments</a>
      </div>
    </div>
  )
}

export default AnnouncementsBar

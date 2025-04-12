import React from 'react'
import SideNav from './_components/SideNav'


function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 bg-white shadow-md border-r fixed h-full z-10">
        <SideNav />
      </aside>

      {/* Main content */}
      <main className="flex-1 md:ml-64 p-6">
        <div className="bg-white rounded-xl shadow-md p-6 min-h-screen">
          {children}
        </div>
      </main>

    </div>
  )
}

export default DashboardLayout

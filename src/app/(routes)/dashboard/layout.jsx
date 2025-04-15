'use client'
import React, {useEffect} from 'react'
import SideNav from './_components/SideNav'
import DashboardHeader from './_components/DashboardHeader'
import { db } from '../../../../utils/dbConfig'
import { Budgets } from '../../../../utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { redirect } from 'next/navigation'

function layout({children}) {
    const {user} = useUser();
    

    useEffect(()=>{
        user && checkUserBudgets()
    }, [user])

    const checkUserBudgets = async () => {
        const result = await db.select.from(Budgets).where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
        if(result?.length === 0){
            redirect('/dashboard/budgets')
        }
    }
  return (
    <div>
      <div className='fixed md:w-64 hidden md:block'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <DashboardHeader />
        {children}
      </div>
    </div>
  )
}

export default layout

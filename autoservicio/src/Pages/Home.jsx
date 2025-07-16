import React from 'react'
import { SideBar } from '../Components/SideBar'
import { Outlet } from 'react-router-dom'

export const Home = () => {
    return (
        <div className='flex'>
            <div><SideBar /></div>
            <main className='w-full h-full flex'><Outlet /></main>
        </div>
    )
}

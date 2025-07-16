import React from 'react'
import { Link } from 'react-router-dom'
import { GiShop } from "react-icons/gi";
import { CiShop } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
export const SideBar = () => {
    return (
        <div className="w-64 h-screen bg-sky-800 text-white flex flex-col">
            <div className='flex flex-col items-center'>
                <h1 className='text-[100px] text-center p-4'>
                    <CiShop />
                </h1>
            </div>
            <div>

                <Link to="clientes">
                    <button className='bg-sky-600 w-64 p-4 flex flex-row items-center justify-center text-[20px]'>  <FaUserFriends className='mr-4'/> Clientes</button>
                </Link>
                <Link to="productos">
                    <button className='bg-sky-600 w-64 p-4'>Productos</button>
                </Link>
                <Link to="ventas">
                    <button className='bg-sky-600 w-64 p-4'>Ventas</button>
                </Link>
            </div>
        </div>
    )
}

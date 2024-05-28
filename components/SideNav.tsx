
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { IoIosLogIn } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'

export default function SideNav() {
  return (
    <>
    <nav className="h-screen w-[280px] max-md:hidden grid-cols-1 grid grid-rows-[auto,1fr,auto] gap-0.5 ">
        <div className="p-3 flex justify-between items-center sticky top-0">
          <Link href={`/`}><h1 className="text-lg font-semibold">LOGO</h1></Link>
          <Button size={`sm`} className="rounded-lg bg-inherit text-black border shadow-sm">New Chat</Button>
        </div>

        {/* Chat history */}
        <div className="bg-gray-50 rounded p-3 overflow-y-auto">
            {/* Map through chats */}
          
        </div>

        <div className="flex flex-col gap-3 p-3 rounded bg-gray-50 font-normal text-md ">
          <div className="flex gap-1 items-center w-full px-1 py-2 group hover:bg-gray-200/80 rounded-md transition">
          <IoIosLogIn className="w-4 h-4"/>
            <h4>Login</h4>
          </div>
          <div className="flex gap-1 items-center px-1 py-2 group hover:bg-gray-200/80 rounded-md transition-all">
          <IoSettingsOutline className="h-4 w-4"/>
            <h4>Settings</h4>
          </div>
        </div>
      </nav>
    </>
  )
}

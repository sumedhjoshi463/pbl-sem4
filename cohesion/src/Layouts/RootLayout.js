import React from 'react'
import Sidebar from './Sidebar'

export default function RootLayout({ children }) {
    return (
        <div>
            
            <div className="flex gap-5">
                <Sidebar />
                <main className="max-w-5xl flex">{children}</main>
            </div>
           
        </div>
    );
}

import React from 'react'
import Sidebar from './Sidebar'
import Tasks from '../Tasks/Tasks'

export default function Content() {
    return (
        <section className="content">
            <Sidebar />
            <Tasks />
        </section>
    )
}

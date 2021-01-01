import React from 'react'
import Sidebar from './Sidebar'
import Tasks from '../Tasks/Tasks'

export default function Content() {
    return (
        <section>
            <Sidebar />
            <Tasks />
        </section>
    )
}

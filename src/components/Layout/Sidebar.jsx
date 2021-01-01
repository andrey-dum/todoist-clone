import React from 'react'

import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar,
  } from 'react-icons/fa';

  

export default function Sidebar() {
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li
                    data-testid="inbox"
                    className={'inbox'}
                >
                    <div>
                        <span>
                            <FaInbox />
                        </span>
                        <span>Inbox</span>
                    </div>
                    
                </li>
                <li
                    data-testid="today"
                    className={'today'}
                >
                    <div>
                        <span><FaRegCalendar /></span>
                        <span>Today</span>
                    </div> 
                </li>
                <li 
                    data-testid="next_7"
                    className={'next_7'}
                >
                    <div>
                        <span>
                            <FaRegCalendarAlt />
                        </span>
                        <span>Next 7 days</span>
                    </div>
                </li>
            </ul>

            <div className="sidebar__middle">
                <span>
                <FaChevronDown
                    className={''}
                />
                </span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar__projects">sidebar__projects</ul>

            Add Projects Comp! 
        
        </div>
    )
}

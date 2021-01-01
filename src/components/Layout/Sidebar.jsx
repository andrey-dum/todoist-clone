import React, {useState} from 'react'

import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar,
  } from 'react-icons/fa';
import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects/Projects';

  

export default function Sidebar() {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li
                    data-testid="inbox"
                    className={active === 'inbox' ? 'active' : undefined}
                >
                    <div
                        data-testid="inbox-action"
                        aria-label="Show inbox tasks"
                        tabIndex={0}
                        role="button"
                        onClick={() => {
                            setActive('inbox');
                            setSelectedProject('INBOX');
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setActive('inbox');
                                setSelectedProject('INBOX');
                            }
                        }}
                    >
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

            <ul className="sidebar__projects">{showProjects && <Projects />}</ul>

            {/* <Projects /> */}
        
        </div>
    )
}

import React, { useState } from 'react';
import { VscColorMode } from 'react-icons/vsc';
import PropTypes from 'prop-types';
import logo from '../../img/logo.png'
import { AddTask } from '../Tasks/AddTask';


export default function Header({ darkMode, setDarkMode }) {
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  

    return (
        <header className="header" data-testid="header">
            <nav className="header__nav">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add">
                            <button
                                data-testid="quick-add-task-action"
                                aria-label="Quick add task"
                                type="button"
                                onClick={() => {
                                setShowQuickAddTask(true);
                                setShouldShowMain(true);
                                }}
                            >
                                +
                            </button>
                        </li>
                        <li className="settings__darkmode">
                            <button
                                data-testid="dark-mode-action"
                                aria-label="Darkmode on/off"
                                type="button"
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                <VscColorMode />
                            </button>
                            
                        </li>
                    </ul>
                </div>
            </nav>

            <AddTask
                showAddTaskMain={false}
                shouldShowMain={shouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        </header>
    )
}

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired,
};
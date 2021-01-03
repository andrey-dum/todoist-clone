import React, { useState } from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import Content from './components/Layout/Content';
import Header from './components/Layout/Header';
import { ProjectsProvider, SelectedProjectProvider } from './context';


export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="app">
          <main
            data-testid="application"
            className={darkMode ? 'darkmode' : undefined}
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Content />
          </main>
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}


App.propTypes = {
  darkModeDefault: PropTypes.bool,
};

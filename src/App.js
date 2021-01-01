import './App.scss';
import Content from './components/Layout/Content';
import Header from './components/Layout/Header';
import { ProjectsProvider, SelectedProjectProvider } from './context';


export const App = () => {

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="app">
          <Header />
        
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;

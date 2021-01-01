

import './App.scss';
import Content from './components/Layout/Content';
import Header from './components/Layout/Header';
import { useTasks } from './hooks';

export const App = () => {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div className="app">
      <Header />
    
      <Content />
    </div>
  );
}

export default App;

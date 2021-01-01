import './App.scss';
import Content from './components/Layout/Content';
import Header from './components/Layout/Header';


export const App = () => {

  return (
    <div className="app">
      <Header />
    
      <Content />
    </div>
  );
}

export default App;

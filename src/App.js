import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks';

const App = () => {
  return (
    <div className="App" className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;

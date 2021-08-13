import './App.css';
import { Counter } from './Counter';
import { GetMovieList } from './FetchApi';

function App() {
  return (
    <div className="App">
      <GetMovieList year='2015'/>

      <Counter/>
    </div>
  );
}

export default App;

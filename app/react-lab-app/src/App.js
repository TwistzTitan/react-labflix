import Header from './components/Header';
import { MovieContainer } from './styles/MovieContainer';
import './App.css';
import { MoviesList } from './components/MoviesList';
import { HeaderContainer } from './styles/HeaderContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MovieContainer>
        <MoviesList movies={[]}/>
      </MovieContainer>
    </div>
  );
}

export default App;

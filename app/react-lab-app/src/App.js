import Header from './components/Header';
import { MovieContainer } from './styles/MovieContainer';
import './App.css';
import { MoviesList } from './components/MoviesList';
import { HeaderContainer } from './styles/HeaderContainer';
import { MoviesService } from './api/MoviesService';

function App() {
  
  const [movies, setMovies] = useState([]);
  
  const fetchMovies = async () => {
     const data =  await MoviesService.getMovies();
     setMovies(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
    <div className="App">
      <Header/>
      <MovieContainer>
        <MoviesList movies={movies}/>
      </MovieContainer>
    </div>
  );
}

export default App;

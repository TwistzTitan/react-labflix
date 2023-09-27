import { MovieItem } from "./MovieItem"

export const MoviesList = ({movies}) => {
    return (
        <section>
            <ul>
                {movies.map(movie => (
                    <MovieItem key={movie.id} title={movie.title}/>
                ))}
            </ul>
        </section>
    )
}
import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";
import Like from './like';
import Nav from './Nav';
import { paginate } from './utils/paginate';
import ListGroup from './listGroup'
import { getGenres } from "./services/fakeGenreService";

class Movies extends Component {
state = {
movies: [],
genres: [],
color: 'pink',
pageSize: 4,
currentPage: 1
};

componentDidMount() {
  const genres = [{name: 'All Ganres'},...getGenres()]
  console.log(genres, "genres");
  this.setState({movies: getMovies(), genres });
}

handleLike = (movie) => {
const movies = [...this.state.movies];
console.log("movies", movies);
const index = movies.indexOf(movie);
console.log(index);
let ano = movies[index] = {...movies[index]};
console.log(ano);
movies[index].liked = !movies[index].liked;
  console.log("clicked on me", movie);
  this.setState({ movies});
}

handleDelete = (movie) => {
const movies = this.state.movies.filter(m => m._id !== movie._id);
this.setState({movies: movies});
};



handlePageChange = page => {
  this.setState({currentPage: page})
};

handleGenreSelect = genre => {
  this.setState({selectedGenre: genre, currentPage: 1})
}

render() {
  const { length: count } = this.state.movies;
  const { pageSize, currentPage, selectedGenre, movies: allMovies } = this.state;

  const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m=> m.genre._id === selectedGenre._id) : allMovies;
  const movies = paginate(filtered, currentPage, pageSize);
  return (
    <div className="row">
      <div className="col-3"><ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect}/></div>
      <div className="col">
  <table className="table">
<thead>
<tr>
<th>Title </th>
<th> Genre</th>
<th> Stock</th>
<th> Rate</th>
<th> </th>
<th> Like</th>
</tr>
</thead>
<tbody>
{movies.map(movie => (


  <tr key={movie._id}>
    <td>{movie.title}</td>
  <td>{movie.genre.name}</td>
  <td>{movie.numberInStock}</td>
  <td>{movie.dailyRentalRate}</td>
  <td> <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm"> Delete </button></td>
<td> <Like liked={movie.liked} style={{backgroundColor: this.state.color}} onClick ={() => this.handleLike(movie)}/> </td>

   </tr>
 ))}

</tbody>
  </table>
  <Nav itemsCount={filtered.length} pageSize={pageSize} currentPage= {currentPage} onPageChange={this.handlePageChange} /></div>

  </div>
    );
  }
}
export default Movies;

import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import { getMovies } from "./services/fakeMovieService";
import Nav from './Nav';
import { paginate } from './utils/paginate';
import ListGroup from './listGroup'
import { getGenres } from "./services/fakeGenreService";
import _ from 'lodash';


class Movies extends Component {
state = {
movies: [],
genres: [],
color: 'pink',
pageSize: 4,
currentPage: 1,
sortColumn: { path: 'title', order: 'asc'}
};

componentDidMount() {
  const genres = [{_id: "", name: 'All Ganres'},...getGenres()]
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

handleSort = sortColumn => {
this.setState({ sortColumn });
}


render() {
  const { length: count } = this.state.movies;
  const { pageSize, currentPage, selectedGenre, movies: allMovies, sortColumn } = this.state;

  const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m=> m.genre._id === selectedGenre._id) : allMovies;

 const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const movies = paginate(sorted, currentPage, pageSize);
  return (
    <div className="row">
      <div className="col-3"><ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect}/></div>
      <div className="col">
  <MoviesTable movies={movies} sortColumn={sortColumn} onLike={this.handleLike} onDelete={this.handleDelete} onSort={this.handleSort}/>
  <Nav itemsCount={filtered.length} pageSize={pageSize} currentPage= {currentPage} onPageChange={this.handlePageChange} /></div>

  </div>
    );
  }
}
export default Movies;

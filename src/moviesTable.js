import React, { Component } from 'react';
import Like from './like';
import Table from './table';


// const x = <Like> </Like>; //React Element like component is a js object and we can use it as value of prop. we can then add a prop to columns table

class MoviesTable extends Component {
  columns = [
    {path: 'title', label: 'Title'},
    {path: 'genre.name', label: 'Genre'},
    {path: 'numberInStock', label: 'Stock'},
    {path: 'dailyRentalRate', label: 'Rate'},
    {key: "like",
    content: movie => <Like liked={movie.liked} onClick ={() => this.props.onLike(movie)}/>
  },
    {key: "delete",
    content: movie => (
      <button onClick={() => this.props.onDelete(movie)}
      className="btn btn-danger btn-sm"> Delete </button>

    )
  }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

      return (
        <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
  );
  }

}




export default MoviesTable;

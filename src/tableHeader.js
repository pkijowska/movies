import React, {Component } from 'react';
//Interface of a new table component( we need in case we add e.g customer!)
// columns: array we need to pass to moviesTable all of it
//sortColumn: obj
//onSort: function
class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = {...this.props.sortColumn};
    console.log(sortColumn);
    if (sortColumn.path === path) sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
  else {
    sortColumn.path = path;
    sortColumn.order = 'asc';
}
this.props.onSort(sortColumn);
};

renderSortIcon = column => {
  const { sortColumn } = this.props;
  if (column.path !== sortColumn.path) return null; //see if different from current sort column
  if (sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
  return <i className="fa fa-sort-desc"></i>;
};

  render() {

    return(
       <thead>
      <tr>
      {this.props.columns.map(column => (
        <th key={column.path || column.key } onClick = {() => this.raiseSort(column.path)}> {column.label} {this.renderSortIcon(column)}</th>
      ))}
      </tr>
      </thead>

    );
  }
}
export default TableHeader;

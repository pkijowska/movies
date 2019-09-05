import React from 'react';

const movieForm = ({match, history}) => {
  return (
  <div>
   <h1> Movie form {match.params.id} </h1>
   <button className="btn btn-primary" onClick={() => history.push('/Movies')}> Save</button>
   </div>
 );
};

export default movieForm;

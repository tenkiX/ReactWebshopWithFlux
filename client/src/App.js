import React from 'react';
import './App.scss';
import StoreList from "./components/StoreList";
import CategoryList from "./components/CategoryList";
import RatingList from "./components/RatingList";
import MovieActions from "./actions/MovieActions";

function App() {
  return (
    <div className="App container-fluid">
        <div className="row">
        <div className="col-md-1"/>
        <div className="col-md-4" id="menuContentPanel">
            <StoreList/>
            <CategoryList/>
            <RatingList/>
            <button className="btn btn-warning" onClick={()=>{MovieActions.showMovieForm()}}>Add Movie</button>
        </div>
        <div className="col-md-6" id="mainContentPanel">

        </div>
        <div className="col-md-1"/>
        </div>
    </div>
  );
}

export default App;

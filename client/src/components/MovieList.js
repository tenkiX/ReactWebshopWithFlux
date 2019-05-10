import React from 'react'
import MovieActions from "../actions/MovieActions";
import MovieStore from "../store/MovieStore";

class MovieList extends React.Component{

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = { movies : MovieStore._queriedMovies};
    }

    _onChange(){
        this.setState({movies : MovieStore._queriedMovies});
    }

    componentDidMount(){
        MovieStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        MovieStore.removeChangeListener(this._onChange)
    }

    render(){
        return (
            <div className="row">
                <div className="col-12">
                    <ul className="list-group">
                        {this.state.movies.map((movie)=>{
                            return(
                                <li
                                    key={movie._id}
                                    className="list-group-item"
                                    onClick={()=>{ MovieActions.showMovieInformation(movie._id)}}
                                >{movie['Title']}</li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default MovieList;
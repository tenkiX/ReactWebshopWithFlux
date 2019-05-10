import React from 'react'
import MovieActions from '../actions/MovieActions'
import MovieStore from '../store/MovieStore'

class RatingList extends  React.Component{

    constructor(props) {
        super(props);
        MovieActions.fetchRatings()
        this._onChange = this._onChange.bind(this);
        this.state = { ratings : MovieStore._ratings};
    }

    _onChange(){
        this.setState({ratings: MovieStore._ratings});
    }

    componentDidMount(){
        MovieStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        MovieStore.removeChangeListener(this._onChange)
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">Ratings</div>
                <div className="card-body">
                        {this.state.ratings.map((rating)=>{
                            return(
                                <span
                                    key={rating}
                                    onClick={()=>{
                                        MovieActions.listMovies(undefined,rating)
                                    }}
                                >
                                    <i className="font-italic, badge-info badge-pill">{rating}</i>
                                    <span> </span>
                                </span>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default RatingList;
import React from 'react'
import actorStore from "../store/ActorStore";
import MovieActions from "../actions/MovieActions";

class ActorInformationPanel extends React.Component{

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {actor : null}
    }

    _onChange(){
        this.setState({actor : actorStore._actor})
    }

    componentDidMount(){
        actorStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        actorStore.removeChangeListener(this._onChange)
    }


    render(){
        if(this.state.actor === null){
            return (<p>Loading</p>)
        }
        return (
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <span className="text-capitalize">
                                {this.state.actor['First name'].toLowerCase()}<span> </span>
                                {this.state.actor['Last name'].toLowerCase()}
                            </span>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                {this.state.actor.movies.map((movie)=>{
                                    return (
                                        <li key={movie['_id']}
                                            onClick={()=>{
                                                MovieActions.showMovieInformation(movie['_id'])
                                            }}
                                            className="list-group-item">
                                            {movie['Title']}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            );
    }

}

export default ActorInformationPanel
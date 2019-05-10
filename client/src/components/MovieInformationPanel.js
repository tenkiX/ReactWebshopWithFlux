import React from 'react'
import movieStore from '../store/MovieStore'
import ActorActions from "../actions/ActorActions";
import MovieActions from "../actions/MovieActions";

class MovieInformationPanel extends React.Component{

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = { movie: null };
    }

    _onChange(){
        this.setState({movie : movieStore._selectedMovie});
    }

    componentDidMount(){
        movieStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        movieStore.removeChangeListener(this._onChange)
    }

    render(){
        if(this.state.movie === null){
            return (<p>Loading</p>)
        }
        return (
            <>
            <div className="row">
                <div className="col-12">
                    <p>
                        {this.state.movie['Title']}
                        <span
                            className="float-right badge-info"
                            onClick={()=>{MovieActions.listMovies(undefined, this.state.movie['Rating]'])}}>
                            {this.state.movie['Rating']}
                        </span>
                    </p>
                </div>
            </div>
                <div className="row">
                    <div className="col-12">
                        <p>
                            {this.state.movie['Length']} mins,<span> </span>
                            <span onClick={()=> MovieActions.listMovies(this.state.movie['Category'])}>
                                {this.state.movie['Category']},<span> </span>
                            </span>
                            Special Features: <i>{this.state.movie['Special Features']}</i>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <span>
                            {
                                this.state.movie['Actors'].map((actor)=>{
                                   return (<span
                                       key={actor['actorId']}
                                       onClick={()=>{ActorActions.showActor(actor['actorId'])}}>
                                       <i className="text-capitalize">{actor['First name'].toLowerCase()}<span> </span> {actor['Last name'].toLowerCase()}</i>
                                       <span>; </span>
                                   </span> )
                                })
                            }
                        </span>

                    </div>
                </div>
            <div className="row">
                <div className="col-12">
                    <p>{this.state.movie['Description']}</p>
                </div>
            </div>
                </>
        )
    }
}

export default MovieInformationPanel;
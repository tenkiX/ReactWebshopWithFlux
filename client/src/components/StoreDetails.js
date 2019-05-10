import React from 'react'
import StoresStore from "../store/StoresStore";
import MovieActions from '../actions/MovieActions'

class StoreDetails extends React.Component{

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = { store : {}};
    }

    _onChange(){
        this.setState({store: StoresStore._selectedStore});
    }

    componentDidMount(){
        StoresStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        StoresStore.removeChangeListener(this._onChange)
    }

    render(){
        return (
            <>
            <div className="row">
                <div className="col-12">
                    <div className="well">
                <table className="table table-bordered, table-striped">
                    <caption>Store Details</caption>
                    <tbody>
                    <tr>
                        <td>Address</td>
                        <td>{this.state.store.Address}, {this.state.store.City}, {this.state.store.Country}</td>
                    </tr>
                    <tr>
                        <td>Manager</td>
                        <td>{this.state.store['Manager First Name']} {this.state.store['Manager Last Name']}</td>
                    </tr>
                    {this.state.store.Phone !== "" &&
                        <tr>
                            <td>Phone</td>
                            <td>{this.state.store.Phone}</td>
                        </tr>
                    }
                    </tbody>
                </table>
                    </div></div>
            </div>
                {this.state.store.inventory !== undefined &&
                    <>
                    <div className="row">
                        <div className="col-12">

                        <h1 className="h1">Movies</h1>
                        </div>
                    </div>
                        <div className="row">
                            <div className="col-12">
                        <ul className="list-group">
                            {
                                this.state.store.inventory.map((movie) => {
                                    return (
                                        <li key={movie.filmId}
                                            className="list-group-item"
                                            onClick={() => {MovieActions.showMovieInformation(movie.filmId)}}>
                                            {movie.title}
                                            </li>
                                    )
                                })
                            }
                        </ul>
                            
                            </div>
                    </div>
                </>
                        }
                        
            </>
        )
    }
}

export default StoreDetails
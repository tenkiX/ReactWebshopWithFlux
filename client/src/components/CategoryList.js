import React from 'react'
import MovieActions from '../actions/MovieActions'
import MovieStore from '../store/MovieStore'

class CategoryList extends  React.Component{

    constructor(props) {
        super(props);
        MovieActions.fetchCategories();
        this._onChange = this._onChange.bind(this);
        this.state = { categories : MovieStore._categories};
    }

    _onChange(){
        this.setState({categories : MovieStore._categories});
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
                <div className="card-header">Categories</div>
                <div className="card-body">
                        {this.state.categories.map((category)=>{
                            return(
                                <span
                                    key={category}
                                    onClick={()=>{
                                        MovieActions.listMovies(category)
                                    }}
                                >
                                    <i className="font-italic, badge-info badge-pill">{category}</i>
                                    <span> </span>
                                </span>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default CategoryList;
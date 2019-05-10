import MovieConstants from '../constants/MovieConstants'
import SakilaDispatcher from '../dispatcher/SakilaDispatcher'
class MovieActions {

    showMovieInformation(filmId){
        SakilaDispatcher.handleViewAction({
            actionType : MovieConstants.SHOW_MOVIE_INFORMATION,
            payload : parseInt(filmId)
        });
    }

    fetchCategories(){
        SakilaDispatcher.handleViewAction({
            actionType: MovieConstants.READ_CATEGORY_LIST,
            payload : null
        });
    }

    fetchRatings(){
        SakilaDispatcher.handleViewAction({
            actionType: MovieConstants.READ_RATING_LIST,
            payload : null
        });
    }

    /**
     * Params could be replaced with an options object.
     *
     * @param category
     * @param rating
     */
    listMovies(category, rating){
        SakilaDispatcher.handleViewAction({
            actionType : MovieConstants.LIST_MOVIES,
            payload : {
                category : category,
                rating : rating
            }
        });
    }

    showMovieForm(){
        SakilaDispatcher.handleViewAction({
            actionType : MovieConstants.SHOW_MOVIE_FORM,
            payload : null
        });
    }

    addMovie(movie){
        SakilaDispatcher.handleViewAction({
            actionType : MovieConstants.ADD_MOVIE,
            payload : movie
        });
    }



}

export default new MovieActions();
import {EventEmitter} from 'events'

class MovieStore extends EventEmitter{

    _selectedMovie = null;
    _queriedMovies = [];
    _categories = [];
    _ratings = [];



    emitChange(){
        this.emit('change')
    }

    addChangeListener(callback){
        this.on('change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('change',callback);
    }

}

export  default new MovieStore();
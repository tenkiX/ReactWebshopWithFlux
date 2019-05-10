var filmDAO = require('../dao/FilmDAO');

class FilmService{

    listFilms(callback){
        filmDAO.readFilms(callback);
    }

    listFilmById(filmId,callback){
        filmDAO.readFilmById(filmId,callback);
    }

    listFilmsByCategory(category, callback){
        filmDAO.readFilmByCategory(category,callback);
    }

    listActors(callback){
        filmDAO.readActors(callback);
    }

    listActor(actorId, callback){
        filmDAO.readActorById(actorId,(actor)=>{
            filmDAO.readFilmsOfActor(actorId, (films)=>{
                actor.movies = films;
                callback(actor);
            });
        });
    }

    listCategories(callback){
        filmDAO.readCategories(callback);
    }

    listRatings(callback){
        filmDAO.readRatings(callback);
    }
}

module.exports = new FilmService();
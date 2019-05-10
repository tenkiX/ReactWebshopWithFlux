var express = require('express');
var router = express.Router();
var filmService = require('../service/FilmService');

router.get('/', (req,res)=>{
    req.url = '/list';
    router.handle(req,res);
});

router.get('/list',(req,res)=>{
    filmService.listFilms((films)=>{
       res.status(200).send(films);
    });
});


router.get('/id/:filmId',(req,res)=>{
    filmService.listFilmById(
        parseInt(req.params.filmId), (film) =>{
        res.status(200).send(film);}
        );
});

router.get('/categories', (reg,res)=>{
    filmService.listCategories((films)=>{
        res.status(200).send(films);
    });
});

router.get('/ratings', (reg,res)=>{
    filmService.listRatings((films)=>{
        res.status(200).send(films);
    });
});


router.get('/category/:category', (reg,res)=>{
    filmService.listFilmsByCategory(reg.params.category,(films)=>{
        res.status(200).send(films);
    });
});

router.get('/actors', (req,res)=>{
    filmService.listActors((actors)=>{
        res.status(200).send(actors);
    });
});

router.get('/actors/:actorId', (req,res)=>{
    if(req.params.actorId === undefined){
        res.stat(404).send();
        return;
    }
    filmService.listActor(parseInt(req.params.actorId),
        (actor)=>{
        res.status(200).send(actor);
    });
});

router.post('/add', (req,res)=>{
    console.log({req : req.body});
    res.status(200).send();
})

module.exports = router;
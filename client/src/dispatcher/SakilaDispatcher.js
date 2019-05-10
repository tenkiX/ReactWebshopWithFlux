import {Dispatcher} from 'flux'
import React from 'react'
import ReactDOM from 'react-dom'


import StoreConstants from '../constants/StoreConstants'
import ActorConstants from '../constants/ActorConstants'
import MovieConstants from '../constants/MovieConstants'
import StoresStore from '../store/StoresStore'
import StoreDetails from "../components/StoreDetails";
import MovieStore from "../store/MovieStore";
import MovieInformationPanel from "../components/MovieInformationPanel";
import ActorStore from "../store/ActorStore";
import ActorInformationPanel from '../components/ActorInformationPanel';
import MovieList from "../components/MovieList";
import MovieForm from "../components/MovieForm";

class SakilaDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            source : 'VIEW_ACTION',
            payload : action
        });
    }
}

const dispatcher = new SakilaDispatcher();

dispatcher.register((data)=>{
    if(data.payload.actionType !== StoreConstants.LIST_STORES){
        return;
    }
    fetch('/stores',{
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        }
    }).then(response =>{ return response.json()})
        .then(result =>{
            StoresStore._stores = result;
            StoresStore.emitChange();
        });
});

dispatcher.register((data)=>{
    if(data.payload.actionType !== StoreConstants.DETAIL_STORE){
        return;
    }

    StoresStore._selectedStore = StoresStore._stores.find( (store)=>{
        return store._id === data.payload.payload;
    });
    fetch('/stores/'+data.payload.payload+'/movies',{
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        }
    }).then((response) => { return response.json()})
        .then((res) =>{
            StoresStore._selectedStore['inventory'] = res;
            StoresStore.emitChange();
        });

    ReactDOM.render(
        React.createElement(StoreDetails),
        document.getElementById('mainContentPanel'));
    StoresStore.emitChange();
});

dispatcher.register((data)=>{
   if(data.payload.actionType !== MovieConstants.SHOW_MOVIE_INFORMATION){
       return;
   }
   fetch('/movies/id/'+data.payload.payload)
       .then((response)=>{return response.json()})
       .then((response)=>{
           MovieStore._selectedMovie = response;
           MovieStore.emitChange();
       });
   ReactDOM.render(
       React.createElement(MovieInformationPanel),
       document.getElementById('mainContentPanel')
   );
   MovieStore.emitChange();

});

dispatcher.register((data)=>{
    if(data.payload.actionType !== ActorConstants.SHOW_ACTOR_DETAILS){
       return;
   }

   fetch('/movies/actors/'+data.payload.payload)
       .then((response) => {return response.json()})
       .then((result) =>{
           ReactDOM.render(
               React.createElement(ActorInformationPanel),
               document.getElementById('mainContentPanel')
           );
           ActorStore._actor = result;
           ActorStore.emitChange();
       });
});

dispatcher.register((data)=>{
    if(data.payload.actionType !== MovieConstants.READ_CATEGORY_LIST){
        return;
    }
    fetch('/movies/categories')
        .then((response)=> {return response.json()})
        .then((result) =>{
           MovieStore._categories = result;
           MovieStore.emitChange();
        });
});

dispatcher.register((data)=>{
    if(data.payload.actionType !== MovieConstants.READ_RATING_LIST){
        return;
    }
    fetch('/movies/ratings')
        .then((response)=> {return response.json()})
        .then((result) =>{
            MovieStore._ratings = result;
            MovieStore.emitChange();
        });
});

dispatcher.register((data)=>{
    if(data.payload.actionType !== MovieConstants.LIST_MOVIES){
        return;
    }
    ReactDOM.render(
        React.createElement(MovieList),
        document.getElementById('mainContentPanel')
    );
    fetch('/movies')
        .then((response) =>{return response.json()})
        .then((movies)=>{
            if(data.payload.payload.category !== undefined){
                movies = movies.filter((movie)=>{
                    return movie['Category'] === data.payload.payload.category;
                });
            }
            if(data.payload.payload.rating !== undefined){
                movies = movies.filter((movie)=>{
                    return movie['Rating'] === data.payload.payload.rating;
                })
            }
            MovieStore._queriedMovies = movies;
            MovieStore.emitChange();
        })

});

dispatcher.register((data)=>{
   if(data.payload.actionType !== MovieConstants.SHOW_MOVIE_FORM){
       return;
   }
   ReactDOM.render(
     React.createElement(MovieForm),
     document.getElementById('mainContentPanel')
   );
});

dispatcher.register((data)=>{
   if(data.payload.actionType !== MovieConstants.ADD_MOVIE){
       return;
   }
    console.log(data.payload.payload);
    console.log(JSON.stringify(data.payload.payload));

   fetch('/movies/add',{
       method : 'POST',
       headers : {
           "Content-Type" : 'application/json'
       },
       body : JSON.stringify(data.payload.payload)
   });
   /*
       .then((response) => {return response.json()})
       .then((result)=>{
           console.log(result)
       })
      */
   //console.log(data.payload.payload);
});

export default dispatcher;
var storeDAO = require('../dao/StoreDAO');


class StoreService{

    listStores(callback){
        storeDAO.readStores((stores) =>{
            callback(stores);
        })
    }

    queryStaffOfStore(storeId, callback){
        storeDAO.readStaff(storeId, (staff)=>{
            callback(staff);
        })
    }

    queryInventoryOfStore(storeId, callback){
        storeDAO.readInventory(storeId, (inventory) =>{
            callback(inventory)
        })
    }

    queryFilmsOfStore(storeId, callback){
        storeDAO.readInventory(storeId, (inventory) =>{
            var movies = [];
            inventory.forEach((item) => {
                if(
                    movies.findIndex((movie) => {
                        return movie.filmId === item.filmId
                    }) === -1){
                movies.push({title : item['Film Title'], filmId: item['filmId']})
            }
            });

            callback(movies)
        })
    }

    queryFilmInstancesOfStore(storeId, filmId, callback){
        storeDAO.readFilmFromInventory(storeId,filmId, (films)=>{
            callback(films)
        })
    }
}

module.exports = new StoreService();
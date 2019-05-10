var MongoClient = require('mongodb').MongoClient;
var SakilaConstants = require('./SakilaConstants');

const url = 'mongodb://172.21.0.10:27017';


class StoreDAO{

    readStores(callback){
        var client = MongoClient(url);
        client.connect((err)=>{
            if(err !== null){
                console.log({error: err});
                callback([])
            }

            var db = client.db(SakilaConstants.dbName);
            var collection = db.collection(SakilaConstants.collections.stores.collectionName);
            var fields = SakilaConstants.collections.stores.fields;
            var projection = {};
            projection[fields.id] = 1;
            projection[fields.address] = 1;
            projection[fields.city] = 1;
            projection[fields.country] = 1;
            projection[fields.managerFirstName] = 1;
            projection[fields.managerLastName] = 1;
            projection[fields.phone] = 1;
            collection.find({}).project(projection).toArray((err,docs) =>{
                callback(docs)
            })
        })
    }

    readStaff(storeId, callback){
        var client = MongoClient(url);
        client.connect((err)=>{
            if(err !== null){
                console.log({error: err});
                callback([]);
                return;
            }

            var db = client.db(SakilaConstants.dbName);
            var collection = db.collection(SakilaConstants.collections.stores.collectionName);
            var fields = SakilaConstants.collections.stores.fields;
            var projection = {};
            projection[fields.staff] = 1;
            collection.findOne({_id: storeId}, projection, (err,docs) =>{
                callback(docs[fields.staff]);
            })
        })
    }

    readInventory(storeId, callback){
        var client = MongoClient(url);
        client.connect((err)=>{
            if(err !== null){
                console.log({error: err});
                callback([])
            }

            var db = client.db(SakilaConstants.dbName);
            var collection = db.collection(SakilaConstants.collections.stores.collectionName);
            var fields = SakilaConstants.collections.stores.fields;
            var projection = {};
            projection[fields.inventory] = 1;
            collection.findOne({_id: storeId}, projection, (err,docs) =>{
                callback(docs[fields.inventory]);
            })
        })
    }

    readFilmFromInventory(storeId, filmId, callback){
        this.readInventory(storeId, (films)=>{
            callback(films.filter((film)=>{return film.filmId === filmId}));
        })
    }
}



module.exports = new StoreDAO();
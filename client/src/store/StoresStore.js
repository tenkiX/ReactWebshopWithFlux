import {EventEmitter} from 'events'

class StoresStore extends EventEmitter{

    _stores = [];
    _selectedStore = null;

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

export default new StoresStore();
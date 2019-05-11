import {EventEmitter} from 'events'

class OrderStore extends EventEmitter{

    orders = [];



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

export default new OrderStore();
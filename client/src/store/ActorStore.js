import EventEmitter from 'events'

class ActorStore extends EventEmitter{

    _actor = null;

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

export default new ActorStore();
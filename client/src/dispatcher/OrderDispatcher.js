import {Dispatcher} from 'flux'


import OrderConstants from '../constants/OrderConstants'

import OrderStore from '../store/OrderStore'


class OrderDispatcher extends Dispatcher{

    handleViewAction(action){
        this.dispatch({
            source : 'VIEW_ACTION',
            payload : action
        });
    }
}

const dispatcher = new OrderDispatcher();


dispatcher.register((data)=>{
    if(data.payload.actionType !== OrderConstants.SHOW_ALL_ORDERS){
        return;
    }
    fetch('/listAllOrders',{
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        }
    }).then(response =>{ return response.json()})
        .then(result =>{
            OrderStore.orders = result;
            OrderStore.emitChange();
        });
});


export default dispatcher;
import {Dispatcher} from 'flux'
import axios from "axios";

import OrderConstants from '../constants/OrderConstants'

import OrderStore from '../store/OrderStore'
import OrderActions from "../actions/OrderActions";


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



dispatcher.register((data)=>{
    if(data.payload.actionType !== OrderConstants.UPDATE_JOB){
        return;
    }
    axios.post(`/finishJob/${data.payload.payload.dbkey}/${data.payload.payload.index}`)
        .then(res => {alert("job finished successfully");  OrderActions.listAllOrders(); OrderStore.emitChange();})
        .catch(e => {alert(e  + " job finishing failed.")});

});

dispatcher.register((data)=>{
    if(data.payload.actionType !== OrderConstants.ADD_ORDER){
        return;
    }

    axios.post('/placeOrder', data.payload.payload.orderData)
        .then(res => {alert("Order submitted"); })
        .catch(e => {alert(e  + " order failed.")});
});


dispatcher.register((data)=>{
    if(data.payload.actionType !== OrderConstants.SHOW_ORDERS_BY_USER){
        return;
    }
    fetch(`/listOrders/${data.payload.payload.customerId}`,{
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

dispatcher.register((data)=>{
    if(data.payload.actionType !== OrderConstants.USER_CHANGED){
        return;
    }
    OrderStore.activeUserId = data.payload.payload.userName;
    OrderActions.listOrderByUser(data.payload.payload.userName);

});

export default dispatcher;
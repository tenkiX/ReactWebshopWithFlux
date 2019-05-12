import OrderConstants from '../constants/OrderConstants'
import OrderDispatcher from '../dispatcher/OrderDispatcher';

class OrderActions {

    listAllOrders(){
        OrderDispatcher.handleViewAction({
            actionType : OrderConstants.SHOW_ALL_ORDERS,
            payload : null
        });
    }

    updateJob(dbkey,index){
        OrderDispatcher.handleViewAction({
            actionType : OrderConstants.UPDATE_JOB,
            payload : {
                dbkey : dbkey,
                index : index
            }
        });
    }

    addOrder(orderData){
        OrderDispatcher.handleViewAction({
            actionType : OrderConstants.ADD_ORDER,
            payload : {
                orderData : orderData
            }
        });
    }

    listOrderByUser(customerId){
        OrderDispatcher.handleViewAction({
            actionType : OrderConstants.SHOW_ORDERS_BY_USER,
            payload : {
                customerId : customerId
            }
        });
    }

    userChanged(userName){
        OrderDispatcher.handleViewAction({
            actionType : OrderConstants.USER_CHANGED,
            payload : {userName:userName}
        });
    }

    updateDate(dbkey,date){
        OrderDispatcher.handleViewAction({
            actionType : OrderConstants.UPDATE_DATE,
            payload : {
                dbkey : dbkey,
                date:date}
        });
    }
}

export default new OrderActions();
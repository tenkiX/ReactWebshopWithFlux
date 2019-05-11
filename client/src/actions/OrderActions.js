import StoreConstants from '../constants/OrderConstants'
import OrderDispatcher from '../dispatcher/OrderDispatcher';

class OrderActions {

    listStores(){
        OrderDispatcher.handleViewAction({
            actionType : StoreConstants.SHOW_ALL_ORDERS,
            payload : null
        });
    }
}

export default new OrderActions();
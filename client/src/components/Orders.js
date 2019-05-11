import React, { Component } from 'react';
import OrderItem from './OrderItem';
import Table from "react-bootstrap/Table";
import OrderStore from "../store/OrderStore";
import OrderActions from "../actions/OrderActions";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      orders: null
    };
  }

  onChange(){
    this.setState({orders : OrderStore.orders});
  }

  componentDidMount(){

    OrderStore.addChangeListener(this.onChange);
    OrderActions.listOrderByUser(OrderStore.activeUserId);
  }

  componentWillUnmount(){
    OrderStore.removeChangeListener(this.onChange);
  }

  render() {
    if (!this.state.orders) {
      return <div>You are not logged in!</div>
    }
    return (<div>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Type of shutter</th>
          <th>Type of window</th>
          <th>Width</th>
          <th>Height</th>
          <th>Is it ready?</th>
        </tr>
        </thead>
        <tbody>
        {OrderStore.orders.map((order) => (
            <OrderItem key={order._id} order={order}/>
        ))}
        </tbody>
      </Table>
    </div>)

  }
}

export default Orders;
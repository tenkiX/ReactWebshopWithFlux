import React, { Component } from 'react';
import uuid from "uuid";

class OrderItem extends Component {

    render() {
        if (!this.props.order.order.order) {
            return <div />
        }
        return  this.props.order.order.order.map(orders => (
            <tr key={uuid.v4()}>
                <td>{orders.shutterType}</td>
                <td>{orders.windowType}</td>
                <td>{orders.windowWidth}</td>
                <td>{orders.windowHeight}</td>
                <td>{orders.isJobFinished}</td>
            </tr>
        ));

    }
}

export default OrderItem;


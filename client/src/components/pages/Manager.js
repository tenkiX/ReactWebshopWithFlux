import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import ManagerItem from "../ManagerItem";
import OrderStore from "../../store/OrderStore"
import OrderActions from "../../actions/OrderActions";

import uuid from "uuid";

class Manager extends Component {
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
        OrderActions.listAllOrders();
    }

    componentWillUnmount(){
        OrderStore.removeChangeListener(this.onChange);
    }



    render() {
        if (!this.state.orders) {
            return <div />
        }

        return (
            <div>

                <Table bordered hover>
                    <thead>
                    <tr>
                        <th>Orders</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.state.orders.map((order) => (
                        <tr key={uuid.v4()}><td>
                        <Table striped bordered hover responsive>
                            <tbody>
                            <tr><td>Customer: {order.order.customerId} (shipping address: {order.order.address})</td><td>Contact: {order.order.contactEmail}</td></tr>
                        <ManagerItem key={order._id} order={order} finishJob={this.finishJob}/>

                            </tbody>
                        </Table></td>
                        </tr>

                    ))}

                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Manager;


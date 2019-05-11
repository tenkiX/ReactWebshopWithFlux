
import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import JobItem from "../JobItem";
import Alert from "react-bootstrap/Alert";
import OrderStore from "../../store/OrderStore"
import OrderActions from "../../actions/OrderActions";

class Worker extends Component {
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
                <Alert key={0} variant='info'>
                    Click on the job to mark as assembled!
                </Alert>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Type of shutter</th>
                        <th>Type of window</th>
                        <th>Width</th>
                        <th>Height</th>
                        <th>List of required materials</th>
                        <th>Is it assembled?</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.orders.map((order) => (
                        <JobItem key={order._id} order={order} finishJob={OrderActions.updateJob}/>
                    ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}
export default Worker;
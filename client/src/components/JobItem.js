import React, { Component } from 'react';
import uuid from "uuid";
import JobSubItem from "./JobSubItem";

class JobItem extends Component {


    render() {
        if (!this.props.order.order.order) {
            return <div />
        }

        return  this.props.order.order.order.map((order,index) => (
            <JobSubItem key={uuid.v4()} dbindex={index} dbkey={this.props.order._id} order={order} finishJob={this.props.finishJob}/>

        ));

    }
}




export default JobItem;


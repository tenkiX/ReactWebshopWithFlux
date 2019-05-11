import React, { Component } from 'react';

class ManagerSubItem extends Component {

    onTableRowClicked= (e) => {
        e.preventDefault();
    };

    render() {
        if (!this.props.order) {
            return <div />
        }

        return  (
            <tr onClick={this.onTableRowClicked.bind(this)}>
                <td>{this.props.order.shutterType}</td>
                <td>{this.props.order.windowType}</td>
                <td>{this.props.order.windowWidth}</td>
                <td>{this.props.order.windowHeight}</td>
                <td>{this.props.order.isJobFinished}</td>
                <td>false</td>
            </tr>

        );

    }
}


export default ManagerSubItem;

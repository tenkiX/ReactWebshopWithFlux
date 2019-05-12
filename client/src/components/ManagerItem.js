import React, { Component } from 'react';
import uuid from "uuid";
import ManagerSubItem from "./ManagerSubItem";
import {Document, Page, Text, View, PDFDownloadLink} from '@react-pdf/renderer';

import OrderActions from "../actions/OrderActions";
import Button from "react-bootstrap/Button";

class ManagerItem extends Component {
    state = {currentDate:null};

    onDatePickerSubmitted= () => {
        if (this.state.currentDate=== null || this.state.currentDate === undefined) {alert("Please pick a valid date first"); return;}
        var GivenDate = this.state.currentDate;
        var CurrentDate = new Date();
        GivenDate = new Date(GivenDate);
        if(GivenDate < CurrentDate){
            alert('Back to the future is not supported yet, Doc.');
            return;
        }
        OrderActions.updateDate(this.props.order._id,this.state.currentDate);
    };

    onDatePickerChanged= (e) => {
         this.setState({currentDate: e.target.value})
    };

    render() {
        if (!this.props.order.order.order) {
            return <div />
        }

        return  (<tr><thead>
            <tr>
                <th>Shutter type</th>
                <th>Window type</th>
                <th>Window width</th>
                <th>Window height</th>
                <th>Assembled?</th>
                <th>Payment recieved?</th>
            </tr>
            </thead>
            {this.props.order.order.order.map((order) => (
            <ManagerSubItem key={uuid.v4()} isPaid={this.props.order.order.isPaid} order={order}/>))}

            <td>
                <PDFDownloadLink document={
                    <Document>
                        <Page size="A4">
                            <View>
                               <Text>~~ ShutterShop invoice ~~</Text>
                               <Text> For customer: {this.props.order.order.customerId}</Text>
                              {this.props.order.order.order.map((order) => (
                               <Text>{order.shutterType} x {order.orderedPieces}</Text>
                              ))}
                                <Text>   Total price is: {Math.floor(Math.random() * 100000)}   </Text>
                                <Text>~~ Thanks for shopping! ~~</Text>
                            </View>
                        </Page>
                    </Document>} fileName="invoice.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Generate invoice')}
                </PDFDownloadLink>
                <a href={"mailto:"+this.props.order.order.contactEmail+"?Subject=OrderAtShutterShop&body=We would like to install your shutter."}>   Send Mail</a>

            </td>
                <td> <input type="date" id="date-field" name="install-date" onChange={this.onDatePickerChanged}/> <Button variant="outline-dark" size="sm" onClick={this.onDatePickerSubmitted}>Change install date</Button></td>

            </tr>
        );

    }
}


export default ManagerItem;

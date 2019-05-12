import React, { Component } from 'react';
import uuid from "uuid";
import ManagerSubItem from "./ManagerSubItem";
import {Document, Page, Text, View, PDFDownloadLink} from '@react-pdf/renderer';

import OrderActions from "../actions/OrderActions";

class ManagerItem extends Component {

 /*   componentDidMount() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }

        today = yyyy+'-'+mm+'-'+dd;
        document.getElementById("date-field").setAttribute("value", today);
        document.getElementById("date-field").setAttribute("min", today);
    }*/

    onDatePickerChanged= (e) => {
        OrderActions.updateDate(this.props.order._id,e.target.value);
        //e.preventDefault();
       // alert("im clicked!");
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
                <td>Change installment date:<input type="date" id="date-field" name="install-date" onChange={this.onDatePickerChanged}/></td>

            </tr>
        );

    }
}


export default ManagerItem;

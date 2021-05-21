import React from 'react';
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';
import InvoiceTitle from './reports/InvoiceTitle.js'
// import BillTo from './BillTo'
// import InvoiceNo from './InvoiceNo'
// import InvoiceItemsTable from './InvoiceItemsTable'
// import InvoiceThankYouMsg from './InvoiceThankYouMsg'
// import logo from '../../../src/logo.png'


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  });
  
  const Invoice = ({invoice_data}) => (
            <Document>
                <Page size="A4" style={styles.page}>
                    <InvoiceTitle title='Invoice'/>
                    {/* <Image style={styles.logo} src={logo} />
                    <InvoiceNo invoice={invoice}/>
                    <BillTo invoice={invoice}/>
                    <InvoiceItemsTable invoice={invoice} />
                    <InvoiceThankYouMsg /> */}
                </Page>
            </Document>
        );
  
  export default Invoice
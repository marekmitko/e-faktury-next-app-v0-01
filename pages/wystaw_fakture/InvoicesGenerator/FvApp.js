import React, { Component, Fragment } from 'react';
import {PDFViewer} from '@react-pdf/renderer'
import Invoice from './components/Invoice'
import invoice from './data/invoice'

// import logo from './logo.svg';
import styles from './FvApp.module.css';

class FvApp extends Component {

    render() {
        return (
            <Fragment>
                <PDFViewer width="1000" height="600" className={styles.FvApp} >
                    <Invoice invoice={invoice}/>
                </PDFViewer>
            </Fragment>
        );
    }
}

export default FvApp;
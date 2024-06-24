import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './common.css';
import firestore from '../firebase';
import {collection, doc, setDoc, getDoc} from '@firebase/firestore';

const ServiceSelector = () => {
    const history = useHistory();

    // Function to handle button clicks and redirect to respective routes
    const handleButtonClick = (route) => {
        history.push(route);
    };

    const [denominations, setDenominations] = useState({});

    useEffect(() => {
        const fetchDenominations = async () => {
            try {
                const collRef = collection(firestore, 'availableDenominations');
                const docRef = doc(collRef, 'availableDenominations');
                const docSnapshot = await getDoc(docRef);
                if (docSnapshot.exists()) {
                    setDenominations(docSnapshot.data());
                } else {
                    console.log('Document not found');
                }
            } catch (error) {
                console.error('Error fetching denominations:', error);
            }
        };

        fetchDenominations();
    }, []);

    // Check if all four denominations are false
    const isAllDenominationsFalse = 
        denominations['5'] === false &&
        denominations['10'] === false &&
        denominations['20'] === false &&
        denominations['50'] === false;

    return (
        <div className="container text-center">
            <h1 className="mt-5">Service Selector</h1>
            <div className="card mt-5 p-3 bg-dark justify-content-evenly text-center">
                <h4>Please select the service required:</h4>
                <div className="row">
                    <div className="col-lg-6">
                        <button className="services-btn btn btn-light btn-lg btn-block mb-3" onClick={() => handleButtonClick('/account-mgmt')}>Manage Account (working)</button>
                    </div>
                    <div className="col-lg-6">
                        <button className={`services-btn btn btn-light btn-lg btn-block mb-3 ${isAllDenominationsFalse ? 'disabled' : ''}`} onClick={() => handleButtonClick('/cash-withdrawal')}>Withdraw Cash (working)</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <button className="services-btn btn btn-light btn-lg btn-block mb-3" onClick={() => handleButtonClick('/cheque-deposit')}>Cheque Deposit (working)</button>
                    </div>
                    <div className="col-lg-6">
                        <button className="services-btn btn btn-light btn-lg btn-block mb-3" onClick={() => handleButtonClick('/cash-withdrawal')}>Currency Exchange</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <button className="services-btn btn btn-light btn-lg btn-block mb-3" onClick={() => handleButtonClick('/cash-withdrawal')}>Cash Deposit</button>
                    </div>
                    <div className="col-lg-6">
                        <button className="services-btn btn btn-light btn-lg btn-block mb-3" onClick={() => handleButtonClick('/cash-withdrawal')}>Coin Counter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSelector;

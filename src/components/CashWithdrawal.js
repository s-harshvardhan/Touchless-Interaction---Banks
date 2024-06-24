import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './common.css';
import firestore from '../firebase';
import {collection, doc, setDoc, getDoc} from '@firebase/firestore';

const CashWithdrawal = () => {
    const history = useHistory();

    const handleButtonClick = (amount) => {
        // Redirect to CashWithdrawal2 component with the selected amount
        history.push(`/cash-withdrawal-2?amount=${amount}`);
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

    // Check if £5 and £10 denominations are available
    // const isFiveAndTenAvailable = denominations['5'] === true && denominations['10'] === true;
    // Check if £5, £10, and £20 denominations are available
    // const isFiveTenTwentyAvailable = isFiveAndTenAvailable === true && denominations['20'] === true;

    return (
        <div className="container text-center">
            <h1 className="mt-5">Cash Withdrawal</h1>
            <div className="card mt-5 p-3 bg-dark justify-content-evenly text-center">
                <h4>Select closest amount</h4>
                {/* Grid of buttons for denomination selection */}
                <div className="row">
                    <div className="col-lg-6">
                        <button className={`money-btn-first btn btn-light btn-lg btn-block mb-3 ${!denominations['5'] ? 'disabled' : ''}`} onClick={() => handleButtonClick(5)}>£5</button>
                    </div>
                    <div className="col-lg-6">
                        <button className={`money-btn-first btn btn-light btn-lg btn-block mb-3 ${!denominations['5'] && !denominations['10'] ? 'disabled' : ''}`} onClick={() => handleButtonClick(10)}>£10</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <button className={`money-btn-first btn btn-light btn-lg btn-block mb-3 ${(!denominations['5'] && !denominations['10']) && !denominations['20'] ? 'disabled' : ''}`} onClick={() => handleButtonClick(20)}>£20</button>
                    </div>
                    <div className="col-lg-6">
                        <button className="money-btn-first btn btn-light btn-lg btn-block mb-3" onClick={() => handleButtonClick(50)}>£50</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <button className="money-btn-first btn btn-light btn-lg btn-block mb-3" onClick={() => handleButtonClick(100)}>£100</button>
                    </div>
                    <div className="col-lg-6">
                        <button className="money-btn-first btn btn-light btn-lg btn-block mb-3" onClick={() => handleButtonClick(200)}>£200</button>
                    </div>
                </div>
                {/* Bottom bar indicating available denominations */}
                <div className="container">
                    <div className="row bg-dark">
                        <div className="col">
                            <p className="text-center">Available denominations</p>
                        </div>
                    </div>
                    <div className="bottom-bar row bg-dark ">
                        <div className="col">
                            <button className={`denomination-buttons btn btn-success disabled ${denominations['5'] ? '' : 'unavailable-denomination'}`}>£ 5</button>
                        </div>
                        <div className="col">
                            <button className={`denomination-buttons btn btn-success disabled ${denominations['10'] ? '' : 'unavailable-denomination'}`}>£ 10</button>
                        </div>
                        <div className="col">
                            <button className={`denomination-buttons btn btn-success disabled ${denominations['20'] ? '' : 'unavailable-denomination'}`}>£ 20</button>
                        </div>
                        <div className="col">
                            <button className={`denomination-buttons btn btn-success disabled ${denominations['50'] ? '' : 'unavailable-denomination'}`}>£ 50</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CashWithdrawal;

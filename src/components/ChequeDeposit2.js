import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './common.css';

const ChequeDeposit2 = () => {
    const history = useHistory();

    useEffect(() => {
        // Redirect to '/' after 5 seconds
        const redirectTimeout = setTimeout(() => {
            history.push('/cheque-deposit-3');
        }, 5000);

        // Clean up the timeout to avoid memory leaks
        return () => clearTimeout(redirectTimeout);
    }, [history]);

    return (
        <div className='container text-center justify-content-center '>
            <h1 className='mt-5'>Cheque Deposit</h1>
            <div className='card mt-5 p-3 bg-dark justify-content-evenly text-center'>
                <h1>Processing Request ....</h1>
                <h2>Calculating Amount ....</h2>
                <div>
                    <img
                        src="https://www.ajib.com/sites/default/files/styles/embedded_blocks_655x420/public/2019-07/Cheque_Diposit.jpg"
                        alt="Cheque Insertion Image"
                        className="img-fluid cheque-image"
                    />
                </div>
            </div>
        </div>  
    ) 
};

export default ChequeDeposit2;
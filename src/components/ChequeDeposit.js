import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './common.css';

const ChequeDeposit = () => {
    const history = useHistory();

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Check if the 'y' key is pressed
            if (event.key === 'y') {
                // Navigate to the desired route when 'y' key is pressed
                history.push('/cheque-deposit-2');
            }
        };

        // Add event listener for keydown
        document.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [history]);

    return (
        <div className='container text-center justify-content-center '>
            <h1 className='mt-5'>Cheque Deposit</h1>
            <div className='card mt-5 p-3 bg-dark justify-content-evenly text-center'>
                <h1>Insert Cheque in the slot</h1>
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

export default ChequeDeposit;
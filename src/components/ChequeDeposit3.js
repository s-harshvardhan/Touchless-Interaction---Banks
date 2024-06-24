import React from 'react';
import { useHistory } from 'react-router-dom';
import './common.css';

const ChequeDeposit3 = () => {
    const history = useHistory();

    const handleDiscard = () => {
        history.push('/error-screen');
    };

    const handleAddMore = () => {
        history.push('/cheque-deposit');
    };

    const handleConfirm = () => {
        history.push('/error-screen');
    };

    return (
        <div className='container text-center justify-content-center '>
            <h1 className='mt-5'>Cheque Deposit</h1>
            <div className='card mt-5 p-3 bg-dark justify-content-evenly text-center'>
                <h1>Check Denominations & Amount</h1>
                <table className="table table-sm table-hover table-striped table-bordered border-success table-warning">
                    <thead>
                        <tr>
                            <th scope='col'>Payer Name</th>
                            <th scope='col'>Number of Cheques</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Total</th>
                        </tr>
                    </thead>
                    <tbody className='table-group-divider'>
                        <tr>
                            <td>George Smith</td>
                            <td>2</td>
                            <td>£ 100</td>
                            <td>£ 200</td>
                        </tr>
                        <tr>
                            <td>Victoria Albert</td>
                            <td>1</td>
                            <td>£ 50</td>
                            <td>£ 50</td>
                        </tr>
                        <tr>
                            <td colSpan="4"><strong>Total: £ 250</strong></td>
                            {/* <td><strong>£ 250</strong></td> */}
                        </tr>
                    </tbody>
                </table>
                <div className='row justify-content-evenly'>
                    <button className="btn btn-bordered border-light col-3 btn-lg btn-danger me-2" onClick={handleDiscard}>Discard</button>
                    <button className="btn col-3 btn-lg btn-info me-2" onClick={handleAddMore}>Add More</button>
                    <button className="btn btn-bordered border-light col-3 btn-lg btn-success" onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>  
    );
};

export default ChequeDeposit3;

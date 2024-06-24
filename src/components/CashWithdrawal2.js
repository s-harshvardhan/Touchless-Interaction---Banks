import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './common.css';

const CashWithdrawal = () => {
    const location = useLocation();
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const amountParam = parseInt(searchParams.get('amount'));
        setAmount(amountParam || 0);
    }, [location.search]);

    const handleAdjustment = (value) => {
        const updatedAmount = amount + value;
        // Ensure the minimum amount is £10
        if (updatedAmount >= 10) {
            setAmount(updatedAmount);
        }
    };

    const history = useHistory();

    const handleButtonClick = (route) => {
        history.push(route);
    };

    return (
        <div className="container text-center">
            <h1 className="mt-5">Cash Withdrawal</h1>
            <div className="card mt-5 p-3 bg-dark justify-content-evenly text-center">
                <div className='container'>    
                    <div className='row'>
                        <div className='col mt-3'>
                                <div className='btn btn-danger btn-lg' onClick={() => handleButtonClick('/cash-withdrawal')}>Back</div>                      
                        </div>
                        <div className='col mt-3'>
                            <h4>Adjust Amount</h4>
                        </div>
                        <div className='col mt-3'>                          
                            <div className='btn btn-success btn-lg confirm-button' onClick={() => handleButtonClick('/error-screen')}>Confirm</div>                          
                        </div>
                    </div>
                </div>    
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className="row">                      
                                <div className="btn btn-light btn-lg mb-3" onClick={() => handleAdjustment(-5)}>- £5</div>
                            </div>
                            <div className="row">                      
                                <div className="btn btn-light btn-lg mb-3" onClick={() => handleAdjustment(-10)}>- £10</div>
                            </div>
                            <div className="row">                      
                                <div className="btn btn-light btn-lg mb-3" onClick={() => handleAdjustment(-20)}>- £20</div>
                            </div>
                            <div className="row">                      
                                <div className="btn btn-light btn-lg mb-3" onClick={() => handleAdjustment(-50)}>- £50</div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <h1>£ {amount}</h1>
                        </div>
                        <div className='col-lg-4'>
                            <div className="row">                      
                                <div className="btn btn-light btn-lg mb-3" onClick={() => handleAdjustment(5)}>+ £5</div>
                            </div>
                            <div className="row">                      
                                <div className="btn btn-light btn-lg mb-3" onClick={() => handleAdjustment(10)}>+ £10</div>
                            </div>
                            <div className="row">                      
                                <div className="btn btn-light btn-lg mb-3" onClick={() => handleAdjustment(20)}>+ £20</div>
                            </div>
                            <div className="row">                      
                                <div className="btn btn-light btn-lg mb-3" onClick={() => handleAdjustment(50)}>+ £50</div>
                            </div>
                        </div>
                    </div>
                </div>    
                {/* <div className="container mb-2">
                    <div className="row bg-dark">
                        <div className="col">
                            <p className="text-center">Available denominations</p>
                        </div>
                    </div>
                    <div className="bottom-bar row bg-dark ">
                        <div className="col">
                            <div className="denomination-buttons unavailable-denomination btn btn-failure disabled">£ 5</div>
                        </div>
                        <div className="col">
                            <div className="denomination-buttons btn btn-success disabled">£ 10</div>
                        </div>
                        <div className="col">
                            <div className="denomination-buttons btn btn-success disabled">£ 20</div>
                        </div>
                        <div className="col">
                            <div className="denomination-buttons btn btn-success disabled">£ 50</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CashWithdrawal;
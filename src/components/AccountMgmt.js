import React from 'react';
import { useHistory } from 'react-router-dom';
import './common.css';


const AccountMgmt = () => {
    const history = useHistory();

    // Function to handle button clicks and redirect to respective routes
    const handleButtonClick = (route) => {
        history.push(route);
    };

    return (
        <div className="container text-center">
            <h1 className="mt-5">Account Management</h1>
            <div className="card mt-5 p-3 bg-dark justify-content-evenly text-center">
                <h4>Please select the service required:</h4>
                <div className="row">
                    <div className="col-lg-6">
                        <button className="sub-services-btn btn btn-light btn-lg btn-block mb-3">Change Withrawal Limit</button>
                    </div>
                    <div className="col-lg-6">
                        <button className="sub-services-btn btn btn-light btn-lg btn-block mb-3">Balance Inquiry</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <button className="sub-services-btn btn btn-light btn-lg btn-block mb-3">View/Print Statement</button>
                    </div>
                    <div className="col-lg-6">
                        <button className="sub-services-btn btn btn-light btn-lg btn-block mb-3">Change Card PIN</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <button className="sub-services-btn btn btn-light btn-lg btn-block mb-3">Transfer</button>
                    </div>
                    {/* <div className="col-lg-6">
                        <button className="sub-services-btn btn btn-light btn-lg btn-block mb-3">Dummy Button</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default AccountMgmt;

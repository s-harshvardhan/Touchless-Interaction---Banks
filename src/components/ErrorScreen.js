import React from 'react';
import { useHistory } from 'react-router-dom';
import './common.css';


const ErrorScreen = () => {
    const history = useHistory(); // Initialize useHistory hook

    const handleRestart = () => {
        history.push('/card-reader'); // Redirect to CardReader component
    };

    return (
        <div className="container text-center">
            <h1 className="mt-5">Error Screen</h1>
            <div className="card mt-5 text-center">
                <h1 className="fw-bold mt-5 mb-5">Multiple wrong attempts!</h1>
                <button className="mx-auto btn btn-light mt-5 mb-5" onClick={handleRestart}>
                    Restart Transaction
                </button>
            </div>
        </div>
    );
};

export default ErrorScreen;

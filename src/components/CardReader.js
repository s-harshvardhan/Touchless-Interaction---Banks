import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'; 
import './common.css';

const CardReader = () => {
    const history = useHistory(); // Initialize useHistory hook

    const [wrongAttempts, setWrongAttempts] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [positiveMessage, setPositiveMessage] = useState('');

    const handleCardSuccess = () => {
        // Reset wrong attempts
        setWrongAttempts(0);
        setErrorMessage('');
        // Show positive message
        setPositiveMessage('Card authenticated. Proceeding...');
        // Redirect to FacialRecognition component after 3 seconds
        setTimeout(() => {
            history.push('/facial-recognition');
        }, 3000); // 3 seconds delay
    };
    

    const handleCardFailure = () => {
        setWrongAttempts(wrongAttempts + 1);
        setErrorMessage('Card not recognized. Please try again.');
        // Redirect to ErrorScreen component if wrong attempts reach 5
        if (wrongAttempts >= 4) {
            setIsRedirecting(true);
            setTimeout(() => {
                history.push('/error-screen');
            }, 2000); // Redirect after 2 seconds
        }
    };
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'n') {
                handleCardFailure();
            } else if (event.key === 'y') {
                handleCardSuccess();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [wrongAttempts], [handleCardFailure], [handleCardSuccess]);

    return (
        <div className="container text-center">
            <h1 className="mt-5">Card Reader</h1>
            <div className="card mt-5 p-3 bg-dark">
                <h4>Tap your bank card to authenticate</h4>
                {/* Custom shapes and animations */}
                <div className="rectangle">
                    <div className="circle"></div>
                </div>
                {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                {positiveMessage && <p className="text-success mt-3">{positiveMessage}</p>}
                {isRedirecting ? (
                    <p className="text-danger mt-3">Multiple wrong attempts. Redirecting...</p>
                ) : (
                    <p className="text-muted mt-3">Press 'y' for successful reading or 'n' for failure</p>
                )}
            </div>
        </div>
    );
};

export default CardReader;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import './FacialRecognition.css'; // Import custom CSS for FacialRecognition component
import './common.css';


const FacialRecognition = () => {
    const history = useHistory(); // Initialize useHistory hook

    const [wrongAttempts, setWrongAttempts] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [positiveMessage, setPositiveMessage] = useState('');
    const [isMirrored, setIsMirrored] = useState(true);

    const handleCardSuccess = () => {
        // Reset wrong attempts
        setWrongAttempts(0);
        setErrorMessage('');
        // Show positive message
        setPositiveMessage('User authorized. Proceeding...');
        // Redirect to FacialRecognition component after 3 seconds
        setTimeout(() => {
            history.push('/service-selector');
        }, 3000); // 3 seconds delay
    };
    

    const handleCardFailure = () => {
        setWrongAttempts(wrongAttempts + 1);
        setErrorMessage('Face not recognized. Please stand stable.');
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

    useEffect(() => {
        const videoElement = document.getElementById('videoElement');

        // Request access to the camera when the component mounts
        const getMedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoElement) {
                    videoElement.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing the camera:', error);
            }
        };

        getMedia();

        return () => {
            // Stop video stream when the component unmounts
            if (videoElement && videoElement.srcObject) {
                const stream = videoElement.srcObject;
                const tracks = stream.getTracks();
                tracks.forEach((track) => {
                    track.stop();
                });
            }
        };
    }, []);

    return (
        <div className="container text-center">
            <h1 className="mt-5">Face ID</h1>
            <div className="card mt-5 p-3 bg-dark">
                <p>(Stay still within the camera range)</p>
                <div className="video-container">
                    {/* Video element for facial recognition */}
                    <video id="videoElement" autoPlay playsInline style={{ transform: `scaleX(${isMirrored ? -1 : 1})` }}></video>
                    <div className="facial-recognition">
                        {/* Display captured face image */}
                        <img className="face-image" id="faceImage" src="" alt="Face Image" />
                    </div>
                </div>
                {errorMessage && <p className="text-danger mt-5">{errorMessage}</p>}
                {positiveMessage && <p className="text-success mt-5">{positiveMessage}</p>}
                {isRedirecting ? (
                    <p className="text-danger mt-4">Multiple wrong attempts. Redirecting...</p>
                ) : (
                    <p className="text-muted mt-3">Press 'y' for successful reading or 'n' for failure</p>
                )}
            </div>
        </div>
    );
};

export default FacialRecognition;

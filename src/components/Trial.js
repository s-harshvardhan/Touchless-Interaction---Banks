// import React, { useState, useEffect } from 'react';
// import firestore from '../firebase';
// import {collection, doc, setDoc, getDoc} from 'firebase/firestore';

// const Trial = () => {
//     const [denominations, setDenominations] = useState({});

//     useEffect(() => {
//         const fetchDenominations = async () => {
//             try {
//                 const collRef = collection(firestore, 'availableDenominations');
//                 const docRef = doc(collRef, 'availableDenominations');
//                 const docSnapshot = await getDoc(docRef);
//                 if (docSnapshot.exists()) {
//                     setDenominations(docSnapshot.data());
//                 } else {
//                     console.log('Document not found');
//                 }
//             } catch (error) {
//                 console.error('Error fetching denominations:', error);
//             }
//         };

//         fetchDenominations();
//     }, []);

//     return (
//         <div className='container text-center'>
//             <div className='row'>
//                 <div className={`col-3 btn ${denominations['5'] ? '' : 'disabled'}`}>five</div>
//                 <div className={`col-3 btn ${denominations['10'] ? '' : 'disabled'}`}>ten</div>
//                 <div className={`col-3 btn ${denominations['20'] ? '' : 'disabled'}`}>twenty</div>
//                 <div className={`col-3 btn ${denominations['50'] ? '' : 'disabled'}`}>fifty</div>
//             </div>
//         </div>
//     );
// };

// export default Trial;

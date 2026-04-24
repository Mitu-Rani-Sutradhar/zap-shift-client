import React, { useEffect, useState } from 'react';
import {  useSearchParams } from 'react-router';

import useAxiosSecure from '../../../hooks/useAxiosSecure';

    const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const sessionId = searchParams.get('success_id')
    console.log(sessionId)

    const axiosSecure = useAxiosSecure();

    useEffect( () => {
      if(sessionId){
        axiosSecure.patch(`/payment-success?success_id=${sessionId}`)
        .then(res =>{
            console.log(res.data);
            setPaymentInfo({
                transactionId: res.data.transactionId,
                trackingId: res.data.trackingId


            })
        })
      }
    }, [sessionId,axiosSecure])

    return (
        <div>
            <h2 className="text-4xl">Payment successful</h2>
            <p>Your TransactionId: {paymentInfo.transactionId}</p>
            <p>Your trackingId: {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;
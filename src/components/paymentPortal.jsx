import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentPortal = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    useEffect(() => {
        // Simulate redirection to payment portal after a brief delay
        const timeout = setTimeout(() => {
            setPaymentSuccess(true);
        }, 2000);

        // Clear timeout when component unmounts
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <div className="payment-message">
                <h2>Redirecting to Payment...</h2>
            </div>
            {paymentError && <div>{paymentError}</div>}
            {paymentSuccess && <div>Payment successful!</div>}
        </div>
    );
};

export default PaymentPortal;

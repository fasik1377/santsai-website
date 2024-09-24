import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';  // Use useHistory in React Router v5
import '../scss/PaymentCompletePage.scss';  // Import Sass for styling

const PaymentCompletePage = () => {
  const navigate = useHistory();

  // Function to handle "Go to Home" button click
  const goToHome = () => {
    navigate.push('/');
  };

  return (
    <div className="payment-complete-page d-flex justify-content-center align-items-center">
      <div className="text-center">
        {/* Payment success message */}
        <h1 className="mb-4">Payment Completed Successfully!</h1>
        <p className="mb-4">Thank you for your purchase. Your payment has been processed successfully.</p>
        {/* Go to Home Button */}
        <Button className="btn btn-primary" onClick={goToHome}>
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default PaymentCompletePage;

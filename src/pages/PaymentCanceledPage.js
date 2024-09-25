import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import '../scss/PaymentCanceledPage.scss';  // Import Sass for styling

const PaymentCanceledPage = () => {
  const navigate = useHistory();

  // Function to handle "Go to Home" button click
  const goToHome = () => {
    navigate.push('/');
  };

  return (
    <div className="payment-canceled-page d-flex justify-content-center align-items-center">
      <div className="text-center">
        {/* Payment cancellation message */}
        <h1 className="mb-4">Payment Canceled</h1>
        <p className="mb-4">It looks like your payment was not completed. Please try again later.</p>
        {/* Go to Home Button */}
        <Button className="btn btn-secondary" onClick={goToHome}>
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default PaymentCanceledPage;

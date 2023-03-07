import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Pricing = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const onSuccess = (details: any, data: any) => {
    return new Promise<void>((resolve, reject) => {
      // Call your server-side route to process the payment
      fetch('/api/paypal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Show success message
          setShowSuccess(true);
          resolve();
        })
        .catch((error) => reject(error));
    });
  };

  return (<>
    <h1>Service</h1>
    
    <PayPalScriptProvider options={{ 'client-id': 'YOUR_CLIENT_ID' }}>
      <PayPalButtons
        style={{ layout: 'horizontal' }}
        createOrder={(data, actions) => {
          // Create a PayPal order
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '10.00',
                  currency_code: 'EUR',
                },
              },
            ],
          });
        }}
        onApprove={onSuccess}
      />
      {showSuccess && <p>Payment was successful!</p>}
    </PayPalScriptProvider>
  </>);
};

export default Pricing;

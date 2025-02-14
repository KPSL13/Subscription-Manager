// src/components/SubscriptionItem.js
import React from 'react';

const SubscriptionItem = ({ subscription }) => {
  return (
    <div>
      <h2>{subscription.name}</h2>
      <p>Amount: {subscription.amount}</p>
      <p>Cycle: {subscription.cycle}</p>
    </div>
  );
};

export default SubscriptionItem;

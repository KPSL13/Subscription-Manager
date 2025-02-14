// src/components/SubscriptionList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubscriptionItem from './SubscriptionItem.js';

const SubscriptionList = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Fetch subscriptions from the backend
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get('/api/subscriptions');
        setSubscriptions(response.data);
      } catch (error) {
        console.error('Error fetching subscriptions:', error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div>
      <h2>Subscription List</h2>
      <ul>
        {subscriptions.map((subscription) => (
          <SubscriptionItem key={subscription.id} subscription={subscription} />
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;

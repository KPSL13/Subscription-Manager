// src/components/AddSubscriptionForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const AddSubscriptionForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/api/subscriptions', { name, amount, date });
      setName('');
      setAmount('');
      setDate('');
    } catch (error) {
      console.error('Error adding subscription:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <TextField
        label="Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">Add Subscription</Button>
    </form>
  );
};

export default AddSubscriptionForm;

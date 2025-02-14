<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header p-5 bg-blue-500 text-white">
        <h1 className="text-3xl font-bold">Subscription Manager</h1>
        <p className="mt-2">Keep track of your subscriptions and never miss a renewal!</p>
        <a
          className="mt-4 inline-block text-blue-200 hover:text-white"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

=======
import React from 'react';
import './App.css';
import SubscriptionList from './components/SubscriptionList.js';
import AddSubscriptionForm from './components/AddSubscriptionForm.js';

const App = () => {
  const subscriptions = [
    { id: 1, name: 'Netflix', amount: 12.99, cycle: 'monthly' },
    { id: 2, name: 'Spotify', amount: 9.99, cycle: 'monthly' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Subscription Tracker</h1>
        <AddSubscriptionForm />
        <SubscriptionList subscriptions={subscriptions} />
      </header>
    </div>
  );
};
>>>>>>> f8bbe4d (Added components folder)

export default App;

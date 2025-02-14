import axios from 'axios';

const API_URL = 'http://localhost:3000/subscriptions';

export const addSubscription = (subscription) => {
    return axios.post(API_URL, subscription);
};

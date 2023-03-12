import React from 'react';
import ReactDOM from 'react-dom/client';
import { User } from './components/user/Users';
import { Stats } from './components/statistics/Statistics';
import { FriendsLists } from './components/friendList/FriendList';
import { TransactionHistory } from './components/transaction/Transaction';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <User />
    <Stats />
    <FriendsLists />
    <TransactionHistory />
  </React.StrictMode>
);

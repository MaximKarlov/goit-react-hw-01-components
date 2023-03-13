import friends from './FriendList/friends.json';
import user from './User/user.json';
import stats from './Statistics/data.json';
import items from './Transaction/transactions.json';
import { Profile } from './User/Users';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transaction/Transaction';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} />
      <Statistics stats={stats} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};

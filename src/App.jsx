import Profile from './components/ProfileComp/Profile';
import Statistics from './components/StatisticsComp/Statistics';
import FriendList from './components/FriendsComp/FriendList';
import TransactionHistory from './components/TransactionsComp/TransactionHistory';
import user from './components/data/user.json';
import statisticalData from './components/data/statistical-data.json';
import friends from './components/data/friends.json';
import transactions from './components/data/transactions.json';

export default function App() {
  return (
    <div className="container">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

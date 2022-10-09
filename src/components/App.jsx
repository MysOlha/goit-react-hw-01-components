import user from "./Profile/user";
import data from "./Statistics/data";
import friends from "./Friends/friends";
import transactions from "./Transaction/transactions"
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./Transaction/TransactionHistory";



export const App = () => {
  return (
    <div>
    <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats} />

    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />

    <FriendList friends={friends} />
    
    <TransactionHistory items={transactions} />
    
    </div>
  );
};

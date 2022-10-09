import { FriendListItem } from "./FriendListItem"
import css from "./Friends.module.css"

export const FriendList = ({ friends }) => {
    return (
      <ul className={css.friendList}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    );
  };


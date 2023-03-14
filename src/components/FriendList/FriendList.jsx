import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendList/FriendListItem';
import friendsListCss from './friendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={friendsListCss.list}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        key={id}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

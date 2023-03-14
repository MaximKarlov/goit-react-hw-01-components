import friendsListCss from '../FriendList/friendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={friendsListCss.list__item} key={id}>
      <span
        className={
          isOnline
            ? friendsListCss.list_status__online
            : friendsListCss.list_status__offline
        }
      ></span>
      <img
        className={friendsListCss.list__avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={friendsListCss.list__name}>{name}</p>
    </li>
  );
};

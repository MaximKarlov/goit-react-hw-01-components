import UserInfo from '../user/user'
import  '../user/user.css'

export const User = () => {
  return (
      <div className="profile">
  <div className="description">
    <img
      src={UserInfo.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{UserInfo.username}</p>
    <p className="tag">@{ UserInfo.tag}</p>
    <p className="location">{ UserInfo.location}</p>
  </div>

  <ul className="stats">
    <li className="items">
      <span className="label">Followers</span>
      <span className="quantity">{UserInfo.stats.followers}</span>
    </li>
    <li className="items">
      <span className="label">Views</span>
      <span className="quantity">{UserInfo.stats.views}</span>
    </li>
    <li className="items">
      <span className="label">Likes</span>
      <span className="quantity">{ UserInfo.stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

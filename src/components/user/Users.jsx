import PropTypes from 'prop-types';
import userInfo  from '../user/user'
import  '../user/user.css'


export const User = () => {
  return (
      <div className="profile">
  <div className="description">
    <img
      src={userInfo.avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{userInfo.userName}</p>
    <p className="tag">@{ userInfo.tag}</p>
    <p className="location">{userInfo.location}</p>
  </div>

  <ul className="stats">
    <li className="items">
      <span className="label">Followers</span>
      <span className="quantity">{userInfo.stats.followers}</span>
    </li>
    <li className="items">
      <span className="label">Views</span>
      <span className="quantity">{userInfo.stats.views}</span>
    </li>
    <li className="items">
      <span className="label">Likes</span>
      <span className="quantity">{userInfo.stats.likes}</span>
    </li>
  </ul>
</div>
  );
};


User.propTypes = {
 username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  // stats: PropTypes.shape({
  //   followers: PropTypes.number.isRequired,
  //   views: PropTypes.number.isRequired,
  //   likes: PropTypes.number.isRequired,
  // }).isRequired,
};
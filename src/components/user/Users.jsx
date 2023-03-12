import UserInfo from '../user/user'
import  '../user/user.css'

export const User = () => {
  return (
      <div class="profile">
  <div class="description">
    <img
      src={UserInfo.avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{UserInfo.username}</p>
    <p class="tag">@{ UserInfo.tag}</p>
    <p class="location">{ UserInfo.location}</p>
  </div>

  <ul class="stats">
    <li class="items">
      <span class="label">Followers</span>
      <span class="quantity">{UserInfo.stats.followers}</span>
    </li>
    <li class="items">
      <span class="label">Views</span>
      <span class="quantity">{UserInfo.stats.views}</span>
    </li>
    <li class="items">
      <span class="label">Likes</span>
      <span class="quantity">{ UserInfo.stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

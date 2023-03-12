import  Friends  from '../friendList/friends.json'
import './FriendList.css'


const FriendList = ({ Array }) => {
  return (
        <ul className="friend-list">
          {Array.map(elem => (
            <li className="friend-list__item" key={elem.id}>
              <span className="friend-list__status" style={{backgroundColor: offline(elem.isOnline.toString())}}></span>
                  <img className="friend-list__avatar" src={ elem.avatar} alt="User avatar"  width="48"/>
                  <p className="friend-list__name">{ elem.name}</p>
            </li>   
      ))}
      </ul> 
  );
};

function offline(elem) {

  if (elem === "true") {
    return 'green';
  }
  return 'red';

}


export const FriendsLists = () => {
  return (
    <FriendList Array={Friends} />
  );
};

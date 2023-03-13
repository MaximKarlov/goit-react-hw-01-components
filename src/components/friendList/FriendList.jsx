import PropTypes from 'prop-types';
import friendsListCss from './friendList.module.css'


export const FriendList = ({ friends }) => {
  return (
        <ul className={friendsListCss.list}>
          {friends.map(elem => (
            <li className={friendsListCss.list__item} key={elem.id}>
              <span className={friendsListCss.list__status} style={{backgroundColor: offline(elem.isOnline.toString())}}></span>
                  <img className={friendsListCss.list__avatar} src={ elem.avatar} alt="User avatar"  width="48"/>
                  <p className={friendsListCss.list__name}>{ elem.name}</p>
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
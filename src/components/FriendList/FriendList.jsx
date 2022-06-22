import {checkIsOnline} from '../../helpers/checkIsOnline'
import {List} from './FriendList.styled'

const FriendList = ({friends}) => {
  return (<List>
  {friends.map(friend => {
    return (
      <li className="item" key={friend.id}>
  <span className="status" style={{backgroundColor: checkIsOnline(friend.isOnline)}}></span>
  <img className="avatar" src={friend.avatar} alt="User avatar" />
  <p className="name">{friend.name}</p>
</li>
    )
  })}
</List>)
}
export default FriendList
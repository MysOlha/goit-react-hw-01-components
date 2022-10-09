import css from "./Friends.module.css"
import PropTypes from 'prop-types'; 

export const FriendListItem = ({friend: {isOnline, avatar, name}}) => {
    return (
    <div className={css.item}>
    <span className={isOnline ? css.online : css.offline}></span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </div>)
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        isOnline: PropTypes.bool,
        avatar: PropTypes.string,
        name: PropTypes.string,
 }),
}
    
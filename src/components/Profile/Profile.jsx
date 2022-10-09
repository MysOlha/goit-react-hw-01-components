import PropTypes from 'prop-types'; 
import css from './Profile.module.css'

export const Profile = ({avatar, username, tag, location, stats: {followers, views, likes}}) => {
    return <div className={css.profile}>
    <div className="description">
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li className={css.label}>
        <span >Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.label}>
        <span>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.label}>
        <span >Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
}

Profile.propTypes = {
avatar: PropTypes.string,
username: PropTypes.string,
tag: PropTypes.string,
location: PropTypes.string,

followers: PropTypes.number,
views: PropTypes.number,
likes: PropTypes.number,

}
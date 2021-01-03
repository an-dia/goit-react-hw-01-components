import PropTypes from 'prop-types';
import s from './Profile.module.css';
// import defaultImage from './default.jpg';

export default function Profile({
  name = 'Гость',
  tag,
  location,
  avatar = 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
  stats,
  // statsFollowers,
  // statsViews,
  // statsLikes,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.text}>@{tag}</p>
        <p className={s.text}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.items}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.items}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.items}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  // statsFollowers: PropTypes.number,
  // statsViews: PropTypes.number,
  // statsLikes: PropTypes.number,
};

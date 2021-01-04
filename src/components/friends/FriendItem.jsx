import PropTypes from 'prop-types';
import s from '../Friends/Friends.module.css';

export default function Friend({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.isOnline : s.isOffline}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

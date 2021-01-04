// import React from "react";
import PropTypes from 'prop-types';
import randomColor from '../../randomColor';
import s from './Statistics.module.css';

export default function StatisticsItem({ label, percentage }) {
  return (
    <li className={s.item} style={{ backgroundColor: randomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage} %</span>
    </li>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

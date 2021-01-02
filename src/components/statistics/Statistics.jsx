// import React from "react";
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
// import statisticalData from '../../statistical-data.json';

export default function Statistics({title, stats}) {

return <section className="statistics">
  {title && <h2 className="title">{title}</h2>}
  
  <ul className="stat-list">
    {stats.map(stat => 
      <StatisticsItem
        key={stat.id}
        label={stat.label}
        percentage={stat.percentage}
      />
      )}
  </ul>
</section>
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }))
}
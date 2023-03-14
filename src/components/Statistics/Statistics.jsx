import PropTypes from 'prop-types';
import { getRandomHexColor } from '../randomColor';
import statCss from './statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={statCss.statistics}>
      {title && <h2 className={statCss.title}>{title}</h2>}
      <ul className={statCss.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={statCss.item}
            key={id}
            style={{ background: getRandomHexColor() }}
          >
            <span className={statCss.label}>{label}</span>
            <span className={statCss.percetage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

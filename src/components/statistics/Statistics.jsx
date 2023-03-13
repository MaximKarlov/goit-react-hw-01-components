
import {getRandomHexColor } from '../randomColor'
import statCss from './statistics.module.css'


export const Statistics = ({ stats, title }) => {
  return (
        <section className={statCss.statistics}>
      {title && (<h2 className={statCss.title}>{title}</h2>)}
    <ul className={statCss.stat_list}>
      {stats.map(elem => (
        <li className={statCss.item} key={elem.id} style={{ background: getRandomHexColor()}}>
                <span className={statCss.abel}>{elem.label}</span>
                <span className={statCss.percetage}>{elem.percentage}%</span>
            </li>
      ))}
      </ul> 
    </section>
  );
};

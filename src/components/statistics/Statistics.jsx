import Info from '../statistics/data.json'
import {getRandomHexColor } from '../randomColor'
import '../statistics/statistics.css'


const InfoList = ({ Array }) => {
  return (
        <section className="statistics">
      <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
      {Array.map(elem => (
        <li className="item" key={elem.id} style={{ background: getRandomHexColor()}}>
                <span className="label">{elem.label}</span>
                <span className="percentage">{elem.percentage}%</span>
            </li>
      ))}
      </ul> 
    </section>
  );
};


export const Stats = () => {
  return (
    <InfoList Array={Info} />
  );
};
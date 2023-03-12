import Info from '../statistics/data.json'
import {getRandomHexColor } from '../randomColor'
import '../statistics/statistics.css'


const InfoList = ({ Array }) => {
  return (
        <section class="statistics">
      <h2 class="title">Upload stats</h2>
    <ul class="stat-list">
      {Array.map(elem => (
        <li class="item" id={elem.id} style={{ background: getRandomHexColor()}}>
                <span class="label">{elem.label}</span>
                <span class="percentage">{elem.percentage}%</span>
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
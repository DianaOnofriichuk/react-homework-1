import { StatisticsCard } from './Statistix.styled';
import { getRandomHexColor } from '../../helpers/getRandomHexColor'

const Statistics = ({title, stats}) => {
  return (
    <StatisticsCard>
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(stat => {
          return (
            <li className="item" key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          )
        })}
      </ul>
    </StatisticsCard>)
}
export default Statistics;
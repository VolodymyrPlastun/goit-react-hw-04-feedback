import s from './Statistics.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Statistics = ({ state, total, posPersentage }) => (
    <div>
        <ul>
            {state.map(([key, value]) => (
                <li key={nanoid()} className={s.StatisticsItem}>{key}: <span>{value}</span></li>
            ))}
            <li className={s.StatisticsItem}>Total: <span>{total}</span></li>
            <li className={s.StatisticsItem}>Positive feedback: <span>{posPersentage}%</span></li>
        </ul>
    </div>
);

Statistics.propTypes = {
    state: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
posPersentage: PropTypes.number.isRequired,
}

export default Statistics;


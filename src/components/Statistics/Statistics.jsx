import PropTypes from 'prop-types';

import {
  StaricticsContainer,
  StaricticsPartial,
  StaricticsName,
  StatisticsValue,
} from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StaricticsContainer>
      <StaricticsPartial>
        <StaricticsName>Good:</StaricticsName>
        <StatisticsValue>{good}</StatisticsValue>
      </StaricticsPartial>
      <StaricticsPartial>
        <StaricticsName>Neutral:</StaricticsName>
        <StatisticsValue>{neutral}</StatisticsValue>
      </StaricticsPartial>
      <StaricticsPartial>
        <StaricticsName>Bad:</StaricticsName>
        <StatisticsValue>{bad}</StatisticsValue>
      </StaricticsPartial>
      <StaricticsPartial>
        <StaricticsName>Total</StaricticsName>
        <StatisticsValue>{total}</StatisticsValue>
      </StaricticsPartial>
      <StaricticsPartial>
        <StaricticsName>Positive percentage:</StaricticsName>
        <StatisticsValue>{good ? positivePercentage : 0}%</StatisticsValue>
      </StaricticsPartial>
    </StaricticsContainer>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

import PropTypes from 'prop-types';

import { FeedBackOptionBtn, ButtonDiv } from './FeedbackOprions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonDiv>
      {options.map(option => (
        <FeedBackOptionBtn
          type="button"
          onClick={onLeaveFeedback}
          name={option}
          key={option}
        >
          {option}
        </FeedBackOptionBtn>
      ))}
    </ButtonDiv>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

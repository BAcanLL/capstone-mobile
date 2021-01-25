import React from 'react';
import { ItemWrapper, Wrapper } from './word-bubbles.style';
import Button from './button';
import PropTypes from 'prop-types';

const WordBubbles = ({ words, onPress, disabled = false }) => {
  return (
    <Wrapper>
      {words.map((word, i) => (
        <ItemWrapper key={'wrapper' + i}>
          <Button.Toggle
            key={'item' + i}
            onPress={(isActive) => onPress(i, word, isActive)}
            text={word}
            disabled={disabled}
          />
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

export default WordBubbles;

WordBubbles.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPress: PropTypes.func.isRequired,
};

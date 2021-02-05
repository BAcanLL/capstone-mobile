import React from 'react';
import { ItemWrapper, Wrapper } from './word-bubbles.style';
import Button from '../atoms/button';
import PropTypes from 'prop-types';

const WordBubbles = ({ words, selected, onPress, disabled = false }) => {
  return (
    <Wrapper>
      {words.map((word, i) => (
        <ItemWrapper key={'wrapper' + i}>
          <Button.Toggle
            key={'item' + i}
            onPress={(isActive) => onPress(i, word, isActive)}
            text={word}
            isActive={selected.includes(word)}
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
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

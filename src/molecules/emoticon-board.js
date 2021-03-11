import React from 'react';
import { Wrapper } from './emoticon-board.style';
import Emoticon from '../atoms/emoticon';

export const EMOTICON_TYPES = {
  DISMAL: 'Dismal',
  SAD: 'Sad',
  NEUTRAL: 'Neutral',
  HAPPY: 'Happy',
  ECSTATIC: 'Ecstatic',
};

const EmoticonBoard = ({ onPress, disabled = false }) => {
  return (
    <Wrapper>
      <Emoticon.Dismal
        onPress={() => onPress(EMOTICON_TYPES.DISMAL)}
        disabled={disabled}
      />
      <Emoticon.Sad
        onPress={() => onPress(EMOTICON_TYPES.SAD)}
        disabled={disabled}
      />
      <Emoticon.Neutral
        onPress={() => onPress(EMOTICON_TYPES.NEUTRAL)}
        disabled={disabled}
      />
      <Emoticon.Happy
        onPress={() => onPress(EMOTICON_TYPES.HAPPY)}
        disabled={disabled}
      />
      <Emoticon.Ecstatic
        onPress={() => onPress(EMOTICON_TYPES.ECSTATIC)}
        disabled={disabled}
      />
    </Wrapper>
  );
};

export default EmoticonBoard;

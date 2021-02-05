import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { FONT_SIZES, TextView } from '../atoms/typography';
import { SentimentStoreContext } from './sentiment-collection';
import PropTypes from 'prop-types';
import moment from 'moment';

export const TIMER_TYPES = {
  EMOTICON: 'EMOTICON_TIMER',
  WORDS: 'WORDS_TIMER',
};

const Timer = observer(({ type }) => {
  const [text, setText] = useState('');
  const store = useContext(SentimentStoreContext);
  useEffect(() => {
    if (type === TIMER_TYPES.WORDS) {
      setText(store.wordsTimeRemaining);
    } else {
      setText(store.emoticonTimeRemaining);
    }

    const timer = setInterval(() => {
      let time = '';

      if (type === TIMER_TYPES.WORDS) {
        time = store.wordsTimeRemaining;
        if (moment().isAfter(store.wordsAvailable)) {
          store.setWordsAvailable(null);
        }
      } else {
        time = store.emoticonTimeRemaining;
        if (moment().isAfter(store.emoticonAvailable)) {
          store.setEmoticonAvailable(null);
        }
      }
      setText(time);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <TextView size={FONT_SIZES.timer}>{text}</TextView>;
});

export default Timer;

Timer.propTypes = {
  type: PropTypes.oneOf(Object.values(TIMER_TYPES)),
};

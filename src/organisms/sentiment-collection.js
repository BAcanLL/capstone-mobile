import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  ContentWrapper,
  ExpandButton,
  TextWrapper,
  TimerWrapper,
} from './sentiment-collection.style';
import { FONT_SIZES, FONT_WEIGHTS, TextView } from '../atoms/typography';
import { COLORS } from '../atoms/palette';
import EmoticonBoard from '../molecules/emoticon-board';
import { observer, useLocalStore } from 'mobx-react';
import SentimentStore from './sentiment-collection.store';
import WordBubbles from '../molecules/word-bubbles';
import Input from '../atoms/input';
import { Animated, Easing } from 'react-native';
import Timer, { TIMER_TYPES } from './sentiment-collection.timer';
import { Section } from '../atoms/section.style';
import { RootStoreContext } from '../index';

const EMOTICON_TITLE = 'How are you feeling?';
const EMOTICON_INSTRUCTIONS =
  'Tap the emoticon that best matches your feelings';
const WORDS_TITLE = 'Which words best describe you?';
const WORDS_INSTRUCTIONS = 'Choose four from below';
const TEXT_TITLE = 'Anything else to add?';
const BUTTON_COLLAPSED = 'Show';
const BUTTON_EXPANDED = 'Hide';

const WORDS = [
  'Stressed',
  'Happy',
  'Angry',
  'Tired',
  'Sad',
  'Anxious',
  'Excited',
  'Grateful',
  'Relaxed',
];

export const SentimentStoreContext = React.createContext(null);

const INITIAL_HEIGHT = 166;
const FINAL_HEIGHT = 522;

const SentimentCollection = observer(() => {
  const [pressed, setPressed] = useState(false);
  const { apiStore } = useContext(RootStoreContext);
  const store = useLocalStore(SentimentStore, { apiStore });
  const anim = useRef(new Animated.Value(INITIAL_HEIGHT)).current;

  useEffect(() => {
    store.init();
  }, []);

  const onExpandPress = () => {
    Animated.timing(anim, {
      toValue: store.expanded ? INITIAL_HEIGHT : FINAL_HEIGHT,
      duration: 500,
      easing: Easing.inOut(Easing.cubic),
      useNativeDriver: false,
    }).start();
    store.toggleExpanded();
  };

  return (
    <SentimentStoreContext.Provider value={store}>
      <Animated.View
        style={{ height: anim, width: '100%', padding: 5, marginTop: 10 }}
      >
        <Section animate style={{ height: '100%', margin: 0 }}>
          <TextWrapper>
            <TextView>{EMOTICON_TITLE}</TextView>
            <TextView
              size={FONT_SIZES.small}
              weight={FONT_WEIGHTS.regular}
              color={COLORS.grey}
            >
              {EMOTICON_INSTRUCTIONS}
            </TextView>
          </TextWrapper>
          <ContentWrapper>
            <EmoticonBoard onPress={store.confirmEmoticon} />
            {!store.emoticonVisible && (
              <TimerWrapper>
                <Timer type={TIMER_TYPES.EMOTICON} />
              </TimerWrapper>
            )}
          </ContentWrapper>
          <TextWrapper>
            <TextView>{WORDS_TITLE}</TextView>
            <TextView
              size={FONT_SIZES.small}
              weight={FONT_WEIGHTS.regular}
              color={COLORS.grey}
            >
              {WORDS_INSTRUCTIONS}
            </TextView>
          </TextWrapper>
          <ContentWrapper>
            <WordBubbles
              onPress={(i, word, selected) => {
                store.selectWord(i, word, selected);
              }}
              selected={store.selectedWords}
              words={WORDS}
            />
            {!store.wordsVisible && (
              <TimerWrapper>
                <Timer type={TIMER_TYPES.WORDS} />
              </TimerWrapper>
            )}
          </ContentWrapper>
          <TextWrapper>
            <TextView>{TEXT_TITLE}</TextView>
          </TextWrapper>
          <ContentWrapper>
            <Input
              onChange={store.setTextInputValue}
              value={store.textInputValue}
              onSaveButtonPress={store.confirmText}
            />
          </ContentWrapper>
          <ExpandButton
            pressed={pressed}
            onPress={onExpandPress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
          >
            <TextView
              size={FONT_SIZES.small}
              weight={FONT_WEIGHTS.regular}
              color={COLORS.grey}
            >
              {store.expanded ? BUTTON_EXPANDED : BUTTON_COLLAPSED}
            </TextView>
          </ExpandButton>
        </Section>
      </Animated.View>
    </SentimentStoreContext.Provider>
  );
});

export default SentimentCollection;

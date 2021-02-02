import React, { useRef, useState } from 'react';
import {
  ContentWrapper,
  ExpandButton,
  TextWrapper,
  Wrapper,
} from './sentiment-collection.style';
import { FONT_SIZES, FONT_WEIGHTS, TextView } from '../atoms/typography';
import { COLORS } from '../atoms/palette';
import EmoticonBoard from '../molecules/emoticon-board';
import { observer, useLocalStore } from 'mobx-react';
import SentimentStore from './sentiment-collection.store';
import WordBubbles from '../molecules/word-bubbles';
import Input from '../atoms/input';
import { Animated, Easing } from 'react-native';

const EMOTICON_TITLE = 'How are you feeling?';
const EMOTICON_INSTRUCTIONS =
  'Tap the emoticon that best matches your feelings';
const WORDS_TITLE = 'Which words best describe you?';
const WORDS_INSTRUCTIONS = 'Choose four from below';
const TEXT_TITLE = 'Anything else to add?';
const BUTTON_COLLAPSED = 'Show';
const BUTTON_EXPANDED = 'Hide';

const WORDS = [
  'Bored',
  'Angry',
  'Confident',
  'Accomplished',
  'Guilty',
  'Relieved',
  'Happy',
  'Exhausted',
  'Lonely',
];

const SentimentCollection = observer(() => {
  const [pressed, setPressed] = useState(false);
  const store = useLocalStore(SentimentStore);
  const heightAnim = useRef(new Animated.Value(156)).current;

  const onExpandPress = () => {
    const newHeight = store.expanded ? 156 : 502;
    Animated.timing(heightAnim, {
      toValue: newHeight,
      duration: 500,
      easing: Easing.inOut(Easing.cubic),
    }).start();
    store.toggleExpanded();
  };

  return (
    <Animated.View style={{ height: heightAnim }}>
      <Wrapper>
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
          <EmoticonBoard onPress={store.selectEmoticon} />
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
            words={WORDS}
          />
        </ContentWrapper>
        <TextWrapper>
          <TextView>{TEXT_TITLE}</TextView>
        </TextWrapper>
        <ContentWrapper>
          <Input
            onChange={store.setTextInputValue}
            value={store.textInputValue}
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
      </Wrapper>
    </Animated.View>
  );
});

export default SentimentCollection;

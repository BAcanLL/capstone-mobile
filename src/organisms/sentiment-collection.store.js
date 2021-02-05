import { action, observable } from 'mobx';
import { asyncGetValue, asyncStoreValue } from '../utils/storage';
import moment from 'moment';

export const MAX_WORDS = 4;

const TIME_KEYS = {
  EMOTICON_AVAILABLE: 'TIME_EMOTICON_AVAILABLE',
  WORDS_AVAILABLE: 'TIME_WORDS_AVAILABLE',
};

export const SENTIMENT_TIMEOUT = 0.5;

const getTimer = (duration) => {
  return moment().add(duration, 'm');
};

const formatTime = (time) => {
  if (!moment(time).isValid()) {
    return '';
  }
  return moment(time).format('m:ss');
};

const SentimentStore = () => {
  const store = observable({
    // observables
    expanded: false,
    selectedWordsMap: new Map(),
    textInputValue: '',
    emoticonAvailable: null,
    wordsAvailable: null,

    // computed properties
    get selectedWords() {
      return Array.from(store.selectedWordsMap.values());
    },
    get emoticonVisible() {
      return (
        store.emoticonAvailable == null ||
        moment().isAfter(store.emoticonAvailable)
      );
    },
    get wordsVisible() {
      return (
        store.wordsAvailable == null || moment().isAfter(store.wordsAvailable)
      );
    },
    get emoticonTimeRemaining() {
      if (store.emoticonVisible) {
        return 0;
      }
      return formatTime(moment(store.emoticonAvailable).diff(moment()));
    },
    get wordsTimeRemaining() {
      if (store.wordsVisible) {
        return 0;
      }
      return formatTime(moment(store.wordsAvailable).diff(moment()));
    },

    // actions
    setEmoticonAvailable: action((time) => {
      if (time != null && !moment(time).isValid()) return;
      store.emoticonAvailable = time;
    }),
    setWordsAvailable: action((time) => {
      if (time != null && !moment(time).isValid()) return;
      store.wordsAvailable = time;
    }),
    toggleExpanded: action(() => {
      store.expanded = !store.expanded;
    }),
    selectWord: action((key, word, select = true) => {
      if (select && store.selectedWordsMap.size < MAX_WORDS) {
        store.selectedWordsMap.set(key, word);
        if (store.selectedWords.length >= 4) {
          store.confirmWords();
        }
      }
      if (!select) {
        store.selectedWordsMap.delete(key);
      }
    }),
    setTextInputValue: action((value) => {
      store.textInputValue = value;
    }),

    // store methods
    init: async () => {
      try {
        const emoteTime = await asyncGetValue(TIME_KEYS.EMOTICON_AVAILABLE);
        const wordsTime = await asyncGetValue(TIME_KEYS.WORDS_AVAILABLE);
        if (emoteTime != null) {
          store.setEmoticonAvailable(emoteTime);
        }
        if (wordsTime != null) {
          store.setWordsAvailable(wordsTime);
        }
      } catch (e) {
        console.log('Failed to initialize Sentiment Store! ' + e);
      }
    },
    confirmEmoticon: (emoticon) => {
      console.log(emoticon);
      // make API call, then on success
      const timer = getTimer(SENTIMENT_TIMEOUT).toISOString();
      store.setEmoticonAvailable(timer);
      asyncStoreValue(TIME_KEYS.EMOTICON_AVAILABLE, timer);
    },
    confirmWords: () => {
      console.log(store.selectedWords);
      // make API call, then on success
      const timer = getTimer(SENTIMENT_TIMEOUT).toISOString();
      store.setWordsAvailable(timer);
      asyncStoreValue(TIME_KEYS.WORDS_AVAILABLE, timer);
      store.selectedWordsMap.clear();
    },
    confirmText: () => {
      console.log(store.textInputValue);
      // make API call
    },
  });

  if (process.env.NODE_ENV === 'development') {
    window.SentimentStore = store;
  }

  return store;
};

export default SentimentStore;

import { action, observable } from 'mobx';

const MAX_WORDS = 4;

const SentimentStore = () => {
  const store = observable({
    // observables
    expanded: false,
    selectedWordsMap: new Map(),
    textInputValue: '',

    // computed properties
    get selectedWords() {
      return Array.from(store.selectedWordsMap.values());
    },

    // actions
    toggleExpanded: action(() => {
      store.expanded = !store.expanded;
    }),
    selectWord: action((key, word, select = true) => {
      if (select && store.selectedWordsMap.size < MAX_WORDS) {
        store.selectedWordsMap.set(key, word);
      }
      if (!select) {
        store.selectedWordsMap.delete(key);
      }
    }),
    setTextInputValue: action((value) => {
      store.textInputValue = value;
    }),

    // store methods
    selectEmoticon: (emoticon) => {
      console.log(emoticon);
    },
  });

  if (process.env.NODE_ENV === 'development') {
    window.SentimentStore = store;
  }

  return store;
};

export default SentimentStore;

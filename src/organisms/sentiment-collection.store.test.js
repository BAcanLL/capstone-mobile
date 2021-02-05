import SentimentStore, {
  MAX_WORDS,
  SENTIMENT_TIMEOUT,
} from './sentiment-collection.store';
import moment from 'moment';

describe('Sentiment Store', () => {
  let store;
  beforeEach(() => {
    store = SentimentStore();
  });

  it('should toggle whether its expanded', () => {
    expect(store.expanded).toBe(false);
    store.toggleExpanded();
    expect(store.expanded).toBe(true);
  });

  it('should keep a map of selected words', () => {
    expect(store.selectedWords).toEqual([]);
    store.selectWord(1, '1', true);
    store.selectWord(2, '2', true);
    store.selectWord(3, '3', true);
    store.selectWord(2, '2', false);
    store.selectWord(3, '3', true);
    store.selectWord(4, '4', true);
    expect(store.selectedWords).toEqual(['1', '3', '4']);
  });

  it('should automatically confirm and clear selected words once there are enough', () => {
    store.confirmWords = jest.fn(store.confirmWords);
    expect(store.selectedWords).toEqual([]);
    for (let i = 0; i < MAX_WORDS - 1; i++) {
      store.selectWord(i, i.toString(), true);
    }
    expect(store.selectedWords).toHaveLength(MAX_WORDS - 1);
    store.selectWord(MAX_WORDS, MAX_WORDS.toString(), true);
    expect(store.confirmWords).toHaveBeenCalled();
    expect(store.selectedWords).toEqual([]);
  });

  it('should record text input', () => {
    expect(store.textInputValue).toEqual('');
    store.setTextInputValue('hello world');
    expect(store.textInputValue).toEqual('hello world');
  });

  it('should timeout emoticons after selection', () => {
    expect(store.emoticonAvailable).toBeNull();
    store.confirmEmoticon('HAPPY');
    const TIME = moment()
      .add(SENTIMENT_TIMEOUT, 'm')
      .format('YYYY-MM-DDTHH:mm:ss');
    expect(store.emoticonAvailable.format('YYYY-MM-DDTHH:mm:ss')).toEqual(TIME);
  });

  it('should timeout word bubbles after selection', () => {
    expect(store.wordsAvailable).toBeNull();
    store.confirmWords();
    const TIME = moment()
      .add(SENTIMENT_TIMEOUT, 'm')
      .format('YYYY-MM-DDTHH:mm:ss');
    expect(store.wordsAvailable.format('YYYY-MM-DDTHH:mm:ss')).toEqual(TIME);
  });
});

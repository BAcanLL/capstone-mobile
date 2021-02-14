import OnboardingStore from './onboarding.store';
import RootStore from '../index.store';

describe('Sentiment Store', () => {
  let store;
  let rootStore;
  beforeEach(() => {
    rootStore = RootStore();
    store = OnboardingStore({ rootStore });
  });

  it('should store field values', () => {
    expect(store.email).toEqual('');
    expect(store.password).toEqual('');
    expect(store.registrationEmail).toEqual('');
    expect(store.registrationPassword).toEqual('');
    expect(store.registrationPasswordConfirm).toEqual('');
    expect(store.firstName).toEqual('');
    expect(store.lastName).toEqual('');
    expect(store.birthday).toEqual('');
    expect(store.height).toEqual('');
    expect(store.weight).toEqual('');

    const testString = 'test';
    store.onEmailChange(testString);
    store.onPasswordChange(testString);
    store.onRegistrationEmailChange(testString);
    store.onRegistrationPasswordChange(testString);
    store.onRegistrationPasswordConfirmChange(testString);
    store.onFirstNameChange(testString);
    store.onLastNameChange(testString);
    store.onBirthdayChange(testString);
    store.onHeightChange(testString);
    store.onWeightChange(testString);

    expect(store.email).toEqual(testString);
    expect(store.password).toEqual(testString);
    expect(store.registrationEmail).toEqual(testString);
    expect(store.registrationPassword).toEqual(testString);
    expect(store.registrationPasswordConfirm).toEqual(testString);
    expect(store.firstName).toEqual(testString);
    expect(store.lastName).toEqual(testString);
    expect(store.birthday).toEqual(testString);
    expect(store.height).toEqual(testString);
    expect(store.weight).toEqual(testString);
  });
});

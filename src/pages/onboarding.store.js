import { action, observable } from 'mobx';

const OnboardingStore = () => {
  const store = observable({
    email: '',
    password: '',
    onEmailChange: action((email) => {
      store.email = email;
    }),
    onPasswordChange: action((password) => {
      store.password = password;
    }),
  });

  return store;
};

export default OnboardingStore;

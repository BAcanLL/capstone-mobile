import { observable } from 'mobx';
import axios from 'axios';
import moment from 'moment';

const API_URL = 'http://capstone-server-404.herokuapp.com/';

const makeAPICall = async (endpoint, body, useNativeFetchAPI = false) => {
  console.log('Making API call to ' + API_URL + endpoint);
  console.log('Request body: ' + JSON.stringify(body));
  if (useNativeFetchAPI) {
    return await fetch(API_URL + endpoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Contol-Allow-Origin': '*',
        Accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  } else {
    return await axios.post(API_URL + endpoint, body);
  }
};

const parseAssociate = (res) => {
  let status = res.status;
  const data = {
    email: res.data.email,
    firstName: res.data.firstName,
    lastName: res.data.lastName,
    prefix: res.data.prefix,
    profession: res.data.profession,
  };
  console.log(data);
  // hack to check if a therapist object is valid
  // if one key is null, assume they are all null
  if (data.email == null) {
    status = 404;
  }
  return {
    status,
    data,
  };
};

const APIStore = ({ rootStore }) => {
  const store = observable({
    // store methods
    createUser: async (data = {}, callback = () => {}) => {
      // data = {
      //   email: 'a@a.com',
      //   password: 'a',
      //   passwordConfirm: 'a',
      //   firstName: 'a',
      //   lastName: 'a',
      //   birthday: '2019-01-01',
      //   weight: 'a',
      //   height: 'a',
      // };
      const {
        email,
        password,
        passwordConfirm,
        firstName,
        lastName,
        birthday,
        weight,
        height,
      } = data;

      const body = {
        email,
        password,
        password_confirmation: passwordConfirm,
        first_name: firstName,
        last_name: lastName,
        birthday,
        height,
        weight,
      };

      try {
        const res = await makeAPICall('patients', body);
        callback(res);
        return {
          status: res.status,
          data: res.data,
        };
      } catch (err) {
        console.log(JSON.stringify(err));
        callback(err);
        throw err;
      }
    },
    login: async (email, password, callback = () => {}) => {
      const body = {
        email,
        password,
      };
      try {
        const res = await makeAPICall('patients/login', body);
        callback(res);
        return {
          status: res.status,
          data: res.data,
        };
      } catch (err) {
        console.log(JSON.stringify(err));
        callback(err);
        throw err;
      }
    },
    logout: async (callback = () => {}) => {
      try {
        const res = makeAPICall('patients/logout', {
          token: rootStore.user.token,
        });
        console.log(res);
        callback(res);
        return res;
      } catch (err) {
        console.log(err);
        callback(err);
        throw err;
      }
    },
    updateUser: async (data, callback = () => {}) => {
      // Update existing user info
      console.log(data);
      const result = true;
      callback(result);
      return result;
    },
    deleteUser: async (callback = () => {}) => {
      // Delete current user account
      const result = true;
      callback(result);
      return result;
    },
    submitEmote: async (emote, callback = () => {}) => {
      const body = {
        token: rootStore.user.token,
        value: emote,
        time: moment().format('YYYY-MM-DD HH:mm:ss'),
      };
      try {
        const res = await makeAPICall(
          'patients/' + rootStore.user.id + '/data/emotes',
          body
        );
        callback(res);
        return res;
      } catch (err) {
        console.log(JSON.stringify(err));
        callback(err);
        throw err;
      }
    },
    submitWords: async (words, callback = () => {}) => {
      // Send words
      console.log(words.join());
      const body = {
        token: rootStore.user.token,
        value: words.join(),
        time: moment().format('YYYY-MM-DD HH:mm:ss'),
      };
      try {
        const res = await makeAPICall(
          'patients/' + rootStore.user.id + '/data/words',
          body
        );
        callback(res);
        return res;
      } catch (err) {
        console.log(JSON.stringify(err));
        callback(err);
        throw err;
      }
    },
    submitMedication: async (callback = () => {}) => {
      // Send medication timing
      const body = {
        token: rootStore.user.token,
        time: moment().format('YYYY-MM-DD HH:mm:ss'),
      };
      try {
        const res = await makeAPICall(
          'patients/' + rootStore.user.id + '/data/medication',
          body
        );
        callback(res);
        return res;
      } catch (err) {
        console.log(JSON.stringify(err));
        callback(err);
        throw err;
      }
    },
    submitNote: async (note, callback = () => {}) => {
      // Send text note
      console.log(note);
      const body = {
        token: rootStore.user.token,
        text: note,
        time: moment().format('YYYY-MM-DD HH:mm:ss'),
      };
      try {
        const res = await makeAPICall(
          'patients/' + rootStore.user.id + '/data/notes',
          body
        );
        callback(res);
        return res;
      } catch (err) {
        console.log(JSON.stringify(err));
        callback(err);
        throw err;
      }
    },
    getAssociates: async (callback = () => {}) => {
      const body = {
        token: rootStore.user.token,
      };
      try {
        const res = await makeAPICall(
          'patients/' + rootStore.user.id + '/therapist',
          body
        );
        callback(res);
        return parseAssociate(res);
      } catch (err) {
        console.log(JSON.stringify(err));
        callback(err);
        throw err;
      }
    },
    addAssociate: async (code, callback = () => {}) => {
      const body = {
        token: rootStore.user.token,
        code,
      };
      console.log(body);
      try {
        const res = await makeAPICall(
          'patients/' + rootStore.user.id + '/associate',
          body
        );
        callback(res);
        return parseAssociate(res);
      } catch (err) {
        console.log(JSON.stringify(err));
        callback(err);
        throw err;
      }
    },
    removeAssociate: async (callback = () => {}) => {
      console.log(rootStore.user.token);
      // Remove association
      const body = {
        token: rootStore.user.token,
      };
      try {
        const res = await makeAPICall(
          'patients/' + rootStore.user.id + '/unassociate',
          body
        );
        callback(res);
        return res;
      } catch (err) {
        console.log(JSON.stringify(err));
        callback(err);
        throw err;
      }
    },
  });

  if (process.env.NODE_ENV === 'development') {
    window.APIStore = store;
  }

  return store;
};

export default APIStore;

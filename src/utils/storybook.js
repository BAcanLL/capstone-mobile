import React, { useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useLocalStore } from 'mobx-react';
import RootStore from '../index.store';
import { RootStoreContext } from '../index';
import { observable } from 'mobx';

// Wrapper for displaying atoms
export const Component = ({ style = {}, className = '', children }) => (
  <View
    className={className}
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      paddingTop: 25,
    }}
  >
    <div style={style}>{children}</div>
  </View>
);

Component.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

const EXAMPLE_USER = {
  id: '1234',
  token: 'abcdefg',
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Doe',
  birthday: '2019-09-07T-15:50+00',
  height: '170',
  weight: '90.2',
};

const EXAMPLE_THERAPISTS = [
  {
    id: '1234',
    firstName: 'Gregory',
    lastName: 'House',
    prefix: 'Dr.',
    image:
      'https://njmonthly.com/wp-content/uploads/cache/2008/01/16006860405_de11619ec9_b/111247368.jpg',
    approved: false,
  },
];

const MockAPIStore = ({ rootStore }) => {
  console.log(rootStore.user);

  const store = observable({
    // store methods
    createUser: async (data, callback = () => {}) => {
      // Create new patient user
      console.log(data);
      const result = EXAMPLE_USER;
      callback(result);
      return result;
    },
    login: async (email, password, callback = () => {}) => {
      // Sign in as existing patient user
      console.log(email, password);
      const result = EXAMPLE_USER;
      callback(result);
      return result;
    },
    logout: async (callback = () => {}) => {
      // Sign out of current user account
      const result = true;
      callback(result);
      return result;
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
      // Send an emote
      console.log(emote);
      const result = true;
      callback(result);
      return result;
    },
    submitWords: async (words, callback = () => {}) => {
      // Send words
      console.log(words);
      const result = true;
      callback(result);
      return result;
    },
    submitMedication: async (callback = () => {}) => {
      // Send medication timing
      const result = true;
      callback(result);
      return result;
    },
    submitNote: async (note, callback = () => {}) => {
      // Send text note
      console.log(note);
      const result = true;
      callback(result);
      return result;
    },
    getAssociates: async (callback = () => {}) => {
      const result = EXAMPLE_THERAPISTS;
      callback(result);
      return result;
    },
    addAssociate: async (code, callback = () => {}) => {
      // Request association
      console.log(code);
      const result = EXAMPLE_THERAPISTS;
      callback(result);
      return result;
    },
    removeAssociate: async (code, callback = () => {}) => {
      // Remove association
      console.log(code);
      const result = true;
      callback(result);
      return result;
    },
  });

  return store;
};

// Wrapper for displaying atoms
export const Page = ({ style = {}, className = '', children }) => {
  const mockStore = useLocalStore(RootStore);
  const mockAPIStore = useLocalStore(MockAPIStore, { rootStore: mockStore });

  useEffect(() => {
    const mockGetUser = async () => {
      try {
        const user = await mockAPIStore.login();
        mockStore.setUser(user);
      } catch {
        // handle error
      }
    };
    mockGetUser();
  }, []);

  return (
    <RootStoreContext.Provider
      value={{ rootStore: mockStore, apiStore: mockAPIStore }}
    >
      <View
        className={className}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          marginTop: 25,
        }}
      >
        <div style={{ height: 812, width: 375, ...style }}>{children}</div>
      </View>
    </RootStoreContext.Provider>
  );
};

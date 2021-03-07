import React, { useContext, useEffect } from 'react';
import { Body, SignOut, Wrapper } from './profile.style';
import { Header } from '../atoms/section.style';
import Button, { BUTTON_SIZES } from '../atoms/button';
import ProfileInfo from '../molecules/profile-info';
import { ScrollView } from 'react-native';
import { RootStoreContext } from '../index';
import { observer, useLocalStore } from 'mobx-react';
import ProfileStore from './profile.store';
import { COLORS } from '../atoms/palette';

const buttonSpecs = { ...BUTTON_SIZES.large, shadow: false, iconSize: 25 };

const SIGN_OUT = 'Sign Out';

const Profile = observer(() => {
  const { rootStore, apiStore } = useContext(RootStoreContext);
  const store = useLocalStore(ProfileStore, { rootStore, apiStore });

  useEffect(() => {
    const getTherapists = async () => {
      // Retrieve therapists
      try {
        const res = await apiStore.getAssociates();
        if (res.status === 200) {
          const therapist = res.data;
          store.setTherapists([therapist]);
          console.log(therapist);
        }
      } catch {
        console.log('Failed to fetch therapists!');
      }
    };
    getTherapists();
  }, []);

  return (
    <Wrapper>
      <Header>
        <Button
          onPress={store.onBackButtonPress}
          icon="arrow"
          size={buttonSpecs}
        />
        {!store.editModeEnabled && (
          <Button
            onPress={() => {
              store.setEditModeEnabled(true);
            }}
            icon="pencil"
            size={buttonSpecs}
          />
        )}
      </Header>
      <ScrollView
        style={{ width: '100%', padding: 5 }}
        showsVerticalScrollIndicator={false}
      >
        <Body key={store.therapists.length}>
          {!store.editModeEnabled && (
            <ProfileInfo
              firstName={store.firstName}
              lastName={store.lastName}
              email={store.email}
              birthday={store.birthday}
              height={store.height}
              weight={store.weight}
              therapists={store.therapists}
            />
          )}
          {store.editModeEnabled && (
            <ProfileInfo.Edit
              firstName={store.firstName}
              lastName={store.lastName}
              email={store.email}
              birthday={store.birthday}
              height={store.height}
              weight={store.weight}
              code={store.code}
              newPassword={store.newPassword}
              confirmPassword={store.confirmPassword}
              therapists={store.therapists}
              onFirstNameChange={store.onFirstNameChange}
              onLastNameChange={store.onLastNameChange}
              onEmailChange={store.onEmailChange}
              onBirthdayChange={store.onBirthdayChange}
              onHeightChange={store.onHeightChange}
              onWeightChange={store.onWeightChange}
              onPasswordChange={store.onNewPasswordChange}
              onConfirmPasswordChange={store.onConfirmPasswordChange}
              onCodeChange={store.onCodeChange}
              onAddTherapist={store.addTherapist}
              onDeleteTherapist={store.deleteTherapist}
              onCancelPress={store.onBackButtonPress}
              onConfirmPress={store.confirm}
              onDeletePress={store.deleteAccount}
            />
          )}
          {!store.editModeEnabled && (
            <SignOut>
              <Button
                onPress={store.signOutUser}
                text={SIGN_OUT}
                color={COLORS.blue}
                size={BUTTON_SIZES.large}
              />
            </SignOut>
          )}
        </Body>
      </ScrollView>
    </Wrapper>
  );
});

export default Profile;
